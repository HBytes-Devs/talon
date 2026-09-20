"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { bindPointerTilt } from "../lib/pointerTilt";

export default function UseCaseIndexCards({ items }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cleanups = Array.from(grid.querySelectorAll(".use-case-index-card")).map((el) =>
      bindPointerTilt(el, { maxDeg: 3.5, liftPx: 5, premium: false })
    );
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={gridRef} className="container use-case-index-grid" data-reveal-stagger="true">
      {items.map((item) => (
        <Link key={item.slug} href={`/use-cases/${item.slug}`} className="use-case-index-card">
          <span className="use-case-index-number">{item.n}</span>
          <span className="pill">{item.cardTitle}</span>
          <h2>{item.keyword}</h2>
          <p>{item.summary}</p>
          <em>
            Open page
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </em>
        </Link>
      ))}
    </section>
  );
}
