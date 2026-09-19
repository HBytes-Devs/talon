"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DUR,
  REVEAL_DISTANCE,
  REVEAL_START,
  STAGGER,
} from "../lib/motion";

let registered = false;
let frostEase = "power2.out";
let settleEase = "power2.out";

async function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  try {
    const { CustomEase } = await import("gsap/CustomEase");
    gsap.registerPlugin(CustomEase);
    CustomEase.create("frost", "0.2, 0.72, 0.2, 1");
    CustomEase.create("frostSettle", "0.18, 0.72, 0.16, 1");
    frostEase = "frost";
    settleEase = "frostSettle";
  } catch {
    frostEase = "power2.out";
    settleEase = "power2.out";
  }
  registered = true;
}

function revealProps(type) {
  switch (type) {
    case "fade":
      return { autoAlpha: 0 };
    case "left":
      return { autoAlpha: 0, x: -REVEAL_DISTANCE };
    case "scale":
      return { autoAlpha: 0, scale: 0.96 };
    default:
      return { autoAlpha: 0, y: REVEAL_DISTANCE };
  }
}

function initReveals() {
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (el.dataset.revealInit) return;
    el.dataset.revealInit = "1";
    gsap.from(el, {
      ...revealProps(el.dataset.reveal || "up"),
      duration: DUR.reveal,
      ease: frostEase,
      delay: parseFloat(el.dataset.revealDelay || "0") || 0,
      clearProps: "transform",
      scrollTrigger: {
        trigger: el,
        start: REVEAL_START,
        once: true,
      },
    });
  });

  gsap.utils.toArray("[data-reveal-stagger]").forEach((el) => {
    if (el.dataset.revealInit || el.children.length === 0) return;
    el.dataset.revealInit = "1";
    gsap.from(el.children, {
      autoAlpha: 0,
      y: REVEAL_DISTANCE,
      duration: DUR.reveal,
      ease: frostEase,
      stagger: STAGGER.base,
      clearProps: "transform",
      scrollTrigger: {
        trigger: el,
        start: REVEAL_START,
        once: true,
      },
    });
  });
}

export function getMotionEases() {
  return { frostEase, settleEase };
}

export default function MotionProvider({ children }) {
  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      await registerGsap();
      if (cancelled) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        document.documentElement.classList.add("motion-on");

        const onAnchorClick = (e) => {
          if (e.defaultPrevented || e.button !== 0) return;
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          const a = e.target?.closest?.("a");
          if (!a || a.classList.contains("skip-link")) return;
          const url = new URL(a.href, window.location.href);
          if (
            url.origin !== window.location.origin ||
            url.pathname !== window.location.pathname ||
            !url.hash
          ) {
            return;
          }
          let target = null;
          try {
            target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
          } catch {
            target = null;
          }
          if (!target) return;
          e.preventDefault();
          history.pushState(null, "", url.hash);
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        document.addEventListener("click", onAnchorClick, true);
        requestAnimationFrame(() => initReveals());

        return () => {
          document.removeEventListener("click", onAnchorClick, true);
          document.documentElement.classList.remove("motion-on");
          ScrollTrigger.getAll().forEach((t) => t.kill());
          document.querySelectorAll("[data-reveal-init]").forEach((el) => {
            delete el.dataset.revealInit;
          });
          gsap.set("[data-reveal], [data-reveal-stagger] > *", {
            clearProps: "opacity,visibility,transform",
          });
        };
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return children;
}
