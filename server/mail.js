import nodemailer from "nodemailer";
import { Resend } from "resend";
import emailjs from "@emailjs/nodejs";

let transporter = null;
let resendClient = null;

function gasConfig() {
  const url = String(process.env.GAS_WEBAPP_URL || process.env.GOOGLE_APPS_SCRIPT_URL || "").trim();
  if (!url) return null;
  return {
    url,
    secret: String(process.env.GAS_SECRET || process.env.GOOGLE_APPS_SCRIPT_SECRET || "").trim(),
    method: String(process.env.GAS_METHOD || "POST").toUpperCase(),
  };
}

function emailJsConfig() {
  const serviceId = String(process.env.EMAILJS_SERVICE_ID || "").trim();
  const templateId = String(process.env.EMAILJS_TEMPLATE_ID || "").trim();
  const publicKey = String(process.env.EMAILJS_PUBLIC_KEY || "").trim();
  const privateKey = String(process.env.EMAILJS_PRIVATE_KEY || "").trim();
  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey, privateKey };
}

function resendKey() {
  return String(process.env.RESEND_API_KEY || "").trim();
}

function smtpUser() {
  return String(process.env.SMTP_USER || process.env.GMAIL_USER || "").trim();
}

function smtpPass() {
  return String(process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
}

export function mailProvider() {
  if (gasConfig()) return "gas";
  if (emailJsConfig()) return "emailjs";
  if (resendKey()) return "resend";
  if (smtpUser() && smtpPass()) return "gmail";
  return null;
}

export function mailConfigured() {
  return Boolean(mailProvider());
}

export function allowConsoleOtp() {
  return String(process.env.ALLOW_CONSOLE_OTP || "").toLowerCase() === "true";
}

function getResend() {
  const key = resendKey();
  if (!key) return null;
  if (!resendClient) resendClient = new Resend(key);
  return resendClient;
}

export function getTransporter() {
  if (!(smtpUser() && smtpPass())) return null;
  if (transporter) return transporter;

  const user = smtpUser();
  const pass = smtpPass();
  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const useGmailService =
    String(process.env.SMTP_SERVICE || "").toLowerCase() === "gmail" ||
    /gmail\.com$/i.test(host);

  transporter = useGmailService
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      })
    : nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE || "false") === "true",
        auth: { user, pass },
      });

  return transporter;
}

export async function verifyMailTransport() {
  const provider = mailProvider();
  if (provider === "gas") return { ok: true, provider: "gas" };
  if (provider === "emailjs") return { ok: true, provider: "emailjs" };
  if (provider === "resend") return { ok: true, provider: "resend" };
  const tx = getTransporter();
  if (!tx) return { ok: false, error: "No mail provider configured" };
  await tx.verify();
  return { ok: true, provider: "gmail", user: smtpUser() };
}

function otpContent({ username, otp }) {
  const handle = username || "learner";
  const subject = `Welcome to Learn JS! ${handle}`;
  const text = [
    `Welcome to Learn JS! ${handle}`,
    "",
    `Your verification code is: ${otp}`,
    "",
    "It expires in 10 minutes. If you didn’t sign up, ignore this email.",
    "",
    "— Milo & Learn JS",
  ].join("\n");

  // Matches Learn JS site colors (mint / lime / deep green)
  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#e7f3ec;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#e7f3ec;padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:440px;background:#f7fcf9;border:2px solid #0b1f18;border-radius:14px;overflow:hidden;box-shadow:6px 6px 0 rgba(11,31,24,0.12);">
          <tr>
            <td style="padding:18px 22px;background:linear-gradient(135deg,#9fe3c0 0%,#c8f560 100%);border-bottom:2px solid #0b1f18;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:800;letter-spacing:-0.03em;color:#0b1f18;">Learn JS</p>
              <p style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:700;color:#12231c;">Welcome to Learn JS! ${handle}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px;font-family:'Segoe UI',system-ui,sans-serif;color:#12231c;">
              <p style="margin:0 0 12px;font-size:15px;line-height:1.5;color:#2a4036;">
                You’re in. Use this code to finish creating your account:
              </p>
              <p style="margin:0 0 16px;text-align:center;">
                <span style="display:inline-block;padding:14px 22px;border:2px solid #0b1f18;border-radius:10px;background:#c8f560;font-family:ui-monospace,Menlo,monospace;font-size:28px;font-weight:800;letter-spacing:0.28em;color:#0b1f18;">${otp}</span>
              </p>
              <p style="margin:0;font-size:13px;line-height:1.45;color:#2a4036;">
                Expires in 10 minutes. If you didn’t sign up for Learn JS, you can ignore this email.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 22px 18px;border-top:1px solid rgba(11,31,24,0.12);font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;color:#2a4036;">
              — Milo &amp; Learn JS
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  return { subject, text, html };
}

