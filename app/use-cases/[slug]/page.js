import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/SiteShell";
import { USE_CASES, getUseCase } from "../../../lib/content";

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) return { title: "Use Cases - Talon" };
  return {
    title: `${item.keyword.replace(/\b\w/g, (c) => c.toUpperCase())} - Talon`,
    description: item.summary,
  };
}

export default async function UseCasePage({ params }) {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) notFound();
  const related = USE_CASES.filter((u) => u.slug !== item.slug);

  return (
    <SiteShell>
      <main id="top" className="section pt-32">
        <div className="container max-w-3xl">
          <span className="pill">{item.pill}</span>
          <h1 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{item.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#beta" className="btn btn-primary">
              Start free
            </Link>
            <Link href="/#workflow" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-[var(--fg-tertiary)]">
            Free for 3 users forever. Premium from $3.99 / user / month. Simple & easy to use.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-[9px] border border-[var(--border-subtle)] bg-[var(--surface-3)] px-3 py-2 text-xs font-medium text-[var(--fg-secondary)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="container mt-12 grid items-start gap-8 lg:grid-cols-2">
          <UseCaseDemo item={item} />
          <div className="grid gap-4">
            <div className="frost-panel p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
                Without Talon
              </p>
              <p className="mt-3 leading-7 text-[var(--fg-secondary)]">{item.without}</p>
            </div>
            <div className="magnetic-panel p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--pill-fg)]">
                With Talon
              </p>
              <p className="mt-3 leading-7 text-[var(--fg-secondary)]">{item.with}</p>
            </div>
          </div>
        </div>

        <div className="container mt-16">
          <span className="pill">See it in action</span>
          <h2 className="display-type mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Simple & easy to use — from live status to reports.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fg-secondary)] leading-7">
            See the workday in one place. The demo uses sample team data: live status, idle time,
            meetings, breaks & client hours.
          </p>
          <div className="magnetic-panel mt-8 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold">Investor Update Partner Draft</h3>
                <p className="mt-1 text-xs text-[var(--fg-tertiary)]">fundraise · board · memo</p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-[8px] border border-[var(--border-subtle)] px-2.5 py-1 text-xs font-semibold">
                  Edit
                </span>
                <span className="rounded-[8px] bg-[var(--ink-950)] px-2.5 py-1 text-xs font-semibold text-white">
                  Inject
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--fg-secondary)]">
              Context · Northstar Series A Board Pack
            </p>
            <p className="mt-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-4 text-sm leading-6">
              Draft the investor update. Separate shipped facts, open risks, and asks. Use the
              attached runway model and customer call notes.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              {[
                ["audience", "seed investors"],
                ["tone", "calm, direct"],
                ["window", "May board packet"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-[10px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-3 py-2">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                    {k}
                  </span>
                  {v}
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-[var(--fg-tertiary)]">
              Time Machine · v18 of 21 · Auto-save enabled
            </p>
          </div>
        </div>

        <div className="container mt-16 grid gap-10 md:grid-cols-2">
          {item.blocks.map((block) => (
            <div key={block.heading}>
              <span className="pill">{block.kicker}</span>
              <h2 className="display-type mt-4 text-2xl font-bold md:text-3xl">{block.heading}</h2>
              <ul className="mt-5 space-y-3 text-[var(--fg-secondary)]">
                {block.items.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--indigo-500)]" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container mt-16">
          <span className="pill">How it works</span>
          <h2 className="display-type mt-4 text-3xl font-bold">Summon, search, fill & inject.</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {item.loop.map((step, i) => (
              <div key={step} className="frost-panel p-4">
                <span className="font-mono text-xs text-[var(--pill-fg)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-6 text-[var(--fg-secondary)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-16 max-w-3xl">
          <span className="pill">FAQ</span>
          <h2 className="display-type mt-4 text-3xl font-bold">Straight answers before you join.</h2>
          <div className="mt-6 divide-y divide-[var(--border-subtle)] overflow-hidden rounded-[14px] border border-[var(--border-subtle)]">
            {item.faqs.map((faq) => (
              <div key={faq.q} className="bg-[var(--surface-1)] px-5 py-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--fg-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
            Related use cases
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/use-cases/${rel.slug}`}
                className="frost-panel block p-5 transition hover:-translate-y-0.5"
              >
                <span className="pill">{rel.cardTitle}</span>
                <h3 className="mt-3 font-bold">{rel.keyword}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)]">{rel.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="container mt-16 pb-8">
          <div className="magnetic-panel p-8">
            <h2 className="display-type text-3xl font-bold md:text-4xl">3 users free forever!</h2>
            <p className="mt-4 max-w-2xl text-[var(--fg-secondary)] leading-7">
              Start tracking productivity today. No credit card. Windows, Mac & mobile.
            </p>
            <Link href="/#beta" className="btn btn-primary mt-6">
              Start free
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

function UseCaseDemo({ item }) {
  const demo = item.demo;
  return (
    <div className="magnetic-panel p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-bold">{demo.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-[var(--fg-tertiary)]">{demo.meta}</p>
        </div>
        <span className="rounded-[8px] bg-[var(--ink-950)] px-2.5 py-1 text-xs font-semibold text-white">
          Live
        </span>
      </div>

      {demo.blueprint && (
        <>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
            Blueprint
          </p>
          <p className="mt-2 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-3 font-mono text-xs leading-6 text-[var(--fg-secondary)]">
            {demo.blueprint}
          </p>
        </>
      )}
      {demo.rendered && (
        <>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
            Rendered prompt
          </p>
          <p className="mt-2 rounded-[12px] border border-[var(--pill-border)] bg-[var(--pill-bg)] p-3 text-sm leading-6">
            {demo.rendered}
          </p>
        </>
      )}
      {demo.diffs && (
        <div className="mt-4 space-y-1.5 font-mono text-sm">
          {demo.diffs.map((d) => (
            <p
              key={d.text}
              className={d.type === "plus" ? "text-[var(--fg-success)]" : "text-[var(--fg-danger)]"}
            >
              {d.type === "plus" ? "+" : "−"} {d.text}
            </p>
          ))}
        </div>
      )}
      {demo.rows && (
        <div className="mt-4 space-y-2">
          {demo.rows.map((row, i) => (
            <div
              key={row.title}
              className={`flex items-center justify-between rounded-[10px] border px-3 py-2.5 text-sm ${
                i === 0
                  ? "border-[var(--pill-border)] bg-[var(--pill-bg)]"
                  : "border-[var(--border-subtle)] bg-[var(--surface-2)]"
              }`}
            >
              <span className="font-medium">{row.title}</span>
              <span className="font-mono text-[11px] text-[var(--fg-tertiary)]">
                {row.tag ? `${row.tag} · ${row.extra}` : row.extra}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
