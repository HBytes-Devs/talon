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
