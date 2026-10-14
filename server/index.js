import "./load-env.js";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleApi } from "./api-handler.js";
import { securityHeaders, isBlockedPath, assertSafeStatic } from "./security.js";
import { mailProvider } from "./mail.js";
import { dbPath } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PORT) || 3847;

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

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const clean = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(root, clean);
  if (!full.startsWith(root)) return null;
  return full;
}

function serveStatic(req, res, url) {
  securityHeaders(res);
  if (isBlockedPath(url.pathname)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Not found");
  }
  let rel = url.pathname === "/" ? "/index.html" : url.pathname;
  let filePath = safeJoin(ROOT, rel);
  if (!filePath || !assertSafeStatic(ROOT, filePath)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Forbidden");
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
    if (!assertSafeStatic(ROOT, filePath)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Forbidden");
    }
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
  try {
    securityHeaders(res);
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }
    if (url.pathname.startsWith("/api/")) {
      return handleApi(req, res);
    }
    // Static files are not rate-limited (was exhausting the API bucket)
    return serveStatic(req, res, url);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Server error");
    }
  }
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
