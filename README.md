# JB Racks – Vertical Bike Rack Buyer's Guide

Landing page built with **Next.js 15**, **Tailwind CSS v4**, and **Lucide React**.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- Lucide React icons
- Google Fonts: Playfair Display, Source Serif 4, DM Sans

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

---

## Deploy to GitHub + Vercel

### 1. Push to GitHub
Create a new empty repo at github.com/new, then:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Option B — Vercel Dashboard:**
1. Go to vercel.com/new
2. Import your GitHub repo
3. Click Deploy — done ✅

Vercel auto-detects Next.js. No config needed.

---

## Project Structure
```
app/
├── components/
│   ├── RackCard.tsx    # Rack review card component
│   └── Sidebar.tsx     # Sticky sidebar (CTA + specs + rankings)
├── data.ts             # All rack data + buyer's guide copy
├── globals.css         # CSS variables + Tailwind
├── layout.tsx          # Root layout
└── page.tsx            # Main page
```
