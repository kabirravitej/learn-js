import "dotenv/config";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import {
  normalizeUsername,
  getUserByUsername,
  getUserByEmail,
  insertUser,
  nextPublicId,
  createSession,
  getSessionUser,
  deleteSession,
  updateUserProgress,
  userToPublic,
  createPendingSignup,
  getPendingSignup,
  bumpPendingAttempts,
  updatePendingOtp,
  deletePendingSignup,
  deleteUserById,
  normalizeDisplayId,
  displayId,
  dbPath,
} from "./db.js";
import {
  hashPassword,
  verifyPassword,
  validateUsername,
  validatePassword,
  normalizeEmail,
  validateEmail,
  makeOtp,
  hashOtp,
  verifyOtp,
} from "./auth.js";
import { sendOtpEmail, mailConfigured, mailProvider, verifyMailTransport } from "./mail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PORT) || 3847;
const OTP_TTL_MS = 10 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
};

function sendJson(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(data),
    "Cache-Control": "no-store",
  });
  res.end(data);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function bearer(req) {
  const h = req.headers.authorization || "";
  const m = /^Bearer\s+(.+)$/i.exec(h);
  if (m) return m[1].trim();
  return (req.headers["x-learnjs-token"] || "").toString().trim() || null;
}

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const clean = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(root, clean);
  if (!full.startsWith(root)) return null;
  return full;
}

function maskEmail(email) {
  const [name, domain] = String(email).split("@");
  if (!domain) return "***";
  const shown = name.slice(0, 2);
  return `${shown}${"*".repeat(Math.max(1, name.length - 2))}@${domain}`;
}

async function startSignup({ username, email, password }) {
  const userErr = validateUsername(username);
  if (userErr) return { status: 400, body: { error: userErr } };
  const emailErr = validateEmail(email, { required: true });
  if (emailErr) return { status: 400, body: { error: emailErr } };
  const passErr = validatePassword(password);
  if (passErr) return { status: 400, body: { error: passErr } };

  if (!mailConfigured()) {
    return {
      status: 503,
      body: {
        error:
          "Email isn’t configured. Add GAS_WEBAPP_URL to server/.env (Google Apps Script web app), save, and restart.",
      },
    };
  }

  if (getUserByUsername(username)) {
    return { status: 409, body: { error: "That username is already taken" } };
  }
  if (email && getUserByEmail(email)) {
    return { status: 409, body: { error: "That email is already registered" } };
  }

  const { hash, salt } = hashPassword(password);

  const otp = makeOtp();
  const otpPacked = hashOtp(otp);
  const pendingId = randomBytes(16).toString("hex");
  const now = Date.now();

  createPendingSignup({
    id: pendingId,
    username,
    email,
    passwordHash: hash,
    passwordSalt: salt,
    otpHash: otpPacked.hash,
    otpSalt: otpPacked.salt,
    expiresAt: new Date(now + OTP_TTL_MS).toISOString(),
    createdAt: new Date(now).toISOString(),
  });

  try {
    const sent = await sendOtpEmail({ to: email, otp, username });
    return {
      status: 200,
      body: {
        pendingId,
        emailMasked: maskEmail(email),
        mailMode: sent.mode,
        message:
          sent.mode === "gas" ||
          sent.mode === "emailjs" ||
          sent.mode === "resend" ||
          sent.mode === "smtp"
            ? "We sent a 6-digit code to your email."
            : "Dev mode: OTP printed in the server console.",
      },
    };
  } catch (err) {
    deletePendingSignup(pendingId);
    const msg =
      err?.code === "MAIL_NOT_CONFIGURED" || err?.code === "MAIL_SEND_FAILED"
        ? err.message
        : "Could not send the email. Check GAS_WEBAPP_URL / Apps Script deploy in server/.env";
    return { status: 503, body: { error: msg } };
  }
}

