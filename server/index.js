import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import {
  COMPANY_EMAIL,
  sendContactEmail,
  sendQuoteEmail,
  sendTestEmail,
} from "./mail.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, "..");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const submissionsDir = path.join(__dirname, "submissions");
if (!fs.existsSync(submissionsDir)) {
  fs.mkdirSync(submissionsDir, { recursive: true });
}

function saveSubmission(type, payload) {
  const entry = {
    type,
    receivedAt: new Date().toISOString(),
    destination: COMPANY_EMAIL,
    ...payload,
  };
  const file = path.join(submissionsDir, `${type}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(entry, null, 2));
  console.log(`[MS Logistics] ${type} saved → ${COMPANY_EMAIL}`);
  return entry;
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    company: "MS Logistics",
    email: COMPANY_EMAIL,
    smtpConfigured: Boolean(
      process.env.SMTP_PASS &&
        process.env.SMTP_PASS !== "your-16-char-app-password"
    ),
  });
});

app.post("/api/test-email", async (_req, res) => {
  try {
    await sendTestEmail();
    res.json({
      ok: true,
      message: `Test email sent to ${COMPANY_EMAIL}`,
    });
  } catch (err) {
    console.error("[MS Logistics] Test email failed:", err.message);
    res.status(502).json({ ok: false, message: err.message });
  }
});

app.post("/api/quote", async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    origin,
    destination,
    equipment,
    freightType,
    notes,
  } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, and phone are required.",
    });
  }

  const payload = {
    name,
    company,
    email,
    phone,
    origin,
    destination,
    equipment,
    freightType,
    notes,
  };

  try {
    saveSubmission("quote", payload);
    const via = await sendQuoteEmail(payload);
    console.log(`[MS Logistics] Quote emailed to ${COMPANY_EMAIL} via ${via}`);
    res.json({
      ok: true,
      message:
        "Quote request received. Our dispatch team will follow up shortly.",
    });
  } catch (err) {
    console.error("[MS Logistics] Quote email failed:", err.message);
    res.status(502).json({
      ok: false,
      message:
        "Quote was saved, but email delivery failed. Please try again or call dispatch.",
    });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, and message are required.",
    });
  }

  const payload = { name, email, phone, subject, message };

  try {
    saveSubmission("contact", payload);
    const via = await sendContactEmail(payload);
    console.log(`[MS Logistics] Contact emailed to ${COMPANY_EMAIL} via ${via}`);
    res.json({
      ok: true,
      message: "Message received. We will respond as soon as possible.",
    });
  } catch (err) {
    console.error("[MS Logistics] Contact email failed:", err.message);
    res.status(502).json({
      ok: false,
      message:
        "Message was saved, but email delivery failed. Please try again or call dispatch.",
    });
  }
});

app.post("/api/capacity", async (req, res) => {
  const { name, email, phone, equipment, details } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      ok: false,
      message: "Name and email are required.",
    });
  }

  const payload = {
    name,
    company: "",
    email,
    phone,
    origin: "",
    destination: "",
    equipment,
    freightType: "Capacity request",
    notes: details,
  };

  try {
    saveSubmission("capacity", payload);
    const via = await sendQuoteEmail(payload);
    console.log(`[MS Logistics] Capacity emailed to ${COMPANY_EMAIL} via ${via}`);
    res.json({
      ok: true,
      message: "Capacity request received. We will confirm availability soon.",
    });
  } catch (err) {
    console.error("[MS Logistics] Capacity email failed:", err.message);
    res.status(502).json({
      ok: false,
      message:
        "Request was saved, but email delivery failed. Please try again or call dispatch.",
    });
  }
});

const dist = path.join(root, "dist");
if (process.env.NODE_ENV === "production" && fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(dist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`MS Logistics API running on http://localhost:${PORT}`);
  console.log(`Quote emails → ${COMPANY_EMAIL}`);
});
