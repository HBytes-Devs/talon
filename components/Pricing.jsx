export default function Pricing() {
  return (
    <section id="pricing" className="scroll-anchor section-pad pricing-section">
      <div className="container-grid">
        <div className="max-w-2xl" data-reveal="true">
          <span className="pill">Pricing</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            3 users free forever!
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            Save $11.97 every month on the first three seats. Premium is $3.99 / user / month from
            the 4th user onwards. Yearly discount 10%.
          </p>
        </div>

        <div className="pricing-ledger mt-10 grid items-stretch gap-4 lg:grid-cols-3" data-reveal-stagger="true">
          <div className="frost-panel pricing-ledger-sheet flex min-w-0 flex-col p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
              Free
            </p>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)]">
              Up to 3 users
            </h3>
            <p className="mt-4 text-4xl font-bold">
              $0
              <span className="ml-2 text-sm font-medium text-[var(--fg-secondary)]">
                forever
              </span>
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)]">
              Live tracking, screenshots, idle & break logging, reports, and the client app —
              free for 3 users forever.
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)]">
              Simple & easy to use. No credit card. Windows, Mac & mobile.
            </p>
            <a href="#beta" className="btn btn-secondary mt-6 w-full">
              Start free
            </a>
          </div>

          <div className="magnetic-panel pricing-ledger-sheet relative p-6 ring-1 ring-[var(--pill-border)]">
            <span className="absolute right-4 top-4 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2.5 py-1 text-[11px] font-semibold text-[var(--pill-fg)]">
              Most teams
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
              Premium
            </p>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)]">
              4th user onwards
            </h3>
            <p className="mt-4 text-4xl font-bold">
              $3.99
              <span className="ml-2 text-sm font-medium text-[var(--fg-secondary)]">
                / user / month
              </span>
            </p>
            <p className="mt-2 text-xs text-[var(--fg-tertiary)]">Yearly discount 10%.</p>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-secondary)]">
              Everything in Free, billed only from the 4th seat. First 3 users stay free.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--fg-secondary)]">
              <li>• Live stream & screenshots</li>
              <li>• Time, attendance & leave</li>
              <li>• Location tracking & site visits</li>
              <li>• Task, pay rates & invoices</li>
            </ul>
            <a href="#beta" className="btn btn-primary mt-6 w-full">
              Start Premium
            </a>
            <p className="mt-3 text-xs text-[var(--fg-tertiary)]">
              Billing is prorated based on employees added.
            </p>
          </div>

          <div className="frost-panel pricing-ledger-sheet p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
              Business
            </p>
            <h3 className="display-type mt-2 text-xl font-bold text-[var(--fg-primary)]">
              Teams & enterprise
            </h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>Business</strong>
                  <span className="text-lg font-bold">$9.99</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">
                  / user / month · minimum 25 users
                </p>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>Volume</strong>
                  <span className="text-lg font-bold">100+</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">license packs for large teams</p>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] p-3">
                <div className="flex items-baseline justify-between">
                  <strong>Enterprise</strong>
                  <span className="text-lg font-bold">On-prem</span>
                </div>
                <p className="mt-1 text-[var(--fg-secondary)]">
                  store data at your location · institutional & non-profit options
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[var(--fg-tertiary)]">
              Hardware: 4GB RAM & min. i3 5th Gen. Windows 10/11, Mac ARM & Intel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
