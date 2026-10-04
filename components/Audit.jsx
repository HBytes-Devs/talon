"use client";

import { useLocale } from "./LocaleProvider";

const LOGS = [
  { t: "14:32:07", title: "Aisha Khan", app: "Figma", meta: "Working", kind: "work" },
  { t: "11:18:54", title: "Omar Malik", app: "Chrome", meta: "Idle 18m", kind: "idle" },
  { t: "09:02:31", title: "Sara Ahmed", app: "Zoom", meta: "Meeting", kind: "meeting" },
  { t: "08:47:12", title: "Hassan Ali", app: "Break", meta: "12 min", kind: "break" },
  { t: "07:58:03", title: "Noor Fatima", app: "VS Code", meta: "Working", kind: "work" },
  { t: "07:15:46", title: "Aisha Khan", app: "Slack", meta: "Neutral", kind: "neutral" },
];

function AuditIcon({ index }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M22 12h-4l-3 8L9 4l-3 8H2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

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

          <div className="audit-items mt-8 grid gap-0" data-reveal-stagger="true">
            {a.items.map((item, i) => (
              <div key={item.title} className="audit-item">
                <span className="audit-item-icon">
                  <AuditIcon index={i} />
                </span>
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
                <span className="font-mono text-[11px] text-[var(--audit-fg-tertiary)]">{row.t}</span>
                <span className="min-w-0 truncate text-[var(--audit-fg)]">
                  {row.title}
                  <span className="text-[var(--audit-fg-tertiary)]"> · {row.app}</span>
                </span>
                <span className={`audit-status is-${row.kind}`}>{row.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
