"use client";

import LineSegment from "./LineSegment";
import { useLocale } from "./LocaleProvider";

export default function Workflow() {
  const { t } = useLocale();
  const w = t.workflow;
  const steps = w.steps.map((step, i) => ({
    ...step,
    n: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section
      id="workflow"
      className="workflow-section line-host scroll-anchor section-pad border-y border-[var(--border-subtle)]"
    >
      <LineSegment variant="workflow" />
      <div className="container-grid grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="max-w-xl" data-reveal="true">
          <span className="pill">{w.pill}</span>
          <h2 className="display-type mt-5 text-balance text-4xl font-bold md:text-6xl">
            {w.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--fg-secondary)]">{w.body}</p>
        </div>

        <div className="workflow-runner frost-panel p-3" data-reveal="true" data-reveal-delay="0.12">
          <div className="workflow-runner-head">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-tertiary)]">
                {w.liveTracking}
              </span>
              <h3 className="mt-1 text-lg font-bold">{w.teamDash}</h3>
              <p className="mt-1 text-sm text-[var(--fg-secondary)]">{w.presentIdle}</p>
            </div>
            <span className="rounded-full border border-[var(--border-success)] bg-[var(--surface-success)] px-2.5 py-1 text-[11px] font-semibold text-[var(--fg-success)]">
              {w.live}
            </span>
          </div>

          <div className="workflow-lane" data-reveal-stagger="true">
            {steps.map((step) => (
              <div key={step.n} className="workflow-step">
                <div className="workflow-step-marker">
                  <span>{step.n}</span>
                </div>
                <div className="workflow-step-body">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-6 text-[var(--fg-secondary)]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
              {w.snapshotLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--fg-primary)]">{w.snapshotBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
