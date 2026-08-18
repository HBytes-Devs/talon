import Link from "next/link";
import LogoMark from "./LogoMark";

const PRODUCT = [
  { label: "Features", href: "/#product" },
  { label: "How it works", href: "/#workflow" },
  { label: "Start free", href: "/#beta" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Live tracking", href: "/use-cases/live-activity-screenshots" },
  { label: "Pricing", href: "/#pricing" },
];
const RESOURCES = [
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Screenshots", href: "/use-cases/live-activity-screenshots" },
  { label: "Time & attendance", href: "/use-cases/time-attendance" },
  { label: "Start free", href: "/#beta" },
];
const COMPANY = [
  { label: "Contact", href: "/#faq" },
  { label: "Privacy", href: "/#faq" },
  { label: "Terms", href: "/#faq" },
  { label: "Press", href: "/#faq" },
];

const linkClass =
  "rounded-[6px] text-base font-normal text-[var(--fg-secondary)] transition hover:text-[var(--fg-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-10">
      <div className="container-grid">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3 text-base font-normal leading-6">
              <LogoMark size={30} className="rounded-lg" />
              Talon
            </div>
            <p className="text-sm leading-6 text-[var(--fg-secondary)]">
              ML-based automated employee productivity & time tracking. 3 users free forever.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="kbd">3 users free</span>
              <span className="kbd">Windows · Mac</span>
              <span className="kbd">time tracking</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <FooterCol title="Product" items={PRODUCT} />
            <FooterCol title="Resources" items={RESOURCES} />
            <FooterCol title="Company" items={COMPANY} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--fg-tertiary)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Talon. Made by HawkBytes. Not affiliated with OpenAI, Anthropic, or Google.</p>
          <p>hawkbytes.cloud</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
        {title}
      </h3>
      <ul data-footer-links="true" className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
