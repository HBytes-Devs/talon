"use client";

import Link from "next/link";
import { BRAND } from "../lib/brand";
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
  ];
  const COMPANY = [
    { label: BRAND.company, href: BRAND.website, external: true },
    { label: L.contact, href: `mailto:${BRAND.email}` },
    { label: L.privacy, href: "/#faq" },
    { label: L.terms, href: "/#faq" },
    { label: L.press, href: "/#faq" },
  ];

  return (
    <footer className="site-footer">
      <div className="container-grid">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo">
              <LogoMark size={32} className="rounded-lg" />
              <span>{BRAND.name}</span>
            </Link>
            <p>{f.blurb}</p>
            <div className="site-footer-chips">
              <span>{f.chipFree}</span>
              <span>{f.chipPlatforms}</span>
              <span>{f.chipTime}</span>
            </div>
            <Link href="/#beta" className="btn btn-primary mt-5 h-10 w-fit px-4">
              {L.startFree}
            </Link>
          </div>

          <FooterCol title={f.product} items={PRODUCT} />
          <FooterCol title={f.resources} items={RESOURCES} />
          <FooterCol title={f.company} items={COMPANY} />
        </div>

        <div className="site-footer-bar">
          <p>
            {f.copyrightBefore}{" "}
            <a href={BRAND.website} target="_blank" rel="noopener noreferrer">
              {BRAND.company}
            </a>
            {f.copyrightAfter}
          </p>
          <div className="footer-lang">
            <a href={BRAND.website} target="_blank" rel="noopener noreferrer">
              {BRAND.domain}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkClass = "site-footer-link";

function FooterCol({ title, items }) {
  return (
    <div className="site-footer-col">
      <h3>{title}</h3>
      <ul data-footer-links="true">
        {items.map((item) => (
          <li key={item.label + item.href}>
            {item.external || item.href.startsWith("mailto:") ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
