# HawkLens

**HawkLens** is HawkBytes’ workforce productivity insights platform — ML-based employee productivity and time tracking.

Win back productivity & profits affected by distractions. Track your team without losing yours.

## Product

- Live activity, screenshots, and status (working, idle, meeting, break)
- Idle, break, and meeting logging
- Time, attendance, and leave
- Field location tracking and site visits
- Tasks, pay rates, and invoices from tracked time
- Screenshot blur, ECC encryption, non-intrusive monitoring
- **3 users free forever** · Premium from **$3.99 / user / month**

Website: Next.js + Tailwind. Brand: **HawkLens by HawkBytes**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

- `⌘K` / `Ctrl+K` — command palette
- Hero panel tabs: **Live**, **Idle**, **Reports** (dummy data)
- Bottom-right **AI Support** chat (`/api/support/chat`)

### AI Support

1. Copy `.env.example` → `.env.local`
2. Set `OPENAI_API_KEY` (or `SUPPORT_AI_API_KEY` + optional `SUPPORT_AI_BASE_URL` / `SUPPORT_AI_MODEL`)
3. Restart `npm run dev`

Without a key, the widget still answers from the FAQ knowledge base (local fallback). Keys stay server-side only.

## Production

```bash
npm run build
npm start
```

Or with Docker:

```bash
docker compose up -d --build
```

## GitHub Pages

Live site: [https://hbytes-devs.github.io/talon/](https://hbytes-devs.github.io/talon/)

Pushes to `main` build a static export and deploy via GitHub Actions.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP + Lenis

## License

Private. © 2026 HawkBytes.
