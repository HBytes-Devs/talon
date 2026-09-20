"use client";

import { useLocale } from "./LocaleProvider";

export default function LocalFirst() {
  const { t } = useLocale();
  const l = t.localFirst;

  return (
    <section className="section-pad bg-[var(--surface-soft)]" id="local-first">
      <div className="container-grid grid items-center gap-10 lg:grid-cols-2">
        <div data-reveal="true">
          <span className="pill">{l.pill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            {l.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{l.body}</p>
          <ul className="mt-8 space-y-3">
            {l.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3 text-[var(--fg-secondary)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-success)] text-[var(--fg-success)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="magnetic-panel p-6" data-reveal="true" data-reveal-delay="0.1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
            {l.panelLabel}
          </p>
          <h3 className="mt-3 text-2xl font-bold">{l.panelTitle}</h3>
          <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">{l.panelBody}</p>
          <a href="#beta" className="btn btn-primary mt-6">
            {l.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
