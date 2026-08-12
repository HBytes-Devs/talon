const ROWS = [
  ["Live screenshots & status", "No", "Partial", "No", "Yes"],
  ["Idle, meeting & break logging", "No", "Partial", "No", "Yes"],
  ["Time per client / project", "Manual", "Partial", "Yes", "Yes"],
  ["Field location & site visits", "No", "No", "Add-on", "Yes"],
  ["Screenshot blur & IP protection", "No", "No", "No", "Yes"],
  ["3 users free forever", "Trial only", "Limited", "No", "Yes"],
  ["Trainable ML activity tags", "No", "No", "No", "Yes"],
];

export default function Compare() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl" data-reveal="true">
          <span className="pill">Why Talon?</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            Simple & easy to use. No excuses.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            By automatically logging employee hours, Talon lets people stay on task, save time on
            manual time logging, and avoid distractions.
          </p>
        </div>

        <div className="frost-panel compare-panel mt-10 overflow-x-auto" data-reveal="true">
          <table className="compare-table w-full min-w-[760px] text-sm">
            <caption className="sr-only">
              Feature comparison between Talon and adjacent tools
            </caption>
            <thead>
              <tr className="border-b border-[var(--border-subtle)] text-left">
                <th className="compare-sticky p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  Feature
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  Spreadsheets
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    Manual logs
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  Time apps
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    Timers
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                  Project tools
                  <span className="mt-1 block font-medium normal-case tracking-normal text-[var(--fg-secondary)]">
                    Tasks only
                  </span>
                </th>
                <th className="p-4 align-top text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pill-fg)]">
                  Talon
                  <span className="mt-1 block font-medium normal-case tracking-normal">
                    The whole loop
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
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
        <p className="mt-4 text-xs text-[var(--fg-tertiary)]">
          Trusted by thousands of companies around the world.
        </p>
      </div>
    </section>
  );
}
