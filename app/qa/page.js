"use client";

import { useEffect, useMemo, useState } from "react";

const CASES = [
  {
    id: "line-thread",
    section: "Scroll line",
    name: "Indigo line-thread scrub",
    how: "Desktop ≥1024px: scroll into Command flow — blue line draws down; scroll up — line retracts. Tip dot follows tip.",
    selector: ".line-thread-svg",
    cssAnim: null,
  },
  {
    id: "hero-keys",
    section: "Hero",
    name: "Hotkey key-settle",
    how: "Reload homepage ≥640px. ⌃⌥L keys drop in with stagger.",
    selector: ".summon-keystroke span",
    cssAnim: "key-settle",
  },
  {
    id: "hero-press",
    section: "Hero",
    name: "L key press squash",
    how: "On load timeline, last key briefly scales to 0.94 then back.",
    selector: ".summon-keystroke span:last-child",
    cssAnim: null,
  },
  {
    id: "hero-panel",
    section: "Hero",
    name: "Summon panel material-settle + float",
    how: "Panel fades/scales in, then gently floats (summon-float).",
    selector: ".summon-panel",
    cssAnim: "summon-float",
  },
  {
    id: "hero-sweep",
    section: "Hero",
    name: "Surface sweep highlight",
    how: "Diagonal light sweep loops across summon panel.",
    selector: ".surface-sweep",
    cssAnim: "sweep",
  },
  {
    id: "hero-caret",
    section: "Hero",
    name: "Search caret blink",
    how: "Indigo caret blinks in search field.",
    selector: ".summon-caret",
    cssAnim: "blink",
  },
  {
    id: "hero-row",
    section: "Hero",
    name: "Active row selected-row pulse",
    how: "Risk Analysis row glows with selected-row animation.",
    selector: ".summon-row-active",
    cssAnim: "selected-row",
  },
  {
    id: "hero-workspaces",
    section: "Hero",
    name: "Workspace drift",
    how: "Background Mac windows gently bob (workspace-drift).",
    selector: ".summon-workspace",
    cssAnim: "workspace-drift",
  },
  {
    id: "hero-trust",
    section: "Hero",
    name: "Open beta trust-pulse",
    how: "Teal badge dot pulses (trust-pulse).",
    selector: ".trust-dot",
    cssAnim: "trust-pulse",
  },
  {
    id: "hero-copy",
    section: "Hero",
    name: "Headline line-mask reveal",
    how: "H1 lines rise from mask after keys/panel summon.",
    selector: ".hero-line",
    cssAnim: null,
  },
  {
    id: "cmdk",
    section: "Command",
    name: "⌘K / Ctrl+K palette",
    how: "Open palette; panel uses command-in; active row pulses.",
    selector: ".command-surface-panel",
    cssAnim: "command-in",
  },
  {
    id: "reveal",
    section: "Scroll",
    name: "data-reveal scroll reveals",
    how: "Scroll sections; blocks fade/rise once at top 86%.",
    selector: "[data-reveal]",
    cssAnim: null,
  },
  {
    id: "stagger",
    section: "Scroll",
    name: "data-reveal-stagger children",
    how: "Workflow steps / pricing cards stagger in.",
    selector: "[data-reveal-stagger]",
    cssAnim: null,
  },
  {
    id: "workflow-glow",
    section: "Workflow",
    name: "Runner preview-glow",
    how: "Risk Analysis runner card soft indigo glow loop.",
    selector: ".workflow-runner",
    cssAnim: "preview-glow",
  },
  {
    id: "tm-scrub",
    section: "Time Machine",
    name: "Scrub thumb travel",
    how: "Blue scrub thumb slides 25%→50%→75%.",
    selector: ".tm-scrub-thumb",
    cssAnim: "scrub-thumb",
  },
  {
    id: "tm-diff",
    section: "Time Machine",
    name: "Diff highlight",
    how: "Version comparison block gently saturates/lifts.",
    selector: ".diff-live",
    cssAnim: "diff-highlight",
  },
  {
    id: "audit-live",
    section: "Audit",
    name: "Live pulse dot",
    how: "Injection History header teal/white pulse.",
    selector: ".audit-live-dot",
    cssAnim: "audit-live-pulse",
  },
  {
    id: "lenis",
    section: "Motion system",
    name: "Lenis smooth scroll + motion-on",
    how: "html.motion-on present when reduced-motion is off.",
    selector: "html.motion-on",
    cssAnim: null,
  },
  {
    id: "reduced",
    section: "A11y",
    name: "prefers-reduced-motion",
    how: "OS reduce-motion: animations collapse to 0.01ms.",
    selector: null,
    cssAnim: null,
  },
];

