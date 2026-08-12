"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#product", label: "Features" },
  { href: "/#workflow", label: "How it works" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header({ onOpenCommand }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-nav-shell pointer-events-none fixed left-1/2 z-40 w-[calc(100vw-32px)] -translate-x-1/2 ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav
        data-command-pill="true"
        className="pointer-events-auto mx-auto flex w-full max-w-full items-center gap-1 rounded-[12px] border border-[var(--border-glass)] bg-[var(--surface-strong)] px-2 py-2 shadow-[0_24px_60px_-42px_rgba(37,50,72,.72),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl lg:w-fit"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-[10px] px-2.5 py-1.5"
        >
          <Image
            src="/linea/linea-app-icon-64.png"
            alt="Talon"
            width={26}
            height={26}
            className="rounded-[7px]"
            priority
          />
          <span className="hidden font-semibold tracking-tight text-[var(--fg-primary)] sm:inline">
            Talon
          </span>
        </Link>

        <div className="mx-1 hidden h-5 w-px bg-[var(--border-subtle)] lg:block" />

        <div className="hidden items-center gap-0.5 lg:flex">
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
                className={`nav-link rounded-[8px] px-2.5 py-1.5 text-[13px] ${
                  active ? "bg-[var(--surface-2)] text-[var(--fg-primary)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-1.5 pl-1 lg:ml-1">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden items-center gap-1.5 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2.5 py-1.5 text-xs font-medium text-[var(--fg-secondary)] hover:bg-[var(--surface-hover)] sm:inline-flex"
            aria-label="Open command palette"
          >
            <span className="kbd-chip">⌘</span>
            <span className="kbd-chip">K</span>
          </button>
          <Link href="/#beta" className="btn btn-primary px-3 py-1.5 text-[13px]">
            Start free
          </Link>
        </div>
      </nav>
    </header>
  );
}
