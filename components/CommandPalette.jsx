"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BLUEPRINTS = [
  {
    id: "aisha",
    title: "Aisha Khan",
    tag: "WORKING",
    blurb: "Figma · 2h 14m productive",
  },
  {
    id: "omar",
    title: "Omar Malik",
    tag: "IDLE",
    blurb: "Chrome · idle 18 min",
  },
  {
    id: "sara",
    title: "Sara Ahmed",
    tag: "MEETING",
    blurb: "Zoom · meeting 42 min",
  },
  {
    id: "hassan",
    title: "Hassan Ali",
    tag: "BREAK",
    blurb: "Break · 12 min",
  },
  {
    id: "noor",
    title: "Noor Fatima",
    tag: "WORKING",
    blurb: "VS Code · 1h 05m productive",
  },
];

const DESTINATIONS = [
  { id: "product", label: "Features", hint: "Live tracking, screenshots, timeline & reports", href: "/#product" },
  { id: "workflow", label: "How it works", hint: "Install, start, track & review", href: "/#workflow" },
  { id: "pricing", label: "Pricing", hint: "3 users free forever. $3.99 / user / month after", href: "/#pricing" },
  { id: "faq", label: "FAQ", hint: "Straight answers before you start", href: "/#faq" },
  { id: "use-cases", label: "Use cases", hint: "Five ways Talon improves productivity", href: "/use-cases" },
  { id: "blog", label: "Blog", hint: "Productivity notes from HawkBytes", href: "/blog" },
  { id: "beta", label: "Start free", hint: "3 users free forever. No credit card.", href: "/#beta" },
];

function goTo(href) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const homePath = base || "/";
  if (href.startsWith("/#") || href.startsWith("#")) {
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : href;
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const atHome = path === homePath || path === "/";
    if (!atHome) {
      window.location.href = `${base}/${hash}`;
      return;
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.location.href = `${base}${href}`;
}

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const blueprints = BLUEPRINTS.filter(
      (b) =>
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.tag.toLowerCase().includes(q) ||
        b.blurb.toLowerCase().includes(q)
    ).map((b) => ({ type: "blueprint", ...b }));
    const dests = DESTINATIONS.filter(
      (d) => !q || d.label.toLowerCase().includes(q) || d.hint.toLowerCase().includes(q)
    ).map((d) => ({ type: "dest", ...d }));
    return [...blueprints, ...dests];
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = results[active];
        if (!item) return;
        if (item.type === "dest") {
          onClose();
          goTo(item.href);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, results, active]);

  return (
    <div className="command-surface" data-open={open ? "true" : "false"}>
      <div className="command-surface-backdrop" aria-hidden="true" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-surface-title"
        className="command-surface-panel magnetic-panel"
      >
        <h2 id="command-surface-title" className="sr-only">
          Command palette
        </h2>
        <div className="border-b border-[var(--border-subtle)] p-4">
          <label className="hotkey-search-control flex items-center gap-3 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--fg-tertiary)]">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the team or jump to a page…"
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-[var(--fg-tertiary)]"
            />
            <span className="kbd-chip text-[var(--fg-tertiary)]">esc</span>
          </label>
        </div>

        <div className="hotkey-results overflow-y-auto p-2" role="listbox">
          {results.some((r) => r.type === "blueprint") && (
            <p className="px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
              Team
            </p>
          )}
          {results
            .filter((r) => r.type === "blueprint")
            .map((item, idx) => {
              const i = results.indexOf(item);
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={active === i}
                  className={`command-row flex w-full cursor-pointer select-none flex-col gap-1 rounded-[10px] px-4 py-3 text-left ${
                    active === i
                      ? "command-row-active bg-[var(--surface-2)]"
                      : "hover:bg-[var(--surface-2)]"
                  }`}
                  onMouseEnter={() => setActive(i)}
                  onClick={onClose}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-semibold text-[var(--fg-primary)]">{item.title}</span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--pill-fg)]">
                      {item.tag}
                    </span>
                  </span>
                  <span className="truncate font-mono text-xs text-[var(--fg-secondary)]">{item.blurb}</span>
                </div>
              );
            })}

          {results.some((r) => r.type === "dest") && (
            <p className="px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
              Go to
            </p>
          )}
          {results
            .filter((r) => r.type === "dest")
            .map((item) => {
              const i = results.indexOf(item);
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={active === i}
                  className={`command-row flex w-full cursor-pointer select-none flex-col gap-1 rounded-[10px] px-4 py-3 text-left ${
                    active === i
                      ? "command-row-active bg-[var(--surface-2)]"
                      : "hover:bg-[var(--surface-2)]"
                  }`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    onClose();
                    goTo(item.href);
                  }}
                >
                  <span className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--fg-tertiary)]">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="font-semibold text-[var(--fg-primary)]">{item.label}</span>
                  </span>
                  <span className="block truncate pl-7 font-mono text-xs text-[var(--fg-secondary)]">
                    {item.hint}
                  </span>
                </div>
              );
            })}

          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-[var(--fg-secondary)]">No matches.</p>
          )}
        </div>

        <div className="border-t border-[var(--border-subtle)] px-4 py-3 font-mono text-[11px] text-[var(--fg-tertiary)]">
          ↑↓ navigate · ↵ open · esc close
        </div>
      </div>
    </div>
  );
}