/**
 * Calls a deployed Google Apps Script web app.
 * Expected payload fields (adjustable via your script):
 *   to / email / to_email, username, otp, subject, message, secret
 */
async function sendViaGas({ to, otp, username }) {
  const cfg = gasConfig();
  const { subject, text, html } = otpContent({ username, otp });
  const payload = {
    to,
    email: to,
    to_email: to,
    username,
    otp,
    subject,
    message: text,
    html,
    secret: cfg.secret || undefined,
  };

  let res;
  if (cfg.method === "GET") {
    const url = new URL(cfg.url);
    Object.entries(payload).forEach(([key, value]) => {
      if (value != null && value !== "") url.searchParams.set(key, String(value));
    });
    res = await fetch(url, { method: "GET", redirect: "follow" });
  } else {
    res = await fetch(cfg.url, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  const raw = await res.text();
  let data = null;
  try {
    data = JSON.parse(raw);
  } catch {
    data = { raw };
  }

  if (!res.ok || data?.ok === false || data?.success === false) {
    const err = new Error(
      data?.error || data?.message || raw || `Google Apps Script failed (${res.status})`
    );
    err.code = "MAIL_SEND_FAILED";
    err.details = data;
    throw err;
  }

  return { mode: "gas", status: res.status, data };
}

async function sendViaEmailJs({ to, otp, username }) {
  const cfg = emailJsConfig();
  const { subject, text, html } = otpContent({ username, otp });
  const options = { publicKey: cfg.publicKey };
  if (cfg.privateKey) options.privateKey = cfg.privateKey;

  try {
    const result = await emailjs.send(
      cfg.serviceId,
      cfg.templateId,
      {
        to_email: to,
        email: to,
        user_email: to,
        username,
        otp,
        subject,
        message: text,
        html_message: html,
      },
      options
    );
    return { mode: "emailjs", status: result?.status, text: result?.text };
  } catch (error) {
    const err = new Error(
      error?.text || error?.message || "EmailJS failed to send email"
    );
    err.code = "MAIL_SEND_FAILED";
    err.details = error;
    throw err;
  }
}

export async function sendOtpEmail({ to, otp, username }) {
  const { subject, text, html } = otpContent({ username, otp });
  const provider = mailProvider();

  if (provider === "gas") {
    return sendViaGas({ to, otp, username });
  }

  if (provider === "emailjs") {
    return sendViaEmailJs({ to, otp, username });
  }

  if (provider === "resend") {
    const from =
      process.env.MAIL_FROM ||
      process.env.RESEND_FROM ||
      "Learn JS <onboarding@resend.dev>";
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      text,
      html,
    });
    if (error) {
      const err = new Error(error.message || "Resend failed to send email");
      err.code = "MAIL_SEND_FAILED";
      err.details = error;
      throw err;
    }
    return { mode: "resend", id: data?.id, from };
  }

  if (provider === "gmail") {
    const user = smtpUser();
    const from =
      process.env.MAIL_FROM ||
      (user ? `Learn JS <${user}>` : "Learn JS <noreply@learnjs.local>");
    const tx = getTransporter();
    await tx.sendMail({ from, to, subject, text, html });
    return { mode: "smtp", from: user };
  }

  if (allowConsoleOtp()) {
    console.log("\n========== LEARN JS OTP (console fallback) ==========");
    console.log(`To: ${to}`);
    console.log(`Username: ${username}`);
    console.log(`OTP: ${otp}`);
    console.log("====================================================\n");
    return { mode: "console" };
  }

  const err = new Error(
    "Email is not configured. Add GAS_WEBAPP_URL to server/.env (Google Apps Script web app URL)"
  );
  err.code = "MAIL_NOT_CONFIGURED";
  throw err;
}
