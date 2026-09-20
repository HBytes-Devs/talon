"use client";

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { STORAGE_LOCALE, applyLocale, getLocaleMeta, messages } from "../lib/i18n";

const LocaleContext = createContext({
  locale: "en",
  t: messages.en,
  setLocale: () => {},
});

function readInitialLocale() {
  let initial = "en";
  try {
    const saved = localStorage.getItem(STORAGE_LOCALE);
    if (saved && messages[saved]) initial = saved;
    else if (saved === "ur") {
      localStorage.setItem(STORAGE_LOCALE, "en");
    }
  } catch {
    /* ignore */
  }
  return initial;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useLayoutEffect(() => {
    const initial = readInitialLocale();
    applyLocale(initial);
    setLocaleState(initial);
  }, []);

  const setLocale = useCallback((code) => {
    if (!messages[code]) return;
    const root = document.documentElement;
    root.classList.add("locale-switching");
    applyLocale(code);
    setLocaleState(code);
    requestAnimationFrame(() => {
      root.classList.remove("locale-switching");
    });
  }, []);

  const value = useMemo(
    () => ({
      locale,
      meta: getLocaleMeta(locale),
      t: messages[locale] || messages.en,
      setLocale,
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
