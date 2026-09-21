"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { bindPointerTilt } from "../lib/pointerTilt";

export default function CommandAtlas({ items }) {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cleanups = [
      ...Array.from(stage.querySelectorAll(".atlas-node")).map((el) =>
        bindPointerTilt(el, { maxDeg: 4, liftPx: 6, premium: false })
      ),
      ...Array.from(stage.querySelectorAll(".atlas-core")).map((el) =>
        bindPointerTilt(el, { maxDeg: 4, liftPx: 7, premium: true })
      ),
    ];

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <figure
      ref={stageRef}
      className="command-atlas-stage"
      aria-label="HawkLens productivity atlas connecting five workforce workflows"
    >
      <div className="atlas-scan" aria-hidden="true" />
      <div className="atlas-core">
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
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/use-cases/${item.slug}`}
            className={`atlas-node atlas-node-${item.node}`}
          >
            <span>{item.n}</span>
            <strong>{item.keyword}</strong>
            <em>{item.atlas}</em>
          </Link>
        ))}
      </div>
    </figure>
  );
}
