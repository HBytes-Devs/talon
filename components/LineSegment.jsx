"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SCROLL = {
  workflow: { start: "top 78%", end: "bottom 42%" },
  features: { start: "top 82%", end: "bottom 42%" },
  packet: { start: "top 88%", end: "bottom 55%" },
};

/** Soft ribbon: vertical spans stay straight; only bends when x must change. */
function ribbonPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    if (Math.abs(dx) < 6) {
      d += ` L ${b.x} ${b.y}`;
      continue;
    }
    // Bend late: stay on a.x most of the way, then ease into b.x (no lightning-bolt kink).
    const pull = Math.abs(dy) * 0.55;
    const sy = Math.sign(dy) || 1;
    d += ` C ${a.x} ${a.y + sy * pull} ${b.x} ${b.y - sy * pull} ${b.x} ${b.y}`;
  }
  return d;
}

function clampX(points, w, pad = 24) {
  const min = pad;
  const max = Math.max(pad + 1, w - pad);
  return points.map((p) => ({
    x: Math.min(max, Math.max(min, p.x)),
    y: p.y,
  }));
}

function centerIn(el, sectionRect) {
  const r = el.getBoundingClientRect();
  return {
    x: r.left - sectionRect.left + r.width / 2,
    y: r.top - sectionRect.top + r.height / 2,
  };
}

function runnerExit(section, sectionRect, fallbackX) {
  const runner =
    section.querySelector(".workflow-runner") ||
    document.querySelector(".workflow-section .workflow-runner");
  if (!runner) return { x: fallbackX, y: sectionRect.height - 24 };
  const r = runner.getBoundingClientRect();
  return {
    x: r.left - sectionRect.left + r.width / 2,
    y: r.bottom - sectionRect.top,
  };
}

function seamXFromRunner(sectionRect, fallbackX) {
  const runner = document.querySelector(".workflow-section .workflow-runner");
  if (!runner) return fallbackX;
  const r = runner.getBoundingClientRect();
  return r.left - sectionRect.left + r.width / 2;
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

          const fallbackSeam = 0.62 * w;
          const seamX = seamXFromRunner(rect, fallbackSeam);
          const SEAM = 64; // overlap so adjacent SVGs meet as one continuous stroke
          let pts = [];
          if (variant === "workflow") {
            const markers = Array.from(section.querySelectorAll(".workflow-step-marker"));
            if (!markers.length) return;
            const exit = runnerExit(section, rect, seamX);
            pts = [
              { x: 0.14 * w, y: 0 },
              ...markers.map((m) => centerIn(m, rect)),
              { x: exit.x, y: Math.max(exit.y - 100, exit.y * 0.55) },
              { x: exit.x, y: exit.y },
              { x: exit.x, y: h + SEAM },
            ];
          } else if (variant === "features") {
            const articles = Array.from(section.querySelectorAll(".feature-article"));
            if (!articles.length) return;
            pts = [{ x: seamX, y: -SEAM }];
            articles.forEach((article, i) => {
              pts.push({
                x: 0.5 * w + (i % 2 === 0 ? 1 : -1) * 0.08 * w,
                y: centerIn(article, rect).y,
              });
            });
            // Finish with a straight vertical drop so the packet segment can meet cleanly.
            pts.push({ x: seamX, y: Math.max(h - 96, h * 0.72) });
            pts.push({ x: seamX, y: h + SEAM });
          } else {
            const source = section.querySelector(".packet-source");
            if (!source) return;
            const s = centerIn(source, rect);
            // Enter on the same vertical as features exit, then ease toward the card.
            pts = [
              { x: seamX, y: -SEAM },
              { x: seamX, y: Math.min(s.y - 24, Math.max(120, h * 0.22)) },
              { x: s.x, y: Math.max(s.y - 12, Math.min(s.y, h * 0.35)) },
              s,
            ];
          }

          const d = ribbonPath(clampX(pts, w));
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
      overflow="visible"
      aria-hidden="true"
      focusable="false"
    />
  );
}
