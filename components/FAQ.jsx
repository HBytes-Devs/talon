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
    <section id="faq" className="scroll-anchor section-pad faq-section">
      <div className="container-grid grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-reveal="true">
          <span className="pill">Help panel</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            Straight answers before you start.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            Clear answers on access, pricing, privacy & workflow. Simple & easy to understand.
          </p>
          <div className="faq-shortcuts mt-8">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                className={tab === t ? "is-active" : ""}
                onClick={() => {
                  setTab(t);
                  setOpen(0);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-console magnetic-panel p-3" data-reveal="true" data-reveal-delay="0.12">
          <div className="faq-console-head">
            <div className="flex items-center gap-2">
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
                className="size-4 text-[var(--fg-accent)]"
                aria-hidden="true"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <strong>Talon Help</strong>
            </div>
            <span className="kbd">esc</span>
          </div>
          <div className="mt-2 grid gap-2">
            {items.map((item, i) => (
              <div
                key={item.q}
                className="faq-item rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)]"
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-3 px-4 py-4 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-mono text-xs text-[var(--fg-tertiary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-normal">{item.q}</span>
                  <span className="text-[var(--fg-tertiary)]">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <p className="px-4 pb-4 pl-12 text-base leading-7 text-[var(--fg-secondary)]">
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
