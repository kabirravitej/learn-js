/**
 * Vercel serverless catch-all for /api/*
 * Set GAS_WEBAPP_URL in Vercel Environment Variables (no spaces in the URL).
 */
import { handleApi } from "../server/api-handler.js";

export default async function handler(req, res) {
  try {
    const raw = req.url || "/";
    if (!String(raw).startsWith("/api")) {
      const qIndex = raw.indexOf("?");
      const q = qIndex >= 0 ? raw.slice(qIndex) : "";
      const pathOnly = (qIndex >= 0 ? raw.slice(0, qIndex) : raw).replace(/^\/+/, "");
      req.url = `/api/${pathOnly}${q}`;
    }
    return await handleApi(req, res);
  } catch (err) {
    console.error("api handler crash:", err);
    if (!res.headersSent) {
      const body = JSON.stringify({
        error: err?.message || "Server error",
      });
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(body);
    }
  }
}
