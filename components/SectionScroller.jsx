"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sectionIdFromPath, scrollToSectionId } from "../lib/sections";

/**
 * When the URL is a clean section path (/pricing, /faq, …),
 * scroll to that homepage block without using a hash.
 */
export default function SectionScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const id = sectionIdFromPath(pathname);
    if (!id) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduce ? "auto" : "smooth";

    let tries = 0;
    const run = () => {
      tries += 1;
      const ok = scrollToSectionId(id, { behavior: tries === 1 ? behavior : "auto" });
      if (!ok && tries < 12) {
        window.setTimeout(run, 50);
      }
    };

    const raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
