import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const dbPath = path.join(dataDir, "learnjs.sqlite");

fs.mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(dbPath);

db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT UNIQUE,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    xp INTEGER NOT NULL DEFAULT 0,
    momentum INTEGER NOT NULL DEFAULT 0,
    momentum_charges INTEGER NOT NULL DEFAULT 1,
    last_active_date TEXT,
    completed TEXT NOT NULL DEFAULT '[]',
    knowledge_cards TEXT NOT NULL DEFAULT '[]',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS pending_signups (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    otp_hash TEXT NOT NULL,
    otp_salt TEXT NOT NULL,
    attempts INTEGER NOT NULL DEFAULT 0,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
  CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_pending_email ON pending_signups(email);
`);

// Migrate older DBs that were created before email existed.
const userCols = db.prepare("PRAGMA table_info(users)").all().map((c) => c.name);
if (!userCols.includes("email")) {
  db.exec("ALTER TABLE users ADD COLUMN email TEXT");
  try {
    db.exec("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email)");
  } catch {
    // ignore if duplicates somehow exist
  }
}

export function normalizeUsername(raw) {
  let u = String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/^@+/, "");
  u = u.replace(/[^a-z0-9_]/g, "");
  if (!u) return null;
  return `@${u}`;
}

export function displayId(id) {
  return `#${id}`;
}

export function getUserByUsername(username) {
  return db.prepare("SELECT * FROM users WHERE username = ?").get(username);
}

export function getUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

export function getUserById(id) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
}

export function nextPublicId() {
  for (let i = 0; i < 40; i += 1) {
    const id = 10000 + Math.floor(Math.random() * 90000);
    const exists = db.prepare("SELECT 1 FROM users WHERE id = ?").get(id);
    if (!exists) return id;
  }
  throw new Error("Could not allocate a unique user id");
}

export function insertUser({ id, username, email, passwordHash, passwordSalt }) {
  const createdAt = new Date().toISOString();
  db.prepare(
    `INSERT INTO users (
      id, username, email, password_hash, password_salt,
      xp, momentum, momentum_charges, last_active_date,
      completed, knowledge_cards, created_at
    ) VALUES (?, ?, ?, ?, ?, 0, 0, 1, NULL, '[]', '[]', ?)`
  ).run(id, username, email, passwordHash, passwordSalt, createdAt);
  return getUserById(id);
}

export function createPendingSignup(row) {
  db.prepare("DELETE FROM pending_signups WHERE email = ? OR username = ?").run(
    row.email,
    row.username
  );
  db.prepare(
    `INSERT INTO pending_signups (
      id, username, email, password_hash, password_salt,
      otp_hash, otp_salt, attempts, expires_at, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?)`
  ).run(
    row.id,
    row.username,
    row.email,
    row.passwordHash,
    row.passwordSalt,
    row.otpHash,
    row.otpSalt,
    row.expiresAt,
    row.createdAt
  );
  return getPendingSignup(row.id);
}

export function getPendingSignup(id) {
  return db.prepare("SELECT * FROM pending_signups WHERE id = ?").get(id);
}

export function bumpPendingAttempts(id) {
  db.prepare("UPDATE pending_signups SET attempts = attempts + 1 WHERE id = ?").run(id);
  return getPendingSignup(id);
}

export function updatePendingOtp(id, { otpHash, otpSalt, expiresAt }) {
  db.prepare(
    `UPDATE pending_signups
     SET otp_hash = ?, otp_salt = ?, expires_at = ?, attempts = 0
     WHERE id = ?`
  ).run(otpHash, otpSalt, expiresAt, id);
  return getPendingSignup(id);
}

export function deletePendingSignup(id) {
  db.prepare("DELETE FROM pending_signups WHERE id = ?").run(id);
}

export function createSession(userId) {
  const token = cryptoRandomToken();
  db.prepare(
    "INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)"
  ).run(token, userId, new Date().toISOString());
  return token;
}

export function getSessionUser(token) {
  if (!token) return null;
  const row = db
    .prepare(
      `SELECT u.* FROM sessions s
       JOIN users u ON u.id = s.user_id
       WHERE s.token = ?`
    )
    .get(token);
  return row || null;
}

export function deleteSession(token) {
  if (!token) return;
  db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export function deleteUserById(userId) {
  db.prepare("DELETE FROM sessions WHERE user_id = ?").run(userId);
  db.prepare("DELETE FROM users WHERE id = ?").run(userId);
}

export function normalizeDisplayId(raw) {
  const digits = String(raw || "").replace(/[^\d]/g, "");
  if (!digits) return null;
  return Number(digits);
}

export function updateUserProgress(userId, progress) {
  db.prepare(
    `UPDATE users SET
      xp = ?,
      momentum = ?,
      momentum_charges = ?,
      last_active_date = ?,
      completed = ?,
      knowledge_cards = ?
     WHERE id = ?`
  ).run(
    progress.xp ?? 0,
    progress.momentum ?? 0,
    progress.momentumCharges ?? 1,
    progress.lastActiveDate ?? null,
    JSON.stringify(progress.completed || []),
    JSON.stringify(progress.knowledgeCards || []),
    userId
  );
  return getUserById(userId);
}

export function userToPublic(user) {
  if (!user) return null;
  let completed = [];
  let knowledgeCards = [];
  try {
    completed = JSON.parse(user.completed || "[]");
  } catch {
    completed = [];
  }
  try {
    knowledgeCards = JSON.parse(user.knowledge_cards || "[]");
  } catch {
    knowledgeCards = [];
  }
  return {
    id: user.id,
    displayId: displayId(user.id),
    username: user.username,
    email: user.email || null,
    xp: user.xp,
    momentum: user.momentum,
    momentumCharges: user.momentum_charges,
    lastActiveDate: user.last_active_date,
    completed,
    knowledgeCards,
  };
}

function cryptoRandomToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export { db, dbPath };
