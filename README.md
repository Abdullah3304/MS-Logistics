# MS Logistics Website

Premium B2B freight website for **MS Logistics** (Houston, TX) — React frontend + Node.js API for quote/contact forms.

## Stack

- React 19 + Vite
- React Router
- Express (Node.js) form API
- Separate CSS files per layout/page

## Run locally

```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:5001

## Placeholders to update later

Edit `src/data/company.js`:

- USDOT / MC numbers
- Phone, email, address
- Equipment dimensions, liftgate, coverage
- GPS confirmation

Form destination email: set `COMPANY_EMAIL` in `.env` (see `.env.example`).

Submissions are saved under `server/submissions/` until SMTP is configured.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Client + API together |
| `npm run build` | Production frontend build |
| `npm start` | Serve API (+ built site in production) |
