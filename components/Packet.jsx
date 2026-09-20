"use client";

import { useEffect, useRef } from "react";
import LineSegment from "./LineSegment";
import { bindPointerTilt } from "../lib/pointerTilt";
import { useLocale } from "./LocaleProvider";

function PacketIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "activity") {
    return (
      <svg {...common}>
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
    );
  }

  if (name === "brain") {
    return (
      <svg {...common}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.337 7.5a3 3 0 0 0-.278 1.532" />
        <path d="M20.941 9.032A3 3 0 0 0 20.663 7.5" />
        <path d="M6 18a3 3 0 0 1-3-3" />
        <path d="M21 15a3 3 0 0 1-3 3" />
        <path d="M12 18v4" />
        <path d="M12 13v2" />
        <circle cx="12" cy="7" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M15 3h6v6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const CARD_ICONS = ["brain", "chart", "users"];

export default function Packet() {
  const stageRef = useRef(null);
  const { locale, t } = useLocale();
  const pk = t.packet;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cleanups = Array.from(stage.querySelectorAll(".packet-tilt-card")).map((el) =>
      bindPointerTilt(el, {
        maxDeg: 5,
        liftPx: el.classList.contains("packet-source") ? 8 : 7,
        premium: el.classList.contains("packet-source"),
      })
    );
    return () => cleanups.forEach((fn) => fn());
  }, [locale, pk.cards]);

  return (
    <section className="packet-split-section line-host scroll-anchor section-pad">
      <LineSegment variant="packet" />
      <div className="container-grid">
        <div className="max-w-3xl" data-reveal="true">
          <span className="pill">{pk.pill}</span>
          <h2 className="display-type mt-5 max-w-2xl text-balance text-4xl font-bold md:text-6xl">
            {pk.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--fg-secondary)]">{pk.body}</p>
        </div>

        <div
          ref={stageRef}
          className="packet-split-stage mt-10"
          aria-label="Prompt packet split"
          data-reveal="true"
          data-reveal-delay="0.12"
        >
          <div className="packet-source packet-tilt-card">
            <div className="packet-source-head">
              <span className="packet-tilt-title">{pk.sourceTitle}</span>
              <span className="packet-card-icon packet-tilt-icon" aria-hidden="true">
                <PacketIcon name="activity" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--fg-secondary)] packet-tilt-body">
              {pk.sourceBody}
            </p>
            <div className="packet-source-preview mt-4">
              <span className="packet-line w-[92%]" />
              <span className="packet-line w-[78%]" />
              <span className="packet-line w-[86%]" />
              <span className="packet-line w-[64%]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[var(--fg-tertiary)] packet-tilt-meta">
              <span>{pk.present}</span>
              <span>{pk.idle}</span>
              <span>{pk.mlTags}</span>
            </div>
          </div>

          <div className="packet-card-grid">
            {pk.cards.map((card, i) => (
              <div key={`${locale}-${CARD_ICONS[i]}`} className="packet-feature-card packet-tilt-card">
                <span className="packet-card-icon packet-tilt-icon" aria-hidden="true">
                  <PacketIcon name={CARD_ICONS[i]} />
                </span>
                <h3 className="mt-4 text-xl font-bold packet-tilt-title">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-secondary)] packet-tilt-body">
                  {card.body}
                </p>
                <span className="inline-flex rounded-[8px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] packet-tilt-meta">
                  {card.chip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
