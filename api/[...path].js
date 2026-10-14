/**
 * Vercel serverless catch-all for /api/*
 * Apps Script email: set GAS_WEBAPP_URL (and optional GAS_SECRET, GAS_METHOD) in Vercel env.
 */
import { handleApi } from "../server/api-handler.js";

export default async function handler(req, res) {
  // Vercel catch-all may pass url as /register/start — normalize to /api/...
  const raw = req.url || "/";
  if (!String(raw).startsWith("/api")) {
    const qIndex = raw.indexOf("?");
    const q = qIndex >= 0 ? raw.slice(qIndex) : "";
    const pathOnly = (qIndex >= 0 ? raw.slice(0, qIndex) : raw).replace(/^\/+/, "");
    req.url = `/api/${pathOnly}${q}`;
  }
  return handleApi(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
