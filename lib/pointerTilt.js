/**
 * Imperative pointer tilt — updates CSS vars via rAF (no React re-renders).
 * Desktop fine-pointer only; respects prefers-reduced-motion.
 */
export function bindPointerTilt(el, { maxDeg = 4, liftPx = 6, premium = false } = {}) {
  if (!el || typeof window === "undefined") return () => {};

  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const canTilt = () => fine.matches && !reduce.matches;

  if (!canTilt()) {
    el.classList.add("pointer-tilt-static");
    return () => el.classList.remove("pointer-tilt-static");
  }

  el.classList.add("pointer-tilt");
  if (premium) el.classList.add("pointer-tilt--premium");

  let raf = 0;
  const target = { rx: 0, ry: 0, px: 0, py: 0, sx: 50, sy: 50, lift: 0 };
  const current = { ...target };

  const apply = () => {
    el.style.setProperty("--rx", `${current.rx.toFixed(3)}deg`);
    el.style.setProperty("--ry", `${current.ry.toFixed(3)}deg`);
    el.style.setProperty("--px", `${current.px.toFixed(2)}px`);
    el.style.setProperty("--py", `${current.py.toFixed(2)}px`);
    el.style.setProperty("--spot-x", `${current.sx.toFixed(2)}%`);
    el.style.setProperty("--spot-y", `${current.sy.toFixed(2)}%`);
    el.style.setProperty("--lift", `${current.lift.toFixed(2)}px`);
    el.style.setProperty("--icon-scale", premium && current.lift < 0 ? "1.05" : "1");
  };

  const tick = () => {
    raf = 0;
    const ease = 0.16;
    current.rx += (target.rx - current.rx) * ease;
    current.ry += (target.ry - current.ry) * ease;
    current.px += (target.px - current.px) * ease;
    current.py += (target.py - current.py) * ease;
    current.sx += (target.sx - current.sx) * ease;
    current.sy += (target.sy - current.sy) * ease;
    current.lift += (target.lift - current.lift) * ease;
    apply();

    const drifting =
      Math.abs(target.rx - current.rx) > 0.01 ||
      Math.abs(target.ry - current.ry) > 0.01 ||
      Math.abs(target.px - current.px) > 0.05 ||
      Math.abs(target.py - current.py) > 0.05 ||
      Math.abs(target.lift - current.lift) > 0.05;

    if (drifting) raf = requestAnimationFrame(tick);
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  const reset = () => {
    target.rx = 0;
    target.ry = 0;
    target.px = 0;
    target.py = 0;
    target.sx = 50;
    target.sy = 50;
    target.lift = 0;
    schedule();
  };

  const onEnter = () => {
    if (!canTilt()) return;
    el.classList.add("is-tilting");
    el.style.willChange = "transform";
    target.lift = -liftPx;
    schedule();
  };

  const onMove = (e) => {
    if (!canTilt()) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const nx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const ny = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    const amp = premium ? maxDeg * 1.35 : maxDeg;
    target.ry = (nx - 0.5) * amp * 2;
    target.rx = (0.5 - ny) * amp * 2;
    target.sx = nx * 100;
    target.sy = ny * 100;
    const depth = premium ? 11 : 8;
    target.px = (nx - 0.5) * depth;
    target.py = (ny - 0.5) * depth;
    target.lift = -liftPx;
    el.classList.add("is-tilting");
    schedule();
  };

  const onLeave = () => {
    el.classList.remove("is-tilting");
    reset();
    // Drop compositor hint after settle so Lighthouse/memory stay clean
    window.setTimeout(() => {
      if (!el.classList.contains("is-tilting")) el.style.willChange = "auto";
    }, 220);
  };

  const onMedia = () => {
    if (!canTilt()) {
      el.classList.remove("is-tilting");
      el.style.willChange = "auto";
      reset();
    }
  };

  el.addEventListener("pointerenter", onEnter);
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  fine.addEventListener?.("change", onMedia);
  reduce.addEventListener?.("change", onMedia);
  apply();

  return () => {
    cancelAnimationFrame(raf);
    el.removeEventListener("pointerenter", onEnter);
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
    fine.removeEventListener?.("change", onMedia);
    reduce.removeEventListener?.("change", onMedia);
    el.classList.remove("pointer-tilt", "pointer-tilt--premium", "is-tilting", "pointer-tilt-static");
    el.style.willChange = "auto";
    ["--rx", "--ry", "--px", "--py", "--spot-x", "--spot-y", "--lift", "--icon-scale"].forEach((k) =>
      el.style.removeProperty(k)
    );
  };
}
