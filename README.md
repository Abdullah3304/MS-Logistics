# MS Logistics Website

Premium B2B freight website for **MS Logistics** (Houston, TX) — a pure React
frontend. Quote/contact forms are delivered by [Web3Forms](https://web3forms.com);
there is no backend to run or deploy.

## Stack

- React 19 + Vite
- React Router
- Web3Forms for form delivery (no server, no SMTP)
- Separate CSS files per layout/page

## Run locally

```bash
npm install
cp .env.example .env   # then paste your Web3Forms access key
npm run dev
```

- Site: http://localhost:5173

## Forms / email

Forms POST directly to Web3Forms, which emails each submission to the inbox tied
to your access key. Get a free key at https://web3forms.com (enter your inbox
email — no account needed) and set it in `.env`:

```
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

The key is public by design — it can only deliver mail *to* your inbox, so a
leak means at most spam, never sending *as* you. Nothing is stored anywhere; the
inbox is the record.

## Deploy (Vercel)

It's a static site — no serverless functions needed.

- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_WEB3FORMS_ACCESS_KEY` under Project Settings → Environment Variables.

## Placeholders to update later

Edit `src/data/company.js`:

- USDOT / MC numbers
- Phone, email, address
- Equipment dimensions, liftgate, coverage
- GPS confirmation

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run the site locally |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
