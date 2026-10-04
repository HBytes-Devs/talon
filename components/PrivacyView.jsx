"use client";

import Link from "next/link";
import { BRAND } from "../lib/brand";
import { getPrivacy } from "../lib/privacy";
import { useLocale } from "./LocaleProvider";

export default function PrivacyView() {
  const { locale, t } = useLocale();
  const p = getPrivacy(locale);
  const ui = t.privacyPage;

  return (
    <main id="top" className="section pt-32 pb-20">
      <div className="container-grid legal-page">
        <header className="legal-page-hero">
          <span className="pill">{ui.pill}</span>
          <h1 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">{p.title}</h1>
          <p className="mt-4 text-sm text-[var(--fg-tertiary)]">
            {ui.effective} {p.effectiveDate} · {ui.updated} {p.lastUpdated}
          </p>
          <p className="legal-lead mt-6">{p.intro}</p>
        </header>

        <div className="legal-page-layout">
          <nav className="legal-toc" aria-label={ui.tocLabel}>
            <p className="legal-toc-label">{ui.tocLabel}</p>
            <ol>
              {p.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, "")}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-page-body">
            {p.sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2>{section.title}</h2>
                {(section.paragraphs || []).map((text, i) => (
                  <p key={`${section.id}-p-${i}`}>{text}</p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((item, i) => (
                      <li key={`${section.id}-b-${i}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {(section.paragraphsAfter || []).map((text, i) => (
                  <p key={`${section.id}-pa-${i}`}>{text}</p>
                ))}
              </section>
            ))}

            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/start" className="btn btn-primary">
                {ui.startFree}
              </Link>
              <Link href="/faq" className="btn btn-secondary">
                {ui.browseFaq}
              </Link>
              <a href={`mailto:${BRAND.email}`} className="btn btn-secondary">
                {ui.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
