/** Clean path ↔ homepage section id (no hash in URL). */
export const SECTION_PATHS = {
  "/features": "product",
  "/how-it-works": "workflow",
  "/pricing": "pricing",
  "/faq": "faq",
  "/start": "beta",
};

export const SECTION_HREFS = {
  product: "/features",
  workflow: "/how-it-works",
  pricing: "/pricing",
  faq: "/faq",
  beta: "/start",
  top: "/",
};

export function sectionIdFromPath(pathname = "") {
  const path = pathname.replace(/\/$/, "") || "/";
  return SECTION_PATHS[path] || null;
}

export function scrollToSectionId(id, { behavior = "smooth" } = {}) {
  if (typeof document === "undefined" || !id) return false;
  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}
