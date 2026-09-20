"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

const linkClass =
  "rounded-[8px] px-3 py-2 text-base font-normal text-[var(--fg-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--fg-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-strong)]";

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
      className={`site-nav-shell pointer-events-none fixed inset-x-4 z-40 w-auto max-w-[calc(100%-2rem)] ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav
        data-command-pill="true"
        className="pointer-events-auto mx-auto flex w-full max-w-full items-center gap-1 rounded-[12px] border border-[var(--border-glass)] bg-[var(--surface-strong)] px-2 py-2 shadow-[0_24px_60px_-42px_rgba(37,50,72,.72),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl navdesk:w-fit"
      >
        <Link
          href="/"
          aria-label="Talon"
          className="flex min-w-0 flex-1 items-center gap-2 rounded-[8px] border-r border-[var(--border-subtle)] py-1 pl-2 pr-3 text-base font-normal text-[var(--fg-primary)] transition hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-strong)] navdesk:shrink-0 navdesk:flex-none navdesk:pr-4"
        >
          <LogoMark size={24} className="rounded-[6px]" />
          <span className="truncate">Talon</span>
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
                {t.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#beta"
          className="btn btn-primary ml-1 !hidden h-9 shrink-0 px-3 navdesk:!inline-flex"
        >
          {t.signIn}
        </Link>
      </nav>

      <div className="header-utilities pointer-events-auto">
        <LanguageToggle />
        <ThemeToggle />
      </div>

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
                className="block rounded-[10px] px-3 py-2.5 text-base font-normal text-[var(--fg-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--fg-primary)]"
                onClick={() => setMenuOpen(false)}
              >
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
