import LineSegment from "./LineSegment";

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
  return (
    <section id="product" className="line-host scroll-anchor section-pad">
      <LineSegment variant="features" />
      <div className="container-grid space-y-20">
        <div data-reveal="true">
          <span className="pill">Why Talon?</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            Learn how Talon improves productivity in your business.
          </h2>
        </div>

        {/* Blueprint Library */}
        <article className="feature-article grid items-center gap-8 lg:grid-cols-2">
          <div data-reveal="true">
            <span className="pill">Live Tracking</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              Live stream & screenshots of the workday.
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">
              Get a real-time overview of your team&apos;s workday — all in one place. Talon
              displays the most recent screenshots along with each employee&apos;s current status
              (Working, Idle, In a Meeting, or on Break).
            </p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              <li className="flex gap-3">
                <Bullet /> Periodic screenshot monitoring with adjustable blur.
              </li>
              <li className="flex gap-3">
                <Bullet /> Live status refresh without switching screens.
              </li>
              <li className="flex gap-3">
                <Bullet /> Quick View: productive, distraction, idle, meetings & breaks.
              </li>
            </ul>
          </div>

          <div className="magnetic-panel overflow-hidden p-0" data-reveal="true" data-reveal-delay="0.12">
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] px-4 py-3 text-xs text-[var(--fg-secondary)]">
              <span className="traffic traffic-red" />
              <span className="traffic traffic-amber" />
              <span className="traffic traffic-green" />
              <span className="ml-2 font-semibold text-[var(--fg-primary)]">Live Activity</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em]">
                live · idle · reports
              </span>
            </div>
            <div className="grid md:grid-cols-[160px_1fr]">
              <aside className="hidden border-r border-[var(--border-subtle)] p-3 text-sm md:block">
                {["Live Activity", "Focus Timeline", "Reports"].map((item, i) => (
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
                    Tags
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["Work", "Idle", "Meeting"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2 py-0.5 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
              <div className="p-3">
                <div className="mb-3 flex items-center gap-2 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-2">
                  <span className="text-sm text-[var(--fg-tertiary)]">Search team…</span>
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
                  <span>22 present</span>
                  <span>·</span>
                  <span>2 idle</span>
                  <span>·</span>
                  <span>Blur on</span>
                  <div className="ml-auto flex gap-2">
                    {["Open", "Timeline", "Report"].map((a) => (
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
                <span className="font-semibold">Software & Browsing Activity</span>
                <span className="rounded-[8px] bg-[var(--ink-950)] px-2.5 py-1 text-xs font-semibold text-white">
                  Live
                </span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                Top activity
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
                Time by client
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
                  <strong>Know where time & efforts are spent</strong>
                  <span className="text-xs text-[var(--fg-tertiary)]">Per client / project</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)]">
                  When an employee is working on multiple projects or clients, Talon captures the
                  time spent on each task. Meetings are also accounted for in the report.
                </p>
                <div className="mt-3 flex gap-3 font-mono text-[11px] text-[var(--fg-tertiary)]">
                  <span>3 apps</span>
                  <span>4 clients</span>
                  <span>1 timeline</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="pill">Software & Browsing</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              Know where the time & efforts are spent.
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">
              When an employee is working on multiple projects or clients, our system can
              intelligently capture the time spent on each of the different tasks. Meetings are also
              accounted for in their report.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              <li className="flex gap-3">
                <Bullet /> App & browsing activity, classified as productive or distraction.
              </li>
              <li className="flex gap-3">
                <Bullet /> Time per client, project & task — automatically.
              </li>
              <li className="flex gap-3">
                <Bullet /> Trainable ML that learns your company&apos;s productive work.
              </li>
            </ul>
          </div>
        </article>

        {/* Time Machine */}
        <article className="feature-article grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="pill">Focus Timeline</span>
            <h3 className="display-type mt-5 max-w-xl text-balance text-3xl font-bold md:text-4xl">
              Work, idle, meeting & break — hour by hour.
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">
              Get a crystal-clear view of each employee&apos;s workday. The Focus Timeline presents
              a detailed, color-coded graph so you can track activity patterns and make informed
              decisions.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--fg-secondary)]">
              <li className="flex gap-3">
                <Bullet /> Idle detection from keyboard & mouse.
              </li>
              <li className="flex gap-3">
                <Bullet /> One-click break & meeting logging.
              </li>
              <li className="flex gap-3">
                <Bullet /> Granular reports for admins & managers.
              </li>
            </ul>
          </div>

          <div className="magnetic-panel p-4">
            <div className="mb-4 flex items-center justify-between">
              <strong>Focus Timeline</strong>
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
                Today&apos;s mix
              </p>
              <p className="mt-2 text-sm text-[var(--fg-success)]">
                + 6h 12m work · 1h 20m meetings
              </p>
              <p className="mt-1 text-sm text-[var(--fg-danger)]">
                − 48m idle · 40m break
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-secondary)]">
                Our dashboard accurately depicts time spent working on tasks, meetings, idle,
                distracted, and breaks — with different metrics.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Timeline", "Report", "Export"].map((a) => (
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
