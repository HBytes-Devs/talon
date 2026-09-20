import Link from "next/link";
import CommandAtlas from "../../components/CommandAtlas";
import SiteShell from "../../components/SiteShell";
import UseCaseIndexCards from "../../components/UseCaseIndexCards";
import { USE_CASES } from "../../lib/content";

export const metadata = {
  title: "Use Cases - Talon",
  description:
    "Learn how Talon improves productivity: live tracking, screenshots, idle time, attendance, location & invoicing.",
};

export default function UseCasesPage() {
  return (
    <SiteShell>
      <main id="main-content" className="use-case-page">
        <section className="container use-case-index-hero">
          <div>
            <span className="pill">Use cases</span>
            <h1 className="display-type mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] text-[var(--fg-primary)] sm:text-5xl md:text-7xl md:leading-[0.96]">
              Five ways Talon improves productivity in your business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--fg-secondary)] sm:text-lg sm:leading-8">
              Live tracking, screenshots, idle time, attendance, field location & task invoicing —
              automated, non-intrusive, and 3 users free forever.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#beta"
                className="inline-flex h-14 items-center justify-center rounded-[8px] border border-black/10 bg-[linear-gradient(#2bb89a,#16a085)] px-5 text-sm font-semibold text-white shadow-[0_18px_34px_-24px_rgba(22,160,133,.9),inset_0_1px_0_rgba(255,255,255,.2)] transition hover:-translate-y-0.5 hover:brightness-105"
              >
                3 users free forever!
              </Link>
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-5 text-sm font-semibold text-[var(--fg-primary)] shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
              >
                Back to homepage
              </Link>
            </div>
          </div>

          <CommandAtlas items={USE_CASES} />
        </section>

        <UseCaseIndexCards items={USE_CASES} />
      </main>
    </SiteShell>
  );
}
