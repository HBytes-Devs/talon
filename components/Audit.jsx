"use client";

import { useLocale } from "./LocaleProvider";

const LOGS = [
  { t: "14:32:07", title: "Aisha Khan", app: "Figma", meta: "Working" },
  { t: "11:18:54", title: "Omar Malik", app: "Chrome", meta: "Idle 18m" },
  { t: "09:02:31", title: "Sara Ahmed", app: "Zoom", meta: "Meeting" },
  { t: "08:47:12", title: "Hassan Ali", app: "Break", meta: "12 min" },
  { t: "07:58:03", title: "Noor Fatima", app: "VS Code", meta: "Working" },
  { t: "07:15:46", title: "Aisha Khan", app: "Slack", meta: "Neutral" },
];

export default function Audit() {
  const { t } = useLocale();
  const a = t.audit;

  return (
    <section className="audit-act section-pad">
      <div className="container-grid grid items-start gap-10 lg:grid-cols-2">
        <div data-reveal="true">
          <span className="inline-flex items-center gap-1 rounded-[8px] border border-[var(--audit-border)] bg-[rgba(255,255,255,0.06)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--audit-fg)]">
            {a.pill}
          </span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold text-[var(--audit-fg)] md:text-5xl">
            {a.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--audit-fg-secondary)]">{a.body}</p>

          <div className="audit-items mt-8 grid gap-1" data-reveal-stagger="true">
            {a.items.map((item) => (
              <div key={item.title} className="audit-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-[var(--audit-accent)]">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[var(--audit-fg)]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--audit-fg-secondary)]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="audit-terminal rounded-[14px] border border-[var(--audit-border)] bg-[rgba(255,255,255,0.04)] p-4 backdrop-blur"
          data-reveal="true"
          data-reveal-delay="0.1"
        >
          <div className="mb-4 flex items-center justify-between">
            <strong className="flex items-center gap-2 text-[var(--audit-fg)]">
              <span className="audit-live-dot" />
              {a.liveActivity}
            </strong>
            <span className="font-mono text-[11px] text-[var(--audit-fg-tertiary)]">{a.demoData}</span>
          </div>
          <div className="audit-log">
            {LOGS.map((row) => (
              <div key={row.t + row.title} className="audit-row text-sm">
                <span className="font-mono text-[var(--audit-fg-tertiary)]">{row.t}</span>
                <span className="truncate text-[var(--audit-fg)]">
                  {row.title}
                  <span className="text-[var(--audit-fg-tertiary)]"> → {row.app}</span>
                </span>
                <span className="font-mono text-[11px] text-[var(--audit-fg-tertiary)]">{row.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
