"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  const f = t.footer;
  const L = f.links;

  const PRODUCT = [
    { label: L.features, href: "/#product" },
    { label: L.howItWorks, href: "/#workflow" },
    { label: L.startFree, href: "/#beta" },
    { label: L.useCases, href: "/use-cases" },
    { label: L.liveTracking, href: "/use-cases/live-activity-screenshots" },
    { label: L.pricing, href: "/#pricing" },
  ];
  const RESOURCES = [
    { label: L.faq, href: "/#faq" },
    { label: L.blog, href: "/blog" },
    { label: L.screenshots, href: "/use-cases/live-activity-screenshots" },
    { label: L.timeAttendance, href: "/use-cases/time-attendance" },
    { label: L.startFree, href: "/#beta" },
  ];
  const COMPANY = [
    { label: L.contact, href: "/#faq" },
    { label: L.privacy, href: "/#faq" },
    { label: L.terms, href: "/#faq" },
    { label: L.press, href: "/#faq" },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] py-10">
      <div className="container-grid">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3 text-base font-normal leading-6">
              <LogoMark size={30} className="rounded-lg" />
              Talon
            </div>
            <p className="text-sm leading-6 text-[var(--fg-secondary)]">{f.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="kbd">{f.chipFree}</span>
              <span className="kbd">{f.chipPlatforms}</span>
              <span className="kbd">{f.chipTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <FooterCol title={f.product} items={PRODUCT} />
            <FooterCol title={f.resources} items={RESOURCES} />
            <FooterCol title={f.company} items={COMPANY} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--fg-tertiary)] md:flex-row md:items-center md:justify-between">
          <p>{f.copyright}</p>
          <p>hawkbytes.cloud</p>
        </div>
      </div>
    </footer>
  );
}

const linkClass =
  "rounded-[6px] text-base font-normal text-[var(--fg-secondary)] transition hover:text-[var(--fg-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

function FooterCol({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
        {title}
      </h3>
      <ul data-footer-links="true" className="space-y-2">
        {items.map((item) => (
          <li key={item.label + item.href}>
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
