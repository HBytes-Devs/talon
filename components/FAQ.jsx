"use client";

import { useState } from "react";

const TABS = ["Access", "Pricing", "Privacy", "Workflow"];

const FAQS = [
  {
    tab: "Access",
    q: "How do we get started?",
    a: "Register a free account, add up to 3 users, and install the client app on work devices. Employees click Start at the beginning of the workday.",
  },
  {
    tab: "Pricing",
    q: "Is there a free plan?",
    a: "Yes. 3 users free forever. Premium is $3.99 / user / month from the 4th user onwards, with a 10% yearly discount.",
  },
  {
    tab: "Pricing",
    q: "What is the Business plan?",
    a: "Business is $9.99 / user / month with a 25-user minimum. Volume licenses start at 100+. Enterprise can run on-premise.",
  },
  {
    tab: "Access",
    q: "Which devices are supported?",
    a: "Windows 10 & 11, Mac ARM and Intel, plus mobile apps for field teams. Hardware: 4GB RAM and min. i3 5th Gen.",
  },
  {
    tab: "Privacy",
    q: "Is tracking intrusive?",
    a: "No. Tracking is non-intrusive. Screenshots can be blurred. Talon does not record keystrokes, microphones, or other invasive inputs.",
  },
  {
    tab: "Privacy",
    q: "Where is company data stored?",
    a: "You can store company data at your location. Data is encrypted with ECC, transmitted over HTTPS, and screenshots that are analysed are blurred for IP protection.",
  },
  {
    tab: "Workflow",
    q: "Does Talon classify productive vs distraction?",
    a: "Yes. Each company has its own productive tasks. Our ML system learns from your company and ranks / classifies activity over time.",
  },
  {
    tab: "Workflow",
    q: "Can we bill clients from tracked time?",
    a: "Yes. Add clients, projects and tasks. Time logs automatically. Pay rates and invoice rates turn tracked hours into ready-to-send invoices.",
  },
];

export default function FAQ() {
  const [tab, setTab] = useState("Access");
  const [open, setOpen] = useState(0);
  const items = FAQS.filter((f) => f.tab === tab);

  return (
    <section id="faq" className="section">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div data-reveal="true">
          <span className="pill">Why Talon?</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            Straight answers before you start.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            Clear answers on access, pricing, privacy & workflow. Simple & easy to understand.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setOpen(0);
                }}
                className={`rounded-[8px] border px-3 py-2 text-sm font-semibold transition ${
                  tab === t
                    ? "border-[var(--pill-border)] bg-[var(--pill-bg)] text-[var(--pill-fg)]"
                    : "border-[var(--border-subtle)] bg-[var(--surface-2)] text-[var(--fg-secondary)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="magnetic-panel overflow-hidden p-0" data-reveal="true" data-reveal-delay="0.1">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3">
            <strong>Talon Help</strong>
            <span className="kbd-chip">esc</span>
          </div>
          <div>
            {items.map((item, i) => (
              <div key={item.q} className="border-b border-[var(--border-subtle)]">
                <button
                  type="button"
                  className="flex w-full items-start gap-3 px-4 py-4 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-mono text-xs text-[var(--fg-tertiary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-semibold">{item.q}</span>
                  <span className="text-[var(--fg-tertiary)]">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <p className="px-4 pb-4 pl-12 text-sm leading-7 text-[var(--fg-secondary)]">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
