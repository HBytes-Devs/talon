"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DUR } from "../lib/motion";
import { useLocale } from "./LocaleProvider";

const TAB_DEFS = [
  {
    id: "live",
    labelKey: "tabLive",
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
    labelKey: "tabIdle",
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
    labelKey: "tabReports",
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

export default function Hero() {
  const rootRef = useRef(null);
  const { locale, t } = useLocale();
  const h = t.hero;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.classList.add("hero-js");

    let killed = false;
    let splitRevert = null;
    let timeline = null;
    let floatTween = null;
    const mm = gsap.matchMedia();

    const boot = async () => {
      let frostEase = "power2.out";
      try {
        const { CustomEase } = await import("gsap/CustomEase");
        gsap.registerPlugin(CustomEase);
        try { CustomEase.create("frost", "0.2, 0.72, 0.2, 1"); } catch {}
        try { CustomEase.create("frostSettle", "0.18, 0.72, 0.16, 1"); } catch {}
        frostEase = "frost";
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
              ".hero-stage .summon-panel",
              ".hero-stage .summon-workspaces",
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

            tl.addLabel("summon", 0);
            tl.fromTo(
              ".hero-stage .summon-panel",
              { autoAlpha: 0, y: 14, scale: 0.965, rotation: -2.6 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                rotation: -2.6,
                duration: 0.5,
                transformOrigin: "52% 42%",
              },
              "summon"
            );
            tl.to(".hero-stage .summon-workspaces", { autoAlpha: 1, duration: 0.8 }, "summon");
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

            tl.add(() => {
              floatTween?.kill();
              floatTween = gsap.to(".hero-stage .summon-panel", {
                y: -5,
                rotation: -2.1,
                duration: 3.5,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                transformOrigin: "52% 42%",
                force3D: true,
              });
            });

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

          // Failsafe: never leave hero stuck invisible if intro is interrupted
          const failsafe = window.setTimeout(() => {
            if (killed) return;
            gsap.set(
              [
                headline,
                ".hero-stage .summon-panel",
                ".hero-stage .summon-workspaces",
                ".hero-copy [data-hero-badge]",
                ".hero-copy [data-hero-copy]",
                ".hero-underline",
              ],
              { clearProps: "opacity,visibility,transform" }
            );
          }, 2200);

          return () => {
            killed = true;
            window.clearTimeout(failsafe);
            timeline?.kill();
            floatTween?.kill();
            floatTween = null;
            splitRevert?.();
          };
        }
      );
    };

    boot();

    return () => {
      killed = true;
      floatTween?.kill();
      floatTween = null;
      mm.revert();
    };
  }, [locale]);

  return (
    <div className="hero-intro contents" ref={rootRef} key={locale}>
      <section
        className="hero-section container-grid grid min-h-[760px] min-w-0 items-center gap-12 pt-32 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:pt-24"
        id="top"
      >
        <div className="hero-copy min-w-0 max-w-full">
          <div
            data-hero-badge="true"
            className="mb-7 inline-flex max-w-full flex-wrap items-center gap-3 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-2 text-sm font-medium text-[var(--fg-secondary)] shadow-[var(--shadow-card)] backdrop-blur-xl"
          >
            <span className="inline-block size-2 shrink-0 rounded-full bg-[var(--success)] shadow-[0_0_14px_var(--success-glow)]" />
            {h.badge}
            <span className="kbd">{h.freeBadge}</span>
          </div>

          <div className="hero-headline">
            <h1 className="display-type max-w-full text-balance text-[2.15rem] font-bold leading-[1.05] text-[var(--fg-primary)] sm:max-w-[10.8ch] sm:text-6xl sm:leading-[0.96] lg:text-7xl">
              {h.headline}
            </h1>
            <svg
              aria-hidden="true"
              className="hero-underline"
              viewBox="0 0 220 12"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M2 7.5C40 3.5 92 2.5 138 5.5C168 7.5 196 8.5 218 6"
                stroke="var(--indigo-500)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="120"
                strokeDashoffset="120"
              />
            </svg>
          </div>

          <div className="hero-stage-mobile mt-8 max-w-full overflow-hidden sm:hidden">
            <SummonDemo />
          </div>

          <p
            data-hero-copy="true"
            className="mt-7 max-w-xl text-pretty text-xl leading-8 text-[var(--fg-secondary)]"
          >
            {h.body}
          </p>

          <div data-hero-copy="true" className="mt-9 flex max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#beta" className="btn btn-primary h-14 w-full px-5 sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span className="flex flex-col justify-center gap-1 leading-none">
                <span className="text-[10px] font-normal uppercase tracking-[0.12em] opacity-75 leading-none">
                  {h.ctaEyebrow}
                </span>
                <span className="leading-none">{h.cta}</span>
              </span>
            </a>
          </div>

          <p data-hero-copy="true" className="mt-5 text-sm text-[var(--fg-tertiary)]">
            {h.footnote}
          </p>

          <div
            data-hero-copy="true"
            className="mt-9 flex max-w-xl flex-wrap gap-2 text-xs text-[var(--fg-secondary)]"
          >
            <div className="shrink-0 whitespace-nowrap rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
              {h.chipSoftware}
            </div>
            <div className="shrink-0 whitespace-nowrap rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
              {h.chipLive}
            </div>
            <div className="shrink-0 whitespace-nowrap rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2">
              {h.chipTime}
            </div>
          </div>
        </div>

        <div
          className="hero-stage relative hidden min-w-0 sm:block"
          aria-label={h.stageAria}
        >
          <SummonDemo />
        </div>
      </section>
    </div>
  );
}

function SummonDemo() {
  const { t } = useLocale();
  const h = t.hero;
  const [tabId, setTabId] = useState("live");
  const tabs = TAB_DEFS.map((def) => ({
    ...def,
    label: h[def.labelKey],
  }));
  const tab = tabs.find((item) => item.id === tabId) ?? tabs[0];

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

      <div className="summon-panel magnetic-panel">
        <div className="surface-sweep" aria-hidden="true" />
        <div className="summon-panel-top">
          <span className="summon-status">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {h.nativeTracking}
          </span>
        </div>

        <div className="summon-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <span className="summon-query">
            <span className="font-mono">{tab.query}</span>
            <span className="summon-caret" aria-hidden="true" />
          </span>
          <span className="kbd">esc</span>
        </div>

        <div className="summon-toolbar" aria-hidden="true">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={tabId === item.id ? "is-active" : ""}
              onClick={() => setTabId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="summon-list">
          {tab.rows.map((row, i) => (
            <div key={row.title} className={`summon-row ${i === 0 ? "summon-row-active" : ""}`}>
              <span className="summon-row-dot" />
              <span className="summon-row-copy">
                <strong>{row.title}</strong>
                <em>{row.blurb}</em>
              </span>
              <span className="summon-row-tag">{row.tag}</span>
            </div>
          ))}
        </div>

        <div className="summon-context">
          {tab.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>

        <div className="summon-footer">
          <span>
            <span className="kbd">↑↓</span> {h.navigate}
          </span>
          <span>
            <span className="kbd">↵</span> {h.open}
          </span>
          <span>{tab.footer}</span>
        </div>
      </div>
    </div>
  );
}