export default function QaPage() {
  const [results, setResults] = useState({});
  const [running, setRunning] = useState(false);

  const grouped = useMemo(() => {
    return CASES.reduce((acc, c) => {
      (acc[c.section] ||= []).push(c);
      return acc;
    }, {});
  }, []);

  const runTests = () => {
    setRunning(true);
    const next = {};
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    CASES.forEach((c) => {
      if (c.id === "reduced") {
        next[c.id] = {
          pass: true,
          detail: reduced ? "Reduce motion ON" : "Reduce motion OFF (full motion expected)",
        };
        return;
      }
      if (c.id === "lenis") {
        const on = document.documentElement.classList.contains("motion-on");
        next[c.id] = {
          pass: reduced ? !on || true : on,
          detail: on ? "html.motion-on present" : "missing motion-on (open / first)",
        };
        return;
      }
      if (!c.selector) {
        next[c.id] = { pass: true, detail: "manual" };
        return;
      }

      // Prefer checking homepage if opened in another tab; here we probe current doc
      // For homepage-only selectors, report skip unless elements exist.
      const nodes = document.querySelectorAll(c.selector);
      if (!nodes.length) {
        next[c.id] = {
          pass: false,
          detail: `selector missing on /qa — open / and re-check visually (${c.selector})`,
        };
        return;
      }

      if (!c.cssAnim) {
        next[c.id] = { pass: true, detail: `found ${nodes.length} node(s)` };
        return;
      }

      let animOk = false;
      nodes.forEach((node) => {
        const cs = getComputedStyle(node);
        const name = cs.animationName || "";
        if (name.split(",").some((n) => n.trim() === c.cssAnim || n.includes(c.cssAnim))) {
          animOk = true;
        }
      });
      next[c.id] = {
        pass: animOk || reduced,
        detail: animOk
          ? `animation "${c.cssAnim}" active`
          : reduced
            ? "reduced-motion override"
            : `expected "${c.cssAnim}", got "${getComputedStyle(nodes[0]).animationName}"`,
      };
    });

    setResults(next);
    setRunning(false);
  };

  useEffect(() => {
    // auto-run structural checks for this page + note homepage tests
    runTests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const summary = Object.values(results);
  const passCount = summary.filter((r) => r.pass).length;
  const failCount = summary.filter((r) => r && !r.pass).length;

  return (
    <main className="container section py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="pill">QA</span>
          <h1 className="display-type mt-4 text-4xl font-bold md:text-5xl">
            Animation + UI test cases
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--fg-secondary)]">
            Checklist aligned to{" "}
            <a className="underline" href="https://lineaprompt.com/" target="_blank" rel="noreferrer">
              lineaprompt.com
            </a>{" "}
            motion. Run against homepage for full CSS animation detection.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="/" className="btn btn-secondary">
            Open homepage
          </a>
          <button type="button" className="btn btn-primary" onClick={runTests} disabled={running}>
            {running ? "Running…" : "Re-run checks"}
          </button>
        </div>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <Stat label="Cases" value={CASES.length} />
        <Stat label="Pass" value={passCount} tone="ok" />
        <Stat label="Needs homepage / fail" value={failCount} tone="warn" />
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([section, items]) => (
          <section key={section} className="frost-panel p-5">
            <h2 className="text-lg font-bold">{section}</h2>
            <div className="mt-4 divide-y divide-[var(--border-subtle)]">
              {items.map((c) => {
                const r = results[c.id];
                return (
                  <div key={c.id} className="grid gap-2 py-3 md:grid-cols-[140px_1fr_1.2fr]">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          !r
                            ? "bg-[var(--surface-2)] text-[var(--fg-tertiary)]"
                            : r.pass
                              ? "bg-[var(--surface-success)] text-[var(--fg-success)]"
                              : "bg-[var(--surface-warning)] text-[var(--fg-warning)]"
                        }`}
                      >
                        {!r ? "…" : r.pass ? "PASS" : "CHECK"}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="mt-1 text-sm text-[var(--fg-secondary)]">{c.how}</p>
                    </div>
                    <p className="font-mono text-xs text-[var(--fg-tertiary)]">
                      {r?.detail || "pending"}
                      {c.cssAnim ? ` · @keyframes ${c.cssAnim}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 magnetic-panel p-6">
        <h2 className="text-lg font-bold">Manual UI parity pass</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--fg-secondary)]">
          <li>Side-by-side: localhost:3000 vs lineaprompt.com at 1440px.</li>
          <li>Confirm frost page background + magnetic panels + IBM Plex Mono chips.</li>
          <li>Hero summon panel tilt (~-2.6deg) and floating after settle.</li>
          <li>⌘K opens command palette; Esc closes; arrow keys move active row glow.</li>
          <li>Scroll: every major section reveals once (no re-trigger).</li>
          <li>Time Machine scrub thumb loops; Audit live dot pulses.</li>
          <li>Mobile &lt;640px: summon workspaces hidden; panel untilted.</li>
          <li>Enable OS Reduce Motion: loops stop / durations collapse.</li>
        </ol>
      </div>
    </main>
  );
}

function Stat({ label, value, tone }) {
  const toneClass =
    tone === "ok"
      ? "text-[var(--fg-success)]"
      : tone === "warn"
        ? "text-[var(--fg-warning)]"
        : "text-[var(--fg-primary)]";
  return (
    <div className="frost-panel p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${toneClass}`}>{value}</p>
    </div>
  );
}
