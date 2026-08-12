import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import { POSTS } from "../../lib/content";

export const metadata = {
  title: "Blog - Talon",
  description: "Productivity notes: win back time, reduce distractions & track work without losing yours.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <main id="top" className="section pt-32">
        <div className="container max-w-3xl">
          <span className="pill">Blog</span>
          <h1 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            Win back productivity & profits.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">
            How Talon helps businesses track time, cut distractions & keep monitoring non-intrusive.
          </p>
        </div>

        <div className="container mt-12 grid max-w-3xl gap-5">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="magnetic-panel block p-6 transition hover:-translate-y-0.5"
              data-reveal="true"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--fg-tertiary)]">
                <span className="pill">{post.tag}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.read}</span>
              </div>
              <h2 className="display-type mt-4 text-2xl font-bold md:text-3xl">{post.title}</h2>
              <p className="mt-3 text-[var(--fg-secondary)] leading-7">{post.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="container mt-12 flex flex-wrap gap-3 pb-8">
          <Link href="/#beta" className="btn btn-primary">
              Start free
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back to homepage
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
