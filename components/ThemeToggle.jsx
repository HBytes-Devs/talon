"use client";

import { useLayoutEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";

const STORAGE_KEY = "hawklens-theme";

function readTheme() {
  if (typeof document !== "undefined") {
    if (document.documentElement.classList.contains("dark")) return "dark";
    if (document.documentElement.getAttribute("data-theme") === "dark") return "dark";
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme) {
  const root = document.documentElement;
  const dark = theme === "dark";
  root.classList.add("theme-switching");
  root.classList.toggle("dark", dark);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  // Drop the lock on the next frame so hover/focus transitions still work after
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
}

export default function ThemeToggle({ className = "" }) {
  const { t } = useLocale();
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    const initial = readTheme();
    applyTheme(initial);
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      aria-label={theme === "dark" ? t.themeLight : t.themeDark}
      title={theme === "dark" ? t.themeLight : t.themeDark}
      onClick={toggle}
      suppressHydrationWarning
    >
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
}
