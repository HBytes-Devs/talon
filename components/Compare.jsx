"use client";

import { useLocale } from "./LocaleProvider";

export default function Compare() {
  const { t } = useLocale();
  const c = t.compare;

  return (
    <section className="scroll-anchor section-pad" id="compare">
      <div className="container-grid">
        <div className="max-w-3xl" data-reveal="true">
          <span className="pill">{c.pill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">{c.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{c.body}</p>
        </div>

        <div className="frost-panel compare-panel mt-10 overflow-x-auto" data-reveal="true">
          <table className="compare-table w-full min-w-[760px] text-sm">
            <caption className="sr-only">{c.caption}</caption>
            <thead>
              <tr className="border-b border-[var(--border-subtle)] text-left">
                <th className="compare-sticky p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  {c.feature}
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  {c.spreadsheets}
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    {c.spreadsheetsMeta}
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  {c.timeApps}
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    {c.timeAppsMeta}
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  {c.projectTools}
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    {c.projectToolsMeta}
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pill-fg)]">
                  Talon
                  <span className="mt-1 block font-medium normal-case tracking-normal">{c.talonMeta}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row[0]} className="border-b border-[var(--border-subtle)]">
                  <th className="compare-sticky p-4 text-left font-semibold text-[var(--fg-primary)]">
                    {row[0]}
                  </th>
                  {row.slice(1).map((cell, i) => (
                    <td
                      key={i}
                      className={`p-4 ${
                        i === 3
                          ? "font-semibold text-[var(--fg-success)]"
                          : "text-[var(--fg-secondary)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[var(--fg-tertiary)]">{c.trustedBy}</p>
      </div>
    </section>
  );
}
