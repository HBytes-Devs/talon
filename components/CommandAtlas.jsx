"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { bindPointerTilt } from "../lib/pointerTilt";

const DRAG_THRESHOLD = 8;

export default function CommandAtlas({ items }) {
  const stageRef = useRef(null);
  const dragRef = useRef(null);
  const [dragPx, setDragPx] = useState(() =>
    Object.fromEntries(items.map((item) => [item.slug, { x: 0, y: 0 }]))
  );
  const [draggingSlug, setDraggingSlug] = useState(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cleanups = [
      ...Array.from(stage.querySelectorAll(".atlas-core")).map((el) =>
        bindPointerTilt(el, { maxDeg: 4, liftPx: 7, premium: true })
      ),
      ...Array.from(stage.querySelectorAll(".atlas-node")).map((el) =>
        bindPointerTilt(el, { maxDeg: 3.5, liftPx: 5, premium: false })
      ),
    ];

    return () => cleanups.forEach((fn) => fn());
  }, [items]);

  const onPointerDown = useCallback(
    (slug, event) => {
      if (window.matchMedia("(max-width: 640px)").matches) return;
      if (event.button != null && event.button !== 0) return;
      event.currentTarget.setPointerCapture?.(event.pointerId);
      const origin = dragPx[slug] || { x: 0, y: 0 };
      dragRef.current = {
        slug,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: origin.x,
        originY: origin.y,
        moved: false,
      };
      setDraggingSlug(slug);
    },
    [dragPx]
  );

  useEffect(() => {
    const onMove = (event) => {
      const drag = dragRef.current;
      if (!drag || event.pointerId !== drag.pointerId) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (Math.hypot(dx, dy) > DRAG_THRESHOLD) drag.moved = true;
      setDragPx((prev) => ({
        ...prev,
        [drag.slug]: { x: drag.originX + dx, y: drag.originY + dy },
      }));
    };

    const onUp = (event) => {
      const drag = dragRef.current;
      if (!drag || event.pointerId !== drag.pointerId) return;
      dragRef.current = { ...drag, ended: true };
      setDraggingSlug(null);
      window.setTimeout(() => {
        dragRef.current = null;
      }, 40);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <figure
      ref={stageRef}
      className={`command-atlas-stage ${draggingSlug ? "is-dragging" : ""}`}
      aria-label="HawkLens productivity atlas connecting five workforce workflows"
    >
      <div className="atlas-scan" aria-hidden="true" />
      <div className="atlas-core pointer-tilt">
        <span className="atlas-mark">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 0V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </span>
        <strong>HawkLens Productivity Atlas</strong>
        <p>Track, report, bill & protect.</p>
      </div>
      <div className="atlas-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="atlas-node-grid">
        {items.map((item, index) => {
          const offset = dragPx[item.slug] || { x: 0, y: 0 };
          const isDragging = draggingSlug === item.slug;
          return (
            <div
              key={item.slug}
              className={`atlas-slot atlas-node-${item.node} atlas-float-${index + 1} ${
                isDragging ? "is-dragging" : ""
              }`}
              style={{
                "--drag-x": `${offset.x}px`,
                "--drag-y": `${offset.y}px`,
              }}
              onPointerDown={(e) => onPointerDown(item.slug, e)}
            >
              <Link
                href={`/use-cases/${item.slug}`}
                className="atlas-node pointer-tilt"
                draggable={false}
                onClick={(e) => {
                  const drag = dragRef.current;
                  if (drag?.slug === item.slug && drag.moved) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <span>{item.n}</span>
                <strong>{item.keyword}</strong>
                <em>{item.atlas}</em>
              </Link>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
