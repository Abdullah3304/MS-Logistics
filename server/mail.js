import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const COMPANY_EMAIL =
  process.env.COMPANY_EMAIL || "m.miledispatch@gmail.com";

function formatQuoteHtml(data) {
  const row = (label, value) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;width:140px;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><strong>${value || "—"}</strong></td></tr>`;

  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#111;">
    <h2 style="background:#0b0c0e;color:#f4f1ea;padding:16px 20px;margin:0;">MS Logistics — New Quote Request</h2>
    <table style="width:100%;border-collapse:collapse;margin-top:12px;">
      ${row("Name", data.name)}
      ${row("Company", data.company)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Origin", data.origin)}
      ${row("Destination", data.destination)}
      ${row("Equipment", data.equipment)}
      ${row("Freight type", data.freightType)}
    </table>
    <p style="margin:16px 20px 6px;color:#666;">Notes</p>
    <p style="margin:0 20px 20px;padding:12px;background:#f5f5f5;border-radius:4px;">${(data.notes || "—").replace(/\n/g, "<br/>")}</p>
  </div>`;
}

function formatQuoteText(data) {
  return [
    "New quote request from the MS Logistics website",
    "",
    `Name: ${data.name || "—"}`,
    `Company: ${data.company || "—"}`,
    `Email: ${data.email || "—"}`,
    `Phone: ${data.phone || "—"}`,
    `Origin: ${data.origin || "—"}`,
    `Destination: ${data.destination || "—"}`,
    `Equipment: ${data.equipment || "—"}`,
    `Freight type: ${data.freightType || "—"}`,
    "",
    "Notes:",
    data.notes || "—",
  ].join("\n");
}

function formatContactHtml(data) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#111;">
    <h2 style="background:#0b0c0e;color:#f4f1ea;padding:16px 20px;margin:0;">MS Logistics — Contact Message</h2>
    <p style="padding:16px 20px 0;"><strong>Name:</strong> ${data.name || "—"}</p>
    <p style="padding:0 20px;"><strong>Email:</strong> ${data.email || "—"}</p>
    <p style="padding:0 20px;"><strong>Phone:</strong> ${data.phone || "—"}</p>
    <p style="padding:0 20px;"><strong>Subject:</strong> ${data.subject || "—"}</p>
    <p style="margin:16px 20px;padding:12px;background:#f5f5f5;">${(data.message || "—").replace(/\n/g, "<br/>")}</p>
  </div>`;
}

function formatContactText(data) {
  return [
    "New contact message from the MS Logistics website",
    "",
    `Name: ${data.name || "—"}`,
    `Email: ${data.email || "—"}`,
    `Phone: ${data.phone || "—"}`,
    `Subject: ${data.subject || "—"}`,
    "",
    "Message:",
    data.message || "—",
  ].join("\n");
}

function getTransporter() {
  const user = process.env.SMTP_USER || COMPANY_EMAIL;
  const pass = process.env.SMTP_PASS;

  if (!pass || pass === "your-16-char-app-password") {
    throw new Error(
      "SMTP_PASS is missing. Add a Gmail App Password to .env so quotes can be emailed."
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });
}

export async function sendQuoteEmail(data) {
  const transporter = getTransporter();
  const fromUser = process.env.SMTP_USER || COMPANY_EMAIL;

  await transporter.sendMail({
    from: `"MS Logistics Website" <${fromUser}>`,
    to: COMPANY_EMAIL,
    replyTo: data.email || fromUser,
    subject: `MS Logistics Quote Request — ${data.name || "New lead"}`,
    text: formatQuoteText(data),
    html: formatQuoteHtml(data),
  });

  return "smtp";
}

export async function sendContactEmail(data) {
  const transporter = getTransporter();
  const fromUser = process.env.SMTP_USER || COMPANY_EMAIL;

  await transporter.sendMail({
    from: `"MS Logistics Website" <${fromUser}>`,
    to: COMPANY_EMAIL,
    replyTo: data.email || fromUser,
    subject: `MS Logistics Contact — ${data.subject || data.name || "Message"}`,
    text: formatContactText(data),
    html: formatContactHtml(data),
  });

  return "smtp";
}

export async function sendTestEmail() {
  const transporter = getTransporter();
  const fromUser = process.env.SMTP_USER || COMPANY_EMAIL;

  await transporter.sendMail({
    from: `"MS Logistics Website" <${fromUser}>`,
    to: COMPANY_EMAIL,
    subject: "MS Logistics — Email setup test",
    text: "Success. Quote emails will arrive at this inbox.",
    html: "<p><strong>Success.</strong> Quote emails will arrive at this inbox.</p>",
  });

  return "smtp";
}

export { COMPANY_EMAIL };
