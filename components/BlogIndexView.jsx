"use client";

import Link from "next/link";
import { POSTS } from "../lib/content";
import { useLocale } from "./LocaleProvider";

export default function BlogIndexView() {
  const { t } = useLocale();
  const p = t.pages.blog;

  return (
    <main id="top" className="section pt-32">
      <div className="container max-w-3xl">
        <span className="pill">{p.pill}</span>
        <h1 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">{p.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{p.body}</p>
      </div>

      <div className="container mt-12 grid max-w-3xl gap-5">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="magnetic-panel block p-6 transition hover:-translate-y-0.5"
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
        <Link href="/start" className="btn btn-primary">
          {p.startFree}
        </Link>
        <Link href="/" className="btn btn-secondary">
          {p.backHome}
        </Link>
      </div>
    </main>
  );
}
