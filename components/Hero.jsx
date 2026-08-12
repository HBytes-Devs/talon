"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { DUR, STAGGER } from "../lib/motion";

const TABS = [
  {
    id: "live",
    label: "Live",
    query: "aisha",
    chips: ["Working", "Idle 18m", "Screenshot"],
    footer: "Live tracking · non-intrusive",
    rows: [
      { title: "Aisha Khan", blurb: "Working · Figma · 2h 14m", tag: "productive" },
      { title: "Omar Malik", blurb: "Idle · 18 min", tag: "idle" },
      { title: "Sara Ahmed", blurb: "In a meeting · Zoom", tag: "meeting" },
      { title: "Hassan Ali", blurb: "On break · 12 min", tag: "break" },
    ],
  },
  {
    id: "idle",
    label: "Idle",
    query: "idle",
    chips: ["2 idle", "18m avg", "Alert"],
    footer: "Idle alerts · keyboard & mouse",
    rows: [
      { title: "Omar Malik", blurb: "Idle · Chrome · 18 min", tag: "idle" },
      { title: "Zainab Ali", blurb: "Idle · Slack · 11 min", tag: "idle" },
      { title: "Bilal Hussain", blurb: "Idle · Finder · 9 min", tag: "idle" },
      { title: "Hira Sheikh", blurb: "Away · no input · 26 min", tag: "away" },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    query: "acme",
    chips: ["164h", "12h idle", "Export"],
    footer: "Per client · project · task",
    rows: [
      { title: "Acme website", blurb: "12.4h billable · 3 people", tag: "billable" },
      { title: "Northstar QA", blurb: "6.1h billable · 2 people", tag: "billable" },
      { title: "Internal ops", blurb: "2.0h non-billable", tag: "internal" },
      { title: "Distraction", blurb: "1.2h social & news", tag: "idle" },
    ],
  },
];

export default function Hero({ onOpenCommand }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.classList.add("hero-js");

    let killed = false;
    let splitRevert = null;
    let timeline = null;
    const mm = gsap.matchMedia();

    const boot = async () => {
      let frostEase = "power2.out";
      let settleEase = "power2.out";
      try {
        const { CustomEase } = await import("gsap/CustomEase");
        gsap.registerPlugin(CustomEase);
        try { CustomEase.create("frost", "0.2, 0.72, 0.2, 1"); } catch {}
        try { CustomEase.create("frostSettle", "0.18, 0.72, 0.16, 1"); } catch {}
        frostEase = "frost";
        settleEase = "frostSettle";
      } catch {
        /* free fallback */
      }
      if (killed) return;

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 640px)",
        () => {
          const headline = root.querySelector(".hero-copy h1");

          gsap.set(
            [
              headline,
              ".summon-keystroke span",
              ".summon-panel",
              ".summon-workspaces",
              ".hero-copy [data-hero-badge]",
              ".hero-copy [data-hero-copy]",
              ".hero-underline",
            ],
            { autoAlpha: 0 }
          );

          const runIntro = (lines = []) => {
            const tl = gsap.timeline({
              defaults: { ease: frostEase },
            });

            tl.fromTo(
              ".summon-keystroke span",
              { autoAlpha: 0, y: -6 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.34,
                ease: settleEase,
                stagger: STAGGER.tight,
              }
            );
            tl.addLabel("press", ">-0.02");
            tl.to(
              ".summon-keystroke span:last-child",
              {
                scale: 0.94,
                duration: 0.06,
                ease: "power2.in",
                yoyo: true,
                repeat: 1,
                transformOrigin: "50% 50%",
              },
              "press"
            );
            tl.addLabel("summon", "press+=0.02");
            tl.fromTo(
              ".summon-panel",
              { autoAlpha: 0, y: 14, scale: 0.965 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                transformOrigin: "52% 42%",
              },
              "summon"
            );
            tl.to(".summon-workspaces", { autoAlpha: 1, duration: 0.8 }, "summon");
            tl.fromTo(
              ".hero-copy [data-hero-badge]",
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.4 },
              "summon+=0.02"
            );
            tl.addLabel("headline", "summon+=0.05");

            if (lines.length) {
              tl.set(headline, { autoAlpha: 1 }, "headline");
              tl.from(
                lines,
                { yPercent: 110, duration: 0.55, stagger: 0.06 },
                "headline"
              );
            } else if (headline) {
              tl.fromTo(
                headline,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: DUR.settle },
                "headline"
              );
            }

            tl.fromTo(
              ".hero-copy [data-hero-copy]",
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05 },
              "headline+=0.16"
            );
            tl.set(".hero-underline", { autoAlpha: 0.85 }, "headline+=0.4");
            tl.fromTo(
              ".hero-underline path",
              { strokeDashoffset: 120 },
              { strokeDashoffset: 0, duration: 0.42, ease: "power3.out" },
              "<"
            );

            return tl;
          };

          const splitHeadline = () => {
            if (!headline || killed) return;
            const text = headline.textContent || "";
            const words = text.trim().split(/\s+/);
            headline.setAttribute("aria-label", text);
            headline.innerHTML = "";
            const lines = [];
            const lineBreaks = [[words[0], words[1]], words.slice(2)];
            lineBreaks.forEach((lineWords) => {
              if (!lineWords.length) return;
              const mask = document.createElement("div");
              mask.className = "hero-line-mask";
              const line = document.createElement("div");
              line.className = "hero-line";
              line.textContent = lineWords.join(" ");
              mask.appendChild(line);
              headline.appendChild(mask);
              lines.push(line);
            });
            splitRevert = () => {
              headline.textContent = text;
            };
            timeline = runIntro(lines);
          };

          const fontsReady = Promise.race([
            (document.fonts?.ready ?? Promise.resolve()).catch(() => undefined),
            new Promise((r) => window.setTimeout(r, 800)),
          ]);

          fontsReady.then(() => {
            if (!killed) splitHeadline();
          });

          return () => {
            killed = true;
            timeline?.kill();
            splitRevert?.();
          };
        }
      );
    };

    boot();

    return () => {
      killed = true;
      mm.revert();
    };
  }, []);

  return (
    <div className="hero-intro contents" ref={rootRef}>
    <section className="hero-section section" id="top">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="hero-copy">
            <div
              data-hero-badge="true"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--fg-secondary)]"
            >
              <span className="trust-dot" />
              Workforce productivity insights
              <span className="kbd-chip ml-1">3 free</span>
            </div>

            <h1 className="display-type mt-6 max-w-xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
              Win back productivity & profits affected by distractions.
            </h1>
            <svg
              className="hero-underline mt-2"
              width="180"
              height="12"
              viewBox="0 0 180 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C40 2, 90 12, 178 4"
                stroke="var(--indigo-500)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="120"
                strokeDashoffset="120"
                opacity="0.55"
              />
            </svg>

            <p
              data-hero-copy="true"
              className="mt-6 max-w-lg text-lg leading-8 text-[var(--fg-secondary)]"
            >
              Managers&apos; time is expensive! Track your team&apos;s productivity without losing
              yours. Talon helps businesses boost employee productivity and improve time tracking
              through automated distraction-free monitoring and real-time feedback.
            </p>

            <div data-hero-copy="true" className="mt-8 flex flex-wrap gap-3">
              <a href="#beta" className="btn btn-primary">
                3 users free forever!
              </a>
              <a href="#beta" className="btn btn-secondary">
                Start free
              </a>
              <button type="button" className="btn btn-secondary" onClick={onOpenCommand}>
                Try live tracking
              </button>
            </div>

            <p data-hero-copy="true" className="mt-5 text-sm text-[var(--fg-tertiary)]">
              No credit card. Simple & easy to use. Windows, Mac & mobile.
            </p>

            <div data-hero-copy="true" className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-[var(--fg-secondary)]">
              <div className="rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
                Software & Browsing
              </div>
              <div className="rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
                Live stream & Screenshots
              </div>
              <div className="rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
                Time & Attendance
              </div>
            </div>
          </div>

          <div
            className="hero-stage relative hidden min-w-0 sm:block"
            aria-label="Talon live tracking dashboard for the current team"
          >
            <SummonDemo />
          </div>
        </div>
      </section>
    </div>
  );
}

