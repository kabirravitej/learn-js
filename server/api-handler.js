/**
 * Shared API router — used by local Node server and Vercel /api serverless.
 */
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
import { rateLimit, securityHeaders, MAX_BODY_BYTES } from "./security.js";

const OTP_TTL_MS = 10 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

export function sendJson(res, status, body, extraHeaders = {}) {
  securityHeaders(res);
  const data = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(data),
    "Cache-Control": "no-store",
    ...extraHeaders,
  });
  res.end(data);
}

export async function readBody(req) {
  // Vercel may already parse JSON onto req.body
  if (req.body != null && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  if (typeof req.body === "string" && req.body) {
    try {
      return JSON.parse(req.body);
    } catch {
      throw new Error("Invalid JSON");
    }
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("Body too large"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
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

function guard(req, res, lane = "api") {
  const limited = rateLimit(req, lane);
  if (!limited.ok) {
    sendJson(res, 429, { error: limited.error }, { "Retry-After": String(limited.retryAfter) });
    return false;
  }
  return true;
}

function bearer(req) {
  const h = req.headers.authorization || "";
  const m = /^Bearer\s+(.+)$/i.exec(h);
  if (m) return m[1].trim();
  return (req.headers["x-learnjs-token"] || "").toString().trim() || null;
}

function maskEmail(email) {
  const [name, domain] = String(email).split("@");
  if (!domain) return "***";
  const shown = name.slice(0, 2);
  return `${shown}${"*".repeat(Math.max(1, name.length - 2))}@${domain}`;
}

function apiPathname(req) {
  try {
    const host = req.headers?.host || "localhost";
    const raw = req.url || "/";
    const url = new URL(raw, `http://${host}`);
    // Normalize: some hosts strip /api prefix in catch-all; ensure /api/...
    let p = url.pathname;
    if (!p.startsWith("/api/")) {
      p = `/api/${p.replace(/^\/+/, "")}`;
    }
    return p.replace(/\/+/g, "/").replace(/\/$/, "") || "/api";
  } catch {
    return String(req.url || "/").split("?")[0];
  }
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
          "Email isn’t configured. Set GAS_WEBAPP_URL in your host environment (Vercel Project → Settings → Environment Variables), then redeploy.",
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
        : "Could not send the email. Check GAS_WEBAPP_URL / Apps Script web app deploy.";
    return { status: 503, body: { error: msg } };
  }
}

/**
 * Handle /api/* for both local http.Server and Vercel Node functions.
 */
export async function handleApi(req, res) {
  try {
    securityHeaders(res);
    const pathname = apiPathname(req);

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }

    if (req.method === "GET" && (pathname === "/api/health" || pathname === "/api")) {
      if (!guard(req, res, "api")) return;
      let mail = { configured: mailConfigured(), provider: mailProvider() };
      if (mail.configured) {
        try {
          const verified = await verifyMailTransport();
          mail = { ...mail, verified: verified.ok };
        } catch {
          mail = { ...mail, verified: false };
        }
      }
      return sendJson(res, 200, {
        ok: true,
        mail: { configured: mail.configured, provider: mail.provider, verified: mail.verified },
        runtime: process.env.VERCEL ? "vercel" : "node",
      });
    }

    if (req.method === "POST" && (pathname === "/api/register/start" || pathname === "/api/register")) {
      if (!guard(req, res, "auth")) return;
      const body = await readBody(req);
      const result = await startSignup({
        username: normalizeUsername(body.username),
        email: normalizeEmail(body.email),
        password: body.password,
      });
      return sendJson(res, result.status, result.body);
    }

    if (req.method === "POST" && pathname === "/api/register/resend") {
      if (!guard(req, res, "otp")) return;
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
        const emailed =
          sent.mode === "gas" ||
          sent.mode === "emailjs" ||
          sent.mode === "resend" ||
          sent.mode === "smtp";
        return sendJson(res, 200, {
          ok: true,
          emailMasked: maskEmail(pending.email),
          mailMode: sent.mode,
          message: emailed ? "New code sent to your email." : "Dev mode: OTP in console.",
        });
      } catch (err) {
        const msg =
          err?.code === "MAIL_NOT_CONFIGURED" || err?.code === "MAIL_SEND_FAILED"
            ? err.message
            : "Could not resend email. Check GAS_WEBAPP_URL.";
        return sendJson(res, 503, { error: msg });
      }
    }

    if (req.method === "POST" && pathname === "/api/register/verify") {
      if (!guard(req, res, "otp")) return;
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

    if (req.method === "POST" && pathname === "/api/login") {
      if (!guard(req, res, "auth")) return;
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

    if (req.method === "POST" && pathname === "/api/logout") {
      if (!guard(req, res, "api")) return;
      deleteSession(bearer(req));
      return sendJson(res, 200, { ok: true });
    }

    if (req.method === "GET" && pathname === "/api/me") {
      if (!guard(req, res, "api")) return;
      const user = getSessionUser(bearer(req));
      if (!user) return sendJson(res, 401, { error: "Not logged in" });
      return sendJson(res, 200, { user: userToPublic(user) });
    }

    if (req.method === "PUT" && pathname === "/api/me/progress") {
      if (!guard(req, res, "api")) return;
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

    if (req.method === "POST" && pathname === "/api/me/delete") {
      if (!guard(req, res, "auth")) return;
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
    if (!res.headersSent) {
      return sendJson(res, 500, { error: "Server error" });
    }
  }
}
