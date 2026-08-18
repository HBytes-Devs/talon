export default function LocalFirst() {
  return (
    <section className="section-pad bg-[var(--surface-soft)]" id="local-first">
      <div className="container-grid grid items-center gap-10 lg:grid-cols-2">
        <div data-reveal="true">
          <span className="pill">Secure & IP protected</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            Enterprise-grade data security.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            Talon allows you to store your company data at your location. Data is encrypted with a
            high-secure ECC algorithm, transmitted over HTTPS, and screenshots that are analysed are
            blurred to ensure complete intellectual property protection.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Encrypted at rest & in transit",
              "Screenshot blur for IP protection",
              "No keystroke or microphone recording",
              "Non-intrusive, privacy-focused tracking",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3 text-[var(--fg-secondary)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-success)] text-[var(--fg-success)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="magnetic-panel p-6" data-reveal="true" data-reveal-delay="0.1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
            Privacy focused
          </p>
          <h3 className="mt-3 text-2xl font-bold">Non-intrusive, minimal distraction</h3>
          <p className="mt-4 text-lg leading-8 text-[var(--fg-secondary)]">
            Non-intrusive tracking is the optimal way to keep employees focused on their work. This
            helps create a more positive work environment as they know their privacy is not invaded.
            —HawkBytes
          </p>
          <a href="#beta" className="btn btn-secondary mt-6">
            Start free →
          </a>
        </div>
      </div>
    </section>
  );
}