function SummonDemo() {
  const [tabId, setTabId] = useState("live");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const tab = TABS.find((t) => t.id === tabId) ?? TABS[0];

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tab.rows;
    return tab.rows.filter(
      (row) =>
        row.title.toLowerCase().includes(q) ||
        row.blurb.toLowerCase().includes(q) ||
        row.tag.toLowerCase().includes(q)
    );
  }, [query, tab]);

  const activeIndex = rows.length ? Math.min(selected, rows.length - 1) : -1;

  const onPanelKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((i) => Math.min((rows.length ? i : 0) + 1, Math.max(rows.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      setQuery("");
      setSelected(0);
    } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const idx = TABS.findIndex((t) => t.id === tabId);
      const next = e.key === "ArrowRight"
        ? TABS[(idx + 1) % TABS.length]
        : TABS[(idx - 1 + TABS.length) % TABS.length];
      setTabId(next.id);
      setQuery("");
      setSelected(0);
    }
  };

  return (
    <div className="summon-stage">
      <div className="summon-field" aria-hidden="true" />
      <div className="summon-workspaces" aria-hidden="true">
        {[0, 1, 2].map((layer) => (
          <div key={layer} className="summon-workspace" style={{ "--layer": layer }}>
            <div className="summon-window-bar">
              <span />
              <span />
              <span />
              <i />
            </div>
            <div className="summon-window-body">
              <span />
              <span />
              <span />
              <div>
                <span />
                <span />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="summon-keystroke" aria-hidden="true">
        <span>⌃</span>
        <span>⌥</span>
        <span>L</span>
      </div>

      <div
        className="summon-panel magnetic-panel"
        tabIndex={0}
        onKeyDown={onPanelKeyDown}
      >
        <div className="surface-sweep" aria-hidden="true" />
        <div className="summon-panel-top">
          <span className="summon-status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Native tracking · non-intrusive
          </span>
          <span className="kbd-chip">{tab.label.toUpperCase()}</span>
        </div>

        <label className="summon-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            placeholder={tab.query}
            aria-label={`Search ${tab.label.toLowerCase()} dummy data`}
            className="min-w-0 flex-1 bg-transparent font-mono text-sm text-[var(--fg-primary)] outline-none placeholder:text-[var(--fg-tertiary)]"
          />
          {query ? (
            <button
              type="button"
              className="kbd-chip"
              onClick={() => {
                setQuery("");
                setSelected(0);
              }}
            >
              esc
            </button>
          ) : (
            <span className="kbd-chip">esc</span>
          )}
        </label>

        <div className="summon-toolbar" role="tablist" aria-label="Tracking views">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tabId === item.id}
              className={tabId === item.id ? "is-active" : ""}
              onClick={() => {
                setTabId(item.id);
                setQuery("");
                setSelected(0);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="summon-list" role="listbox" aria-label={tab.label}>
          {rows.length ? (
            rows.map((row, i) => (
              <button
                key={row.title}
                type="button"
                role="option"
                aria-selected={i === activeIndex}
                className={`summon-row ${i === activeIndex ? "summon-row-active" : ""}`}
                onClick={() => setSelected(i)}
              >
                <span className="summon-row-dot" />
                <div className="summon-row-copy">
                  <strong>{row.title}</strong>
                  <em>{row.blurb}</em>
                </div>
                <span className="summon-row-tag">{row.tag}</span>
              </button>
            ))
          ) : (
            <p className="rounded-[11px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-4 text-sm text-[var(--fg-secondary)]">
              No dummy matches for “{query}”.
            </p>
          )}
        </div>

        <div className="summon-context">
          {tab.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>

        <div className="summon-footer">
          <span>↑↓ navigate · ↵ open</span>
          <span>{tab.footer}</span>
        </div>
      </div>
    </div>
  );
}
