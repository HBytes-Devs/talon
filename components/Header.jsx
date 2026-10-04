"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND } from "../lib/brand";
import LogoMark from "./LogoMark";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLocale } from "./LocaleProvider";

const NAV = [
  { href: "/#product", key: "features" },
  { href: "/#workflow", key: "workflow" },
  { href: "/use-cases", key: "useCases" },
  { href: "/#pricing", key: "pricing" },
  { href: "/blog", key: "blog" },
  { href: "/#faq", key: "faq" },
];

const NAV_GLYPHS = {
  features: (
    <>
      <rect x="1.5" y="1.5" width="5.4" height="5.4" rx="1.5" />
      <rect x="9.1" y="1.5" width="5.4" height="5.4" rx="1.5" />
      <rect x="1.5" y="9.1" width="5.4" height="5.4" rx="1.5" />
      <rect x="9.1" y="9.1" width="5.4" height="5.4" rx="1.5" />
    </>
  ),
  workflow: (
    <>
      <circle cx="3.4" cy="3.2" r="1.55" />
      <circle cx="3.4" cy="8" r="1.55" />
      <circle cx="3.4" cy="12.8" r="1.55" />
      <rect x="6.6" y="2.45" width="7.6" height="1.5" rx="0.75" />
      <rect x="6.6" y="7.25" width="7.6" height="1.5" rx="0.75" />
      <rect x="6.6" y="12.05" width="5.4" height="1.5" rx="0.75" />
    </>
  ),
  useCases: (
    <path
      fillRule="evenodd"
      d="M8 1.6a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm-4.7 8.2A2.6 2.6 0 0 0 .8 12.4v1.7c0 .5.4.9.9.9h12.6c.5 0 .9-.4.9-.9v-1.7a2.6 2.6 0 0 0-2.5-2.6H3.3Z"
    />
  ),
  pricing: (
    <path
      fillRule="evenodd"
      d="M8.15 1.7 2.2 7.65a1.35 1.35 0 0 0 0 1.9l4.25 4.25a1.35 1.35 0 0 0 1.9 0l5.95-5.95V1.7H8.15Zm4.15 2.55a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
    />
  ),
  blog: (
    <path
      fillRule="evenodd"
      d="M3.1 1.8h6.3L13.9 6.3v7.5a1.4 1.4 0 0 1-1.4 1.4H3.1a1.4 1.4 0 0 1-1.4-1.4V3.2a1.4 1.4 0 0 1 1.4-1.4Zm6 1.3v3.3h3.3L9.1 3.1ZM4.2 8.3h5.2a.7.7 0 0 1 0 1.4H4.2a.7.7 0 0 1 0-1.4Zm0 2.6h3.6a.7.7 0 0 1 0 1.4H4.2a.7.7 0 1 1 0-1.4Z"
    />
  ),
  faq: (
    <path
      fillRule="evenodd"
      d="M8 1.4a6.6 6.6 0 1 0 0 13.2A6.6 6.6 0 0 0 8 1.4Zm0 2.15c-1.45 0-2.45.9-2.45 2.05 0 .4.34.7.75.7s.72-.3.72-.68c0-.38.35-.67.98-.67.6 0 .95.28.95.7 0 .38-.28.58-.9.9-.78.38-1.45.9-1.45 1.95v.25c0 .4.32.72.72.72s.73-.32.73-.72v-.12c0-.32.22-.5.78-.78.9-.45 1.55-1.12 1.55-2.2 0-1.35-1.15-2.4-2.68-2.4ZM8 10.55a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z"
    />
  ),
};

function NavIcon({ name }) {
  const glyph = NAV_GLYPHS[name];
  if (!glyph) return null;
  return (
    <span className="grid size-[18px] shrink-0 place-items-center rounded-[5px] bg-[var(--pill-bg)] text-[var(--fg-accent)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="size-[11px]"
        fill="currentColor"
        aria-hidden="true"
      >
        {glyph}
      </svg>
    </span>
  );
}

const linkClass =
  "group inline-flex items-center gap-1.5 rounded-[8px] px-2.5 py-2 text-base font-normal text-[var(--fg-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--fg-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-strong)]";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`site-nav-shell pointer-events-none fixed inset-x-0 z-40 mx-auto w-[min(1180px,calc(100%-40px))] max-w-[calc(100%-2rem)] ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav
        data-command-pill="true"
        className="pointer-events-auto mx-auto flex w-full max-w-full items-center gap-1 rounded-[12px] border border-[var(--border-glass)] bg-[var(--surface-strong)] px-2 py-2 shadow-[0_24px_60px_-42px_rgba(37,50,72,.72),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl"
      >
        <Link
          href="/"
          aria-label={BRAND.name}
          className="flex min-w-0 shrink-0 items-center gap-2 rounded-[8px] border-r border-[var(--border-subtle)] py-1 pl-2 pr-3 text-base font-normal text-[var(--fg-primary)] transition hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-strong)] navdesk:pr-4"
        >
          <LogoMark size={24} className="rounded-[6px]" />
          <span className="truncate">{BRAND.name}</span>
        </Link>

        <div data-nav-links="true" className="hidden items-center navdesk:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/blog"
                ? pathname.startsWith("/blog")
                : item.href === "/use-cases"
                  ? pathname.startsWith("/use-cases")
                  : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkClass} ${active ? "bg-[var(--surface-2)] text-[var(--fg-primary)]" : ""}`}
              >
                <NavIcon name={item.key} />
                {t.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 pl-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/#beta"
            className="btn btn-primary !hidden h-9 shrink-0 px-3 navdesk:!inline-flex"
          >
            {t.signIn}
          </Link>
          <button
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-[8px] text-[var(--fg-secondary)] transition hover:bg-[var(--bg-card)] hover:text-[var(--fg-primary)] navdesk:hidden"
            aria-label={t.openMenu}
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
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
              aria-hidden="true"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="mobile-nav-overlay pointer-events-auto"
            aria-label={t.closeMenu}
            onClick={() => setMenuOpen(false)}
          />
          <div className="mobile-nav-panel pointer-events-auto p-2" data-mobile-nav-links="true">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-base font-normal text-[var(--fg-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--fg-primary)]"
                onClick={() => setMenuOpen(false)}
              >
                <NavIcon name={item.key} />
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-1 flex items-center gap-2 border-t border-[var(--border-subtle)] p-2">
              <Link
                href="/#beta"
                className="btn btn-primary h-9 flex-1 px-3"
                onClick={() => setMenuOpen(false)}
              >
                {t.signIn}
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
