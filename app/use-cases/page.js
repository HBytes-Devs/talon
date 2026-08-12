import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { USE_CASES } from "../../lib/content";

export const metadata = {
  title: "Use Cases - Talon",
  description:
    "Learn how Talon improves productivity: live tracking, screenshots, idle time, attendance, location & invoicing.",
};

export default function UseCasesPage() {
  return (
    <SiteShell>
      <main id="main-content" className="use-case-page">
        <section className="container use-case-index-hero">
          <div>
            <span className="pill">Use cases</span>
            <h1 className="display-type mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] text-[var(--fg-primary)] sm:text-5xl md:text-7xl md:leading-[0.96]">
              Five ways Talon improves productivity in your business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--fg-secondary)] sm:text-lg sm:leading-8">
              Live tracking, screenshots, idle time, attendance, field location & task invoicing —
              automated, non-intrusive, and 3 users free forever.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#beta"
                className="inline-flex h-14 items-center justify-center rounded-[8px] border border-black/10 bg-[var(--indigo-650)] px-5 text-sm font-semibold text-white shadow-[0_18px_34px_-24px_rgba(50,56,159,.9),inset_0_1px_0_rgba(255,255,255,.2)] transition hover:-translate-y-0.5 hover:bg-[var(--indigo-500)]"
              >
                3 users free forever!
              </Link>
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-5 text-sm font-semibold text-[var(--fg-primary)] shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
              >
                Back to homepage
              </Link>
            </div>
          </div>

          <figure
            className="command-atlas-stage"
            aria-label="Talon productivity atlas connecting five workforce workflows"
          >
            <div className="atlas-scan" aria-hidden="true" />
            <div className="atlas-core">
              <span className="atlas-mark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </span>
              <strong>Talon Productivity Atlas</strong>
              <p>Track, report, bill & protect.</p>
              <div className="atlas-hotkey" aria-hidden="true">
                <span>⌃</span>
                <span>⌥</span>
                <span>L</span>
              </div>
            </div>
            <div className="atlas-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="atlas-node-grid">
              {USE_CASES.map((item) => (
                <Link
                  key={item.slug}
                  href={`/use-cases/${item.slug}`}
                  className={`atlas-node atlas-node-${item.node}`}
                >
                  <span>{item.n}</span>
                  <strong>{item.keyword}</strong>
                  <em>{item.atlas}</em>
                </Link>
              ))}
            </div>
          </figure>
        </section>

        <section className="container use-case-index-grid" data-reveal-stagger="true">
          {USE_CASES.map((item) => (
            <Link
              key={item.slug}
              href={`/use-cases/${item.slug}`}
              className="use-case-index-card"
            >
              <span className="use-case-index-number">{item.n}</span>
              <span className="pill">{item.cardTitle}</span>
              <h2>{item.keyword}</h2>
              <p>{item.summary}</p>
              <em>
                Open page
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </em>
            </Link>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
