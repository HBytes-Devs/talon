import LineSegment from "./LineSegment";

export default function Packet() {
  return (
    <section className="packet-split-section line-host scroll-anchor section-pad">
      <LineSegment variant="packet" />
      <div className="container-grid">
        <div className="max-w-3xl" data-reveal="true">
          <span className="pill">Beyond time tracking</span>
          <h2 className="display-type mt-5 max-w-2xl text-balance text-4xl font-bold md:text-6xl">
            Your organization&apos;s HR A/B testing tool.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--fg-secondary)]">
            Find productive & distraction patterns after new HR policies, perks, rules & more. Each
            company has its own productive tasks — our ML learns yours over time.
          </p>
        </div>

        <div
          className="packet-split-stage mt-10"
          aria-label="Prompt packet split"
          data-reveal="true"
          data-reveal-delay="0.12"
        >
          <div className="packet-source">
            <div className="packet-source-head">
              <span>Team productivity</span>
              <span className="kbd">⌃⌥L</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--fg-secondary)]">
              See productive vs distraction after a new policy. Time per client is already in the
              report.
            </p>
            <div className="packet-source-preview mt-4">
              <span className="packet-line w-[92%]" />
              <span className="packet-line w-[78%]" />
              <span className="packet-line w-[86%]" />
              <span className="packet-line w-[64%]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[var(--fg-tertiary)]">
              <span>22 present</span>
              <span>2 idle</span>
              <span>ML tags</span>
            </div>
          </div>

          <div className="hidden items-center justify-center md:flex">
            <div className="h-full w-px bg-[var(--border-subtle)]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Trainable ML",
                label: "Classify",
                body: "Each company has its own productive tasks. Our ML learns from yours and ranks activity over time.",
                chip: "productive / distraction",
              },
              {
                n: "02",
                title: "Advanced reports",
                label: "Analyse",
                body: "Granular & grand-level reports for admins & managers to analyse productivity & distractions of all employees.",
                chip: "per client / project",
              },
              {
                n: "03",
                title: "HR decisions",
                label: "Compare",
                body: "Help your HR team make informed decisions and compare team productivity at ease after new policies.",
                chip: "A/B patterns",
              },
            ].map((card) => (
              <div
                key={card.n}
                className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-strong)] p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="pill">{card.label}</span>
                  <span className="font-mono text-xs text-[var(--fg-tertiary)]">{card.n}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)]">{card.body}</p>
                <span className="mt-4 inline-flex rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px]">
                  {card.chip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
