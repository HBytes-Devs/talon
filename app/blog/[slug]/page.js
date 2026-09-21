import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/SiteShell";
import { POSTS, getPost } from "../../../lib/content";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog - HawkLens" };
  return {
    title: `${post.title} - HawkLens`,
    description: post.blurb,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <main id="top" className="section pt-32">
        <article className="container max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--fg-tertiary)]">
            <span className="pill">{post.tag}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>
          <h1 className="display-type mt-5 text-balance text-4xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{post.blurb}</p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="display-type text-2xl font-bold">{section.heading}</h2>
                )}
                {section.body.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className={`text-[17px] leading-8 text-[var(--fg-secondary)] ${
                      section.heading ? "mt-4" : "mt-4 first:mt-0"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <div className="container mt-16 max-w-2xl">
          <div className="magnetic-panel p-6 md:p-8">
            <p className="font-semibold">HawkLens</p>
            <h2 className="display-type mt-3 text-3xl font-bold">Win back productivity & profits affected by distractions.</h2>
            <p className="mt-3 text-[var(--fg-secondary)] leading-7">
              HawkLens is ML-based employee productivity & time tracking by HawkBytes. 3 users free
              forever. Simple, non-intrusive & easy to use.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#beta" className="btn btn-primary">
              Start free
              </Link>
              <Link href="/" className="btn btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
