"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SCROLL = {
  workflow: { start: "top 78%", end: "bottom 58%" },
  features: { start: "top 80%", end: "bottom 55%" },
  packet: { start: "top 72%", end: "bottom 60%" },
};

function catmullRomPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? points[i + 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

function centerIn(el, sectionRect) {
  const r = el.getBoundingClientRect();
  return {
    x: r.left - sectionRect.left + r.width / 2,
    y: r.top - sectionRect.top + r.height / 2,
  };
}

/** Emulate GSAP DrawSVGPlugin with stroke-dashoffset */
function setDrawProgress(path, progress) {
  const len = path.getTotalLength();
  path.style.strokeDasharray = `${len}`;
  path.style.strokeDashoffset = `${len * (1 - progress)}`;
}

/**
 * Scroll-scrubbed indigo thread — matches lineaprompt.com.
 * Draws on scroll down; reverses (removes) on scroll up via scrub.
 */
export default function LineSegment({ variant = "workflow" }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const svgRef = useRef(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const section = svg?.closest("section");
    if (!svg || !section) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        section.classList.add("line-active");
        const nodes = [];
        const tweens = [];
        const triggers = [];

        const makePath = (className) => {
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("class", className);
          svg.appendChild(path);
          nodes.push(path);
          return path;
        };

        const glow = makePath("line-thread-glow");
        const core = makePath("line-thread-core");
        const tip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        tip.setAttribute("class", "line-thread-tip");
        tip.setAttribute("r", "3.2");
        tip.style.opacity = "0";
        svg.appendChild(tip);
        nodes.push(tip);

        let total = 0;

        const layout = () => {
          const rect = section.getBoundingClientRect();
          const w = rect.width;
          const h = rect.height;
          svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

          let pts = [];
          if (variant === "workflow") {
            const markers = Array.from(section.querySelectorAll(".workflow-step-marker"));
            if (!markers.length) return;
            pts = [
              { x: 0.14 * w, y: 0 },
              ...markers.map((m) => centerIn(m, rect)),
              { x: 0.62 * w, y: h },
            ];
          } else if (variant === "features") {
            const articles = Array.from(section.querySelectorAll(".feature-article"));
            if (!articles.length) return;
            pts = [{ x: 0.62 * w, y: 0 }];
            articles.forEach((article, i) => {
              pts.push({
                x: 0.5 * w + (i % 2 === 0 ? 1 : -1) * 0.12 * w,
                y: centerIn(article, rect).y,
              });
            });
            pts.push({ x: 0.62 * w, y: h });
          } else {
            const source = section.querySelector(".packet-source");
            if (!source) return;
            const s = centerIn(source, rect);
            pts = [
              { x: 0.62 * w, y: 0 },
              { x: 0.62 * w, y: 40 },
              { x: s.x, y: Math.max(80, s.y - 48) },
              s,
            ];
          }

          const d = catmullRomPath(pts);
          glow.setAttribute("d", d);
          core.setAttribute("d", d);
          total = core.getTotalLength() || 1;
          setDrawProgress(glow, 0);
          setDrawProgress(core, 0);
        };

        layout();

        const state = { p: 0 };
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: SCROLL[variant].start,
            end: SCROLL[variant].end,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          state,
          {
            p: 1,
            duration: 1,
            onUpdate: () => {
              setDrawProgress(glow, state.p);
              setDrawProgress(core, state.p);
              if (!total) return;
              const pt = core.getPointAtLength(total * state.p);
              tip.setAttribute("cx", String(pt.x));
              tip.setAttribute("cy", String(pt.y));
              tip.style.opacity = state.p > 0.015 && state.p < 0.985 ? "1" : "0";
            },
          },
          0
        );

        tweens.push(tl);
        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);

        if (variant === "workflow") {
          section.querySelectorAll(".workflow-step-marker").forEach((marker) => {
            triggers.push(
              ScrollTrigger.create({
                trigger: marker,
                start: "top 62%",
                onEnter: () => marker.classList.add("line-lit"),
                onLeaveBack: () => marker.classList.remove("line-lit"),
              })
            );
          });
        }

        const onRefresh = () => layout();
        ScrollTrigger.addEventListener("refreshInit", onRefresh);
        // ensure after fonts/layout
        requestAnimationFrame(() => {
          layout();
          ScrollTrigger.refresh();
        });

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", onRefresh);
          triggers.forEach((t) => t.kill());
          tweens.forEach((t) => t.kill());
          nodes.forEach((n) => n.remove());
          section
            .querySelectorAll(".workflow-step-marker.line-lit")
            .forEach((el) => el.classList.remove("line-lit"));
          section.classList.remove("line-active");
        };
      }
    );

    return () => mm.revert();
  }, [variant]);

  return (
    <svg
      ref={svgRef}
      className="line-thread-svg"
      aria-hidden="true"
      focusable="false"
    />
  );
}
