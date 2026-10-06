/**
 * Basic hardening for Learn JS — not bank-grade, stops casual abuse.
 */
import fs from "node:fs";
import path from "node:path";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = {
  default: 120,
  auth: 25,
  otp: 12,
};

/** @type {Map<string, { count: number, reset: number }>} */
const buckets = new Map();

function clientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.trim()) return xf.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function bucketKey(ip, lane) {
  return `${lane}:${ip}`;
}

export function rateLimit(req, lane = "default") {
  const ip = clientIp(req);
  const key = bucketKey(ip, lane);
  const now = Date.now();
  const max = MAX_HITS[lane] || MAX_HITS.default;
  let row = buckets.get(key);
  if (!row || now > row.reset) {
    row = { count: 0, reset: now + WINDOW_MS };
    buckets.set(key, row);
  }
  row.count += 1;
  if (row.count > max) {
    return {
      ok: false,
      retryAfter: Math.ceil((row.reset - now) / 1000),
      error: "Too many requests. Slow down and try again in a few minutes.",
    };
  }
  return { ok: true };
}

/** Periodically drop stale rate-limit rows */
setInterval(() => {
  const now = Date.now();
  for (const [key, row] of buckets) {
    if (now > row.reset) buckets.delete(key);
  }
}, 60_000).unref?.();

export function securityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(self), geolocation=()");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      // unsafe-eval: required for lesson code labs (new Function / AsyncFunction runner)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );
}

const BLOCKED_PREFIXES = [
  "/data/",
  "/server/",
  "/.env",
  "/server/.env",
  "/package-lock.json",
  "/node_modules/",
];

const BLOCKED_NAMES = new Set([
  ".env",
  ".env.local",
  "learnjs.sqlite",
  "learnjs.sqlite-wal",
  "learnjs.sqlite-shm",
]);

export function isBlockedPath(urlPath) {
  const raw = decodeURIComponent((urlPath || "/").split("?")[0]).replace(/\\/g, "/");
  const lower = raw.toLowerCase();
  if (BLOCKED_PREFIXES.some((p) => lower === p.slice(0, -1) || lower.startsWith(p))) {
    return true;
  }
  const base = path.posix.basename(lower);
  if (BLOCKED_NAMES.has(base)) return true;
  if (lower.includes("/.") && !lower.endsWith("/.well-known/")) {
    // block dotfiles like /.git
    if (/(^|\/)\.(git|env|ssh|aws)/.test(lower)) return true;
  }
  return false;
}

export function assertSafeStatic(root, filePath) {
  if (!filePath) return false;
  const resolved = path.resolve(filePath);
  const rootResolved = path.resolve(root);
  if (!resolved.startsWith(rootResolved + path.sep) && resolved !== rootResolved) {
    return false;
  }
  // Never serve the SQLite DB or server sources
  if (resolved.includes(`${path.sep}data${path.sep}`)) return false;
  if (resolved.includes(`${path.sep}server${path.sep}`)) return false;
  try {
    if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
      const name = path.basename(resolved).toLowerCase();
      if (name.endsWith(".sqlite") || name.endsWith(".sqlite-wal") || name.endsWith(".sqlite-shm")) {
        return false;
      }
      if (name === ".env" || name.startsWith(".env.")) return false;
    }
  } catch {
    return false;
  }
  return true;
}

export const MAX_BODY_BYTES = 48 * 1024;
