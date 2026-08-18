import { BRAND } from "../lib/brand";

export default function Beta() {
  return (
    <section id="beta" className="final-cta-section container-grid pb-20">
      <div className="final-cta frost-panel grid gap-8 p-5 md:p-8 lg:grid-cols-[1.08fr_0.92fr]" data-reveal="true">
        <div className="final-cta-copy">
            <span className="pill">Open beta</span>
            <h2 className="display-type mt-5 max-w-3xl text-balance text-4xl font-bold md:text-6xl">
              3 users free forever!
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--fg-secondary)]">
              Download and install the client app on employee work devices. Windows, Mac & mobile.
              No credit card. Simple & easy to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${BRAND.email}`} className="btn btn-primary h-14 px-5">
                Start free
              </a>
              <span className="inline-flex items-center text-sm text-[var(--fg-tertiary)]">
                Free forever · no credit card · Windows, Mac & mobile
              </span>
            </div>
          </div>

          <div className="beta-packet rounded-[14px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <strong>Client app</strong>
              <span className="kbd">v4</span>
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
    </section>
  );
}
