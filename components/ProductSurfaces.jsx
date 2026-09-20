"use client";

import LineSegment from "./LineSegment";
import { useLocale } from "./LocaleProvider";

const BLUEPRINTS = [
  { title: "Aisha Khan", tag: "working", body: "Figma · 2h 14m productive" },
  { title: "Omar Malik", tag: "idle", body: "Chrome · idle 18 min" },
  { title: "Sara Ahmed", tag: "meeting", body: "Zoom · meeting 42 min" },
  { title: "Hassan Ali", tag: "break", body: "Break · 12 min" },
  { title: "Noor Fatima", tag: "working", body: "VS Code · 1h 05m productive" },
];

const VERSIONS = [
  { v: "09:00", meta: "Work", note: "Start", active: true },
  { v: "11:20", meta: "Meeting", note: "Zoom" },
  { v: "13:00", meta: "Break", note: "40 min" },
  { v: "16:40", meta: "Idle", note: "18 min" },
];

export default function ProductSurfaces() {
  const { t } = useLocale();
  const p = t.product;
  const tagChips = [p.tagWork, p.tagIdle, p.tagMeeting];
  const actionChips = [p.open, p.timeline, p.report];
  const mixActions = [p.timeline, p.report, p.export];

  return (
    <section id="product" className="line-host scroll-anchor section-pad">
      <LineSegment variant="features" />
      <div className="container-grid space-y-20">
        <div data-reveal="true">
          <span className="pill">{p.whyPill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            {p.title}
          </h2>
        </div>

        {/* Blueprint Library */}
        <article className="feature-article grid items-center gap-8 lg:grid-cols-2">
          <div data-reveal="true">
            <span className="pill">{p.livePill}</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              {p.liveTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">{p.liveBody}</p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              {p.liveBullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Bullet /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="magnetic-panel overflow-hidden p-0" data-reveal="true" data-reveal-delay="0.12">
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] px-4 py-3 text-xs text-[var(--fg-secondary)]">
              <span className="traffic traffic-red" />
              <span className="traffic traffic-amber" />
              <span className="traffic traffic-green" />
              <span className="ml-2 font-semibold text-[var(--fg-primary)]">{p.liveActivity}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em]">
                {p.liveIdleReports}
              </span>
            </div>
            <div className="grid md:grid-cols-[160px_1fr]">
              <aside className="hidden border-r border-[var(--border-subtle)] p-3 text-sm md:block">
                {p.liveNav.map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-[8px] px-3 py-2 ${
                      i === 0 ? "bg-[var(--surface-2)] font-semibold" : "text-[var(--fg-secondary)]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
                <div className="mt-4 px-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                    {p.tags}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tagChips.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2 py-0.5 text-[11px]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
              <div className="p-3">
                <div className="mb-3 flex items-center gap-2 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-2">
                  <span className="text-sm text-[var(--fg-tertiary)]">{p.searchTeam}</span>
                  <span className="ml-auto kbd-chip">esc</span>
                </div>
                <div className="space-y-2">
                  {BLUEPRINTS.map((b, i) => (
                    <div
                      key={b.title}
                      className={`rounded-[12px] border px-3 py-3 ${
                        i === 0
                          ? "border-[var(--pill-border)] bg-[var(--pill-bg)]"
                          : "border-[var(--border-subtle)] bg-[var(--surface-2)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-sm">{b.title}</strong>
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                          {b.tag}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[var(--fg-secondary)]">{b.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-3 text-[11px] text-[var(--fg-secondary)]">
                  <span>{p.present}</span>
                  <span>·</span>
                  <span>{p.idle}</span>
                  <span>·</span>
                  <span>{p.blurOn}</span>
                  <div className="ml-auto flex gap-2">
                    {actionChips.map((a) => (
                      <span
                        key={a}
                        className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-strong)] px-2.5 py-1 font-semibold"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Context + Variables */}
        <article className="feature-article grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="magnetic-panel p-4">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="font-semibold">{p.softwareActivity}</span>
                <span className="rounded-[8px] bg-[var(--ink-950)] px-2.5 py-1 text-xs font-semibold text-white">
                  {p.liveBadge}
                </span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                {p.topActivity}
              </p>
              <div className="mt-2 space-y-2">
                {["Figma", "Chrome", "VS Code"].map((f) => (
                  <div
                    key={f}
                    className="flex items-center justify-between rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-2 text-sm"
                  >
                    <span>{f}</span>
                    <span className="font-mono text-[11px] text-[var(--fg-success)]">on</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                {p.timeByClient}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                {[
                  ["acme", "4.2h"],
                  ["northstar", "3.1h"],
                  ["internal", "1.4h"],
                  ["idle", "0.8h"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-2 font-mono text-xs"
                  >
                    {k}: <strong className="font-sans text-[var(--fg-primary)]">{v}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-3">
                <div className="flex items-center justify-between text-sm">
                  <strong>{p.knowWhereTitle}</strong>
                  <span className="text-xs text-[var(--fg-tertiary)]">{p.knowWhereMeta}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)]">{p.knowWhereBody}</p>
                <div className="mt-3 flex gap-3 font-mono text-[11px] text-[var(--fg-tertiary)]">
                  <span>3 apps</span>
                  <span>4 clients</span>
                  <span>1 timeline</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="pill">{p.softwarePill}</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              {p.softwareTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">{p.softwareBody}</p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              {p.softwareBullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Bullet /> {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Time Machine */}
        <article className="feature-article grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="pill">{p.focusPill}</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              {p.focusTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">{p.focusBody}</p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              {p.focusBullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Bullet /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="magnetic-panel p-4">
            <div className="mb-4 flex items-center justify-between">
              <strong>{p.focusTimeline}</strong>
              <span className="text-sm text-[var(--fg-secondary)]">Aisha Khan</span>
            </div>
            <div className="tm-scrub" aria-hidden="true">
              <span className="tm-scrub-thumb" />
            </div>
            <div className="space-y-2">
              {VERSIONS.map((v) => (
                <div
                  key={v.v}
                  className={`flex items-center gap-3 rounded-[10px] border px-3 py-2.5 ${
                    v.active
                      ? "border-[var(--pill-border)] bg-[var(--pill-bg)]"
                      : "border-[var(--border-subtle)] bg-[var(--surface-2)]"
                  }`}
                >
                  <span className="font-mono text-sm font-semibold">{v.v}</span>
                  <span className="text-xs text-[var(--fg-secondary)]">{v.meta}</span>
                  <span className="ml-auto text-xs text-[var(--fg-tertiary)]">{v.note}</span>
                </div>
              ))}
            </div>
            <div className="diff-live mt-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                {p.todaysMix}
              </p>
              <p className="mt-2 text-sm text-[var(--fg-success)]">{p.mixPos}</p>
              <p className="mt-1 text-sm text-[var(--fg-danger)]">{p.mixNeg}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-secondary)]">{p.mixBody}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {mixActions.map((a) => (
                  <span
                    key={a}
                    className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs font-semibold"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Bullet() {
  return (
    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--indigo-500)]" />
  );
}
