"use client";

import Link from "next/link";
import CommandAtlas from "./CommandAtlas";
import UseCaseIndexCards from "./UseCaseIndexCards";
import { USE_CASES } from "../lib/content";
import { useLocale } from "./LocaleProvider";

export default function UseCasesIndexView() {
  const { t } = useLocale();
  const p = t.pages.useCases;

  return (
    <main id="main-content" className="use-case-page">
      <section className="container-grid use-case-index-hero">
        <div className="use-case-index-copy min-w-0">
          <span className="pill">{p.pill}</span>
          <h1 className="display-type use-case-index-title mt-6 text-balance font-extrabold text-[var(--fg-primary)]">
            {p.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-secondary)] sm:text-lg sm:leading-8">
            {p.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="inline-flex h-14 items-center justify-center rounded-[8px] border border-black/10 bg-[linear-gradient(#2bb89a,#16a085)] px-5 text-sm font-semibold text-white shadow-[0_18px_34px_-24px_rgba(22,160,133,.9),inset_0_1px_0_rgba(255,255,255,.2)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              {p.cta}
            </Link>
            <Link
              href="/"
              className="inline-flex h-14 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-5 text-sm font-semibold text-[var(--fg-primary)] shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
            >
              {p.backHome}
            </Link>
          </div>
        </div>

        <div className="use-case-index-visual min-w-0">
          <CommandAtlas items={USE_CASES} />
        </div>
      </section>

      <UseCaseIndexCards items={USE_CASES} />
    </main>
  );
}
