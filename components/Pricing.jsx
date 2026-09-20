"use client";

import { useEffect, useRef } from "react";
import { bindPointerTilt } from "../lib/pointerTilt";
import { useLocale } from "./LocaleProvider";

export default function Pricing() {
  const ledgerRef = useRef(null);
  const { locale, t } = useLocale();
  const p = t.pricing;

  useEffect(() => {
    const root = ledgerRef.current;
    if (!root) return;
    const cleanups = Array.from(root.querySelectorAll(".pricing-ledger-sheet")).map((el) =>
      bindPointerTilt(el, {
        maxDeg: 4,
        liftPx: el.classList.contains("pricing-ledger-featured") ? 7 : 6,
        premium: el.classList.contains("pricing-ledger-featured"),
      })
    );
    return () => cleanups.forEach((fn) => fn());
  }, [locale]);

  return (
    <section id="pricing" className="scroll-anchor section-pad pricing-section">
      <div className="container-grid">
        <div className="max-w-2xl" data-reveal="true">
          <span className="pill">{p.pill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            {p.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{p.subtitle}</p>
        </div>

        <div
          ref={ledgerRef}
          className="pricing-ledger mt-10 grid items-stretch gap-4 lg:grid-cols-3"
          data-reveal-stagger="true"
        >
          <div className="frost-panel pricing-ledger-sheet pricing-tilt-card flex min-w-0 flex-col p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)] pricing-tilt-num">
              {p.freeLabel}
            </p>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)] pricing-tilt-title">
              {p.freeTitle}
            </h3>
            <p className="mt-4 text-4xl font-bold pricing-tilt-icon">
              $0
              <span className="ml-2 text-sm font-medium text-[var(--fg-secondary)]">{p.forever}</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)] pricing-tilt-body">
              {p.freeBody}
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)] pricing-tilt-body">
              {p.freeBody2}
            </p>
            <a href="#beta" className="btn btn-primary mt-auto w-full">
              {p.freeCta}
            </a>
            <p className="mt-3 text-xs invisible" aria-hidden="true">
              {p.prorated}
            </p>
          </div>

          <div className="magnetic-panel pricing-ledger-sheet pricing-ledger-featured pricing-tilt-card relative flex flex-col p-6 ring-1 ring-[var(--pill-border)]">
            <div className="flex items-start justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)] pricing-tilt-num">
                {p.premiumLabel}
              </p>
              <span className="shrink-0 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2.5 py-1 text-[11px] font-semibold text-[var(--pill-fg)] pricing-tilt-meta">
                {p.mostTeams}
              </span>
            </div>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)] pricing-tilt-title">
              {p.premiumTitle}
            </h3>
            <p className="mt-4 text-4xl font-bold pricing-tilt-icon">
              $3.99
              <span className="ml-2 text-sm font-medium text-[var(--fg-secondary)]">
                {p.perUserMonth}
              </span>
            </p>
            <p className="mt-2 text-xs text-[var(--fg-tertiary)] pricing-tilt-meta">
              {p.yearlyDiscount}
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)] pricing-tilt-body">
              {p.premiumBody}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--fg-secondary)] pricing-tilt-body">
              <li>• {p.featureLive}</li>
              <li>• {p.featureTime}</li>
              <li>• {p.featureLocation}</li>
              <li>• {p.featureTask}</li>
            </ul>
            <a href="#beta" className="btn btn-primary mt-auto w-full">
              {p.premiumCta}
            </a>
            <p className="mt-3 text-xs text-[var(--fg-tertiary)] pricing-tilt-meta">
              {p.prorated}
            </p>
          </div>

          <div className="frost-panel pricing-ledger-sheet pricing-tilt-card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)] pricing-tilt-num">
              {p.businessLabel}
            </p>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)] pricing-tilt-title">
              {p.businessTitle}
            </h3>
            <div className="mt-5 space-y-4 text-sm pricing-tilt-body">
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>{p.businessName}</strong>
                  <span className="text-lg font-bold">$9.99</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">{p.businessMeta}</p>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>{p.volumeName}</strong>
                  <span className="text-lg font-bold">100+</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">{p.volumeMeta}</p>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>{p.enterpriseName}</strong>
                  <span className="text-lg font-bold">{p.onPrem}</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">{p.enterpriseMeta}</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[var(--fg-tertiary)] pricing-tilt-meta">
              {p.hardwareNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
