import LineSegment from "./LineSegment";

const STEPS = [
  {
    n: "01",
    title: "Install",
    tag: "client",
    body: "Download and install the client app on employee work devices. Windows, Mac & mobile.",
  },
  {
    n: "02",
    title: "Start",
    tag: "workday",
    body: "Employees click Start at the beginning of the workday. Hours log automatically — no manual timesheets.",
  },
  {
    n: "03",
    title: "Track",
    tag: "activity",
    body: "Screenshots, app activity, idle, meetings & breaks are captured. Field teams sync location & site visits.",
  },
  {
    n: "04",
    title: "Review",
    tag: "reports",
    body: "Managers see live status, Focus Timeline, and granular reports — without spending their own day watching screens.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="workflow-section line-host section border-y border-[var(--border-subtle)]"
    >
      <LineSegment variant="workflow" />
      <div className="container grid items-start gap-10 lg:grid-cols-2">
        <div data-reveal="true">
          <span className="pill">How it works</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            Track your team&apos;s productivity without losing yours.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            Managers&apos; time is expensive! Talon automates distraction-free monitoring and
            real-time feedback so you know where time & efforts are spent.
          </p>
          <div className="workflow-hotkey mt-8 inline-flex items-center gap-2">
            <span className="kbd-chip">3</span>
            <strong className="pl-1 text-sm">users free forever</strong>
          </div>
        </div>

        <div className="workflow-runner frost-panel p-3" data-reveal="true" data-reveal-delay="0.12">
          <div className="workflow-runner-head">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
                live tracking
              </span>
              <h3 className="mt-1 text-lg font-bold">Team dashboard</h3>
              <p className="mt-1 text-sm text-[var(--fg-secondary)]">22 present · 2 idle</p>
            </div>
            <span className="rounded-full border border-[var(--border-success)] bg-[var(--surface-success)] px-2.5 py-1 text-[11px] font-semibold text-[var(--fg-success)]">
              Live
            </span>
          </div>

          <div className="workflow-lane" data-reveal-stagger="true">
            {STEPS.map((step) => (
              <div key={step.n} className="workflow-step">
                <div className="workflow-step-marker">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] font-mono text-xs font-semibold">
                    {step.n}
                  </span>
                </div>
                <div className="workflow-step-body">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-base font-bold">{step.title}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
              Today&apos;s snapshot
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--fg-primary)]">
              164h logged · 12h idle · 18h meetings · 6h breaks. Time spent per client is already in
              the report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
