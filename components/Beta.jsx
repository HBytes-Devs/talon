import { BRAND } from "../lib/brand";

export default function Beta() {
  return (
    <section id="beta" className="section pb-28">
      <div className="container">
        <div className="magnetic-panel grid gap-8 p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:p-10" data-reveal="true">
          <div>
            <span className="pill">Download</span>
            <h2 className="display-type mt-5 max-w-3xl text-balance text-4xl font-bold md:text-6xl">
              3 users free forever!
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--fg-secondary)]">
              Download and install the client app on employee work devices. Windows, Mac & mobile.
              No credit card. Simple & easy to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${BRAND.email}`} className="btn btn-primary">
                Start free
              </a>
              <span className="inline-flex items-center text-sm text-[var(--fg-tertiary)]">
                3 users free forever · $3.99 / user / month after
              </span>
            </div>
          </div>

          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <strong>Client app</strong>
              <span className="kbd-chip">v4</span>
            </div>
            <ul className="space-y-3 text-sm text-[var(--fg-secondary)]">
              {[
                "Windows 10 & 11",
                "Mac ARM & Intel",
                "Mobile for field teams",
                "4GB RAM · min. i3 5th Gen",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-2.5"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--teal-500)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
