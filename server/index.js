import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, "..");

const app = express();
const PORT = process.env.PORT || 5001;
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "info@mslogistics.placeholder";

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
  const file = path.join(
    submissionsDir,
    `${type}-${Date.now()}.json`
  );
  fs.writeFileSync(file, JSON.stringify(entry, null, 2));
  console.log(`[MS Logistics] ${type} saved → ${COMPANY_EMAIL}`, entry);
  return entry;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, company: "MS Logistics" });
});

app.post("/api/quote", (req, res) => {
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

  saveSubmission("quote", {
    name,
    company,
    email,
    phone,
    origin,
    destination,
    equipment,
    freightType,
    notes,
  });

  res.json({
    ok: true,
    message:
      "Quote request received. Our dispatch team will follow up shortly.",
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, and message are required.",
    });
  }

  saveSubmission("contact", { name, email, phone, subject, message });

  res.json({
    ok: true,
    message: "Message received. We will respond as soon as possible.",
  });
});

app.post("/api/capacity", (req, res) => {
  const { name, email, phone, equipment, details } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      ok: false,
      message: "Name and email are required.",
    });
  }

  saveSubmission("capacity", { name, email, phone, equipment, details });

  res.json({
    ok: true,
    message: "Capacity request received. We will confirm availability soon.",
  });
});

// Production: serve Vite build
const dist = path.join(root, "dist");
if (process.env.NODE_ENV === "production" && fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(dist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`MS Logistics API running on http://localhost:${PORT}`);
  console.log(`Quote destination (placeholder): ${COMPANY_EMAIL}`);
});
