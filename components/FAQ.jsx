"use client";

import { useState } from "react";
import { useLocale } from "./LocaleProvider";

const TAB_KEYS = ["access", "pricing", "privacy", "workflow"];

export default function FAQ() {
  const { t } = useLocale();
  const f = t.faq;
  const [tabKey, setTabKey] = useState("access");
  const [open, setOpen] = useState(0);
  const items = f.items.filter((item) => item.tabKey === tabKey);

  return (
    <section id="faq" className="scroll-anchor section-pad faq-section">
      <div className="container-grid grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-reveal="true">
          <span className="pill">{f.pill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            {f.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{f.body}</p>
          <div className="faq-shortcuts mt-8">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                className={tabKey === key ? "is-active" : ""}
                onClick={() => {
                  setTabKey(key);
                  setOpen(0);
                }}
              >
                {f.tabs[key]}
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
              <strong>{f.helpTitle}</strong>
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
