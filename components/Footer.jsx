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

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] pb-10 pt-16">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,0.7fr))]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={28} className="rounded-[7px]" />
            <span className="font-semibold">Talon</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-secondary)]">
            ML-based automated employee productivity & time tracking. 3 users free forever.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--fg-tertiary)]">
            <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1">
              3 users free
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1">
              Windows · Mac
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1">
              time tracking
            </span>
          </div>
        </div>

        <FooterCol title="Product" items={PRODUCT} />
        <FooterCol title="Resources" items={RESOURCES} />
        <FooterCol title="Company" items={COMPANY} />
      </div>

      <div className="container mt-12 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--fg-tertiary)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Talon. Made by HawkBytes. Not affiliated with OpenAI, Anthropic, or Google.</p>
        <p>hawkbytes.com</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="nav-link text-sm">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