async function handleApi(req, res, url) {
  try {
    if (req.method === "GET" && url.pathname === "/api/health") {
      let mail = { configured: mailConfigured() };
      if (mail.configured) {
        try {
          const verified = await verifyMailTransport();
          mail = { ...mail, verified: verified.ok, user: verified.user };
        } catch (err) {
          mail = { ...mail, verified: false, error: err.message };
        }
      }
      return sendJson(res, 200, {
        ok: true,
        db: dbPath,
        mail,
      });
    }

    if (req.method === "POST" && url.pathname === "/api/register/start") {
      const body = await readBody(req);
      const username = normalizeUsername(body.username);
      const email = normalizeEmail(body.email);
      const result = await startSignup({
        username,
        email,
        password: body.password,
      });
      return sendJson(res, result.status, result.body);
    }

    if (req.method === "POST" && url.pathname === "/api/register/resend") {
      const body = await readBody(req);
      const pending = getPendingSignup(body.pendingId);
      if (!pending) return sendJson(res, 404, { error: "Signup session expired. Start again." });
      if (Date.parse(pending.expires_at) < Date.now()) {
        deletePendingSignup(pending.id);
        return sendJson(res, 410, { error: "Code expired. Start signup again." });
      }
      const otp = makeOtp();
      const otpPacked = hashOtp(otp);
      updatePendingOtp(pending.id, {
        otpHash: otpPacked.hash,
        otpSalt: otpPacked.salt,
        expiresAt: new Date(Date.now() + OTP_TTL_MS).toISOString(),
      });
      try {
        const sent = await sendOtpEmail({
          to: pending.email,
          otp,
          username: pending.username,
        });
        return sendJson(res, 200, {
          ok: true,
          emailMasked: maskEmail(pending.email),
          mailMode: sent.mode,
          message: sent.mode === "smtp" ? "New code sent to your email." : "Dev mode: OTP in console.",
        });
      } catch (err) {
        const msg =
          err?.code === "MAIL_NOT_CONFIGURED" || err?.code === "MAIL_SEND_FAILED"
            ? err.message
            : "Could not resend email. Check GAS_WEBAPP_URL in server/.env";
        return sendJson(res, 503, { error: msg });
      }
    }

    if (req.method === "POST" && url.pathname === "/api/register/verify") {
      const body = await readBody(req);
      const pending = getPendingSignup(body.pendingId);
      if (!pending) return sendJson(res, 404, { error: "Signup session expired. Start again." });
      if (Date.parse(pending.expires_at) < Date.now()) {
        deletePendingSignup(pending.id);
        return sendJson(res, 410, { error: "Code expired. Start signup again." });
      }
      if (pending.attempts >= OTP_MAX_ATTEMPTS) {
        deletePendingSignup(pending.id);
        return sendJson(res, 429, { error: "Too many attempts. Start signup again." });
      }

      const otp = String(body.otp || "").replace(/\s+/g, "");
      if (!/^\d{6}$/.test(otp)) {
        return sendJson(res, 400, { error: "Enter the 6-digit code from your email." });
      }

      if (!verifyOtp(otp, pending.otp_hash, pending.otp_salt)) {
        const updated = bumpPendingAttempts(pending.id);
        const left = OTP_MAX_ATTEMPTS - updated.attempts;
        return sendJson(res, 401, {
          error: left > 0 ? `Wrong code. ${left} tries left.` : "Wrong code. Start signup again.",
        });
      }

      if (getUserByUsername(pending.username) || getUserByEmail(pending.email)) {
        deletePendingSignup(pending.id);
        return sendJson(res, 409, { error: "Account already exists. Try logging in." });
      }

      const id = nextPublicId();
      const user = insertUser({
        id,
        username: pending.username,
        email: pending.email,
        passwordHash: pending.password_hash,
        passwordSalt: pending.password_salt,
      });
      deletePendingSignup(pending.id);
      const token = createSession(user.id);
      return sendJson(res, 201, { token, user: userToPublic(user) });
    }

    // Backward-compatible alias: old clients hit /api/register
    if (req.method === "POST" && url.pathname === "/api/register") {
      const body = await readBody(req);
      const username = normalizeUsername(body.username);
      const email = normalizeEmail(body.email);
      const result = await startSignup({
        username,
        email,
        password: body.password,
      });
      return sendJson(res, result.status, result.body);
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const body = await readBody(req);
      const username = normalizeUsername(body.username);
      const password = body.password;
      if (!username) return sendJson(res, 400, { error: "Enter a username like @mikelearnz" });
      const user = getUserByUsername(username);
      if (!user || !verifyPassword(password, user.password_hash, user.password_salt)) {
        return sendJson(res, 401, { error: "Wrong username or password" });
      }
      const token = createSession(user.id);
      return sendJson(res, 200, { token, user: userToPublic(user) });
    }

    if (req.method === "POST" && url.pathname === "/api/logout") {
      deleteSession(bearer(req));
      return sendJson(res, 200, { ok: true });
    }

    if (req.method === "GET" && url.pathname === "/api/me") {
      const user = getSessionUser(bearer(req));
      if (!user) return sendJson(res, 401, { error: "Not logged in" });
      return sendJson(res, 200, { user: userToPublic(user) });
    }

    if (req.method === "PUT" && url.pathname === "/api/me/progress") {
      const user = getSessionUser(bearer(req));
      if (!user) return sendJson(res, 401, { error: "Not logged in" });
      const body = await readBody(req);
      const updated = updateUserProgress(user.id, {
        xp: body.xp,
        momentum: body.momentum,
        momentumCharges: body.momentumCharges,
        lastActiveDate: body.lastActiveDate,
        completed: body.completed,
        knowledgeCards: body.knowledgeCards,
      });
      return sendJson(res, 200, { user: userToPublic(updated) });
    }

    if (req.method === "POST" && url.pathname === "/api/me/delete") {
      const user = getSessionUser(bearer(req));
      if (!user) return sendJson(res, 401, { error: "Not logged in" });
      const body = await readBody(req);
      const typedId = normalizeDisplayId(body.confirmId);
      if (typedId == null) {
        return sendJson(res, 400, {
          error: `Type your User ID to confirm. Yours is ${displayId(user.id)}.`,
        });
      }
      if (typedId !== user.id) {
        return sendJson(res, 400, {
          error: `That doesn’t match. Your User ID is ${displayId(user.id)}.`,
        });
      }
      deleteUserById(user.id);
      return sendJson(res, 200, { ok: true, deletedId: displayId(user.id) });
    }

    return sendJson(res, 404, { error: "Not found" });
  } catch (err) {
    console.error(err);
    return sendJson(res, 500, { error: "Server error" });
  }
}

function serveStatic(req, res, url) {
  let rel = url.pathname === "/" ? "/index.html" : url.pathname;
  let filePath = safeJoin(ROOT, rel);
  if (!filePath) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Not found");
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  if (url.pathname.startsWith("/api/")) {
    return handleApi(req, res, url);
  }
  return serveStatic(req, res, url);
});

server.listen(PORT, () => {
  console.log(`Learn JS running at http://localhost:${PORT}`);
  console.log(`SQLite database: ${dbPath}`);
  const provider = mailProvider();
  console.log(
    `Mail: ${
      provider === "gas"
        ? "Google Apps Script ready"
        : provider === "emailjs"
          ? "EmailJS ready"
          : provider === "resend"
            ? "Resend API ready"
            : provider === "gmail"
              ? `Gmail SMTP ready (${process.env.GMAIL_USER || process.env.SMTP_USER})`
              : "NOT configured — set GAS_WEBAPP_URL in server/.env"
    }`
  );
  console.log(`Open Intro: http://localhost:${PORT}/intro.html`);
});
