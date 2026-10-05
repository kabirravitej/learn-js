import { scryptSync, timingSafeEqual, randomBytes } from "node:crypto";

const KEY_LEN = 64;

export function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(String(password), salt, KEY_LEN).toString("hex");
  return { hash, salt };
}

export function verifyPassword(password, hash, salt) {
  try {
    const next = scryptSync(String(password), salt, KEY_LEN);
    const prev = Buffer.from(hash, "hex");
    if (prev.length !== next.length) return false;
    return timingSafeEqual(prev, next);
  } catch {
    return false;
  }
}

export function validateUsername(username) {
  // username already normalized as @handle
  if (!username || !username.startsWith("@")) {
    return "Username must look like @mikelearnz";
  }
  const handle = username.slice(1);
  if (handle.length < 3 || handle.length > 24) {
    return "Username must be 3–24 characters after @";
  }
  if (!/^[a-z0-9_]+$/.test(handle)) {
    return "Use only letters, numbers, and underscores";
  }
  return null;
}

export function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (password.length > 128) {
    return "Password is too long";
  }
  return null;
}

export function normalizeEmail(raw) {
  const email = String(raw || "")
    .trim()
    .toLowerCase();
  if (!email) return null;
  return email;
}

export function validateEmail(email, { required = false } = {}) {
  if (!email) {
    return required ? "Enter your email" : null;
  }
  // Practical email check (not full RFC)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 190) {
    return "Enter a valid email address";
  }
  return null;
}

export function makeOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function hashOtp(otp, salt = randomBytes(8).toString("hex")) {
  const hash = scryptSync(String(otp), salt, 32).toString("hex");
  return { hash, salt };
}

export function verifyOtp(otp, hash, salt) {
  try {
    const next = scryptSync(String(otp), salt, 32);
    const prev = Buffer.from(hash, "hex");
    if (prev.length !== next.length) return false;
    return timingSafeEqual(prev, next);
  } catch {
    return false;
  }
}
