import { BRAND } from "./brand";
import { messages } from "./i18n";

const PRODUCT_FACTS = `
Product: ${BRAND.name} by ${BRAND.company} (${BRAND.website}, ${BRAND.email}).
Tagline: ${BRAND.tagline}
What it is: ML-based employee productivity & time tracking (live screenshots/status, idle/meeting/break logging, Focus Timeline, reports, client/project time, optional field location).
Free plan: 3 users free forever. Premium: $3.99 / user / month from the 4th user (10% yearly discount). Business: $9.99 / user / month, 25-user minimum. Volume from 100+. Enterprise can store data on-prem.
Platforms: Windows 10/11, Mac ARM & Intel, mobile for field teams. Hardware: 4GB RAM, min i3 5th gen.
Privacy: non-intrusive; screenshot blur; no keystroke/mic recording; data can be stored at customer location; ECC + HTTPS.
`.trim();

export function getSupportCorpus(locale = "en") {
  const pack = messages[locale] || messages.en;
  const faq = (pack.faq?.items || messages.en.faq.items).map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    body: item.a,
    tab: item.tabKey,
  }));

  return {
    facts: PRODUCT_FACTS,
    docs: faq,
    email: BRAND.email,
  };
}

export function scoreDoc(query, doc) {
  const q = String(query || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ");
  const words = q.split(/\s+/).filter((w) => w.length > 2);
  if (!words.length) return 0;
  const hay = `${doc.title} ${doc.body} ${doc.tab || ""}`.toLowerCase();
  let hits = 0;
  for (const word of words) {
    if (hay.includes(word)) hits += 1;
  }
  // Prefer denser matches
  return hits / words.length + (hay.includes(q.trim()) ? 0.35 : 0);
}

export function retrieveSupportContext(query, locale = "en", limit = 4) {
  const { facts, docs, email } = getSupportCorpus(locale);
  const ranked = docs
    .map((doc) => ({ doc, score: scoreDoc(query, doc) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked.filter((r) => r.score > 0).slice(0, limit);
  const selected = top.length ? top : ranked.slice(0, 2);

  const context = [
    "PRODUCT FACTS:",
    facts,
    "",
    "RELEVANT FAQ:",
    ...selected.map(
      (r, i) => `${i + 1}. Q: ${r.doc.title}\nA: ${r.doc.body}`
    ),
    "",
    `Human support email: ${email}`,
  ].join("\n");

  return {
    context,
    topScore: selected[0]?.score || 0,
    sources: selected.map((r) => r.doc.title),
  };
}

export function localSupportAnswer(query, locale = "en") {
  const { docs, email } = getSupportCorpus(locale);
  const ranked = docs
    .map((doc) => ({ doc, score: scoreDoc(query, doc) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  if (best && best.score >= 0.34) {
    return {
      reply: best.doc.body,
      source: "faq",
      escalate: false,
      sources: [best.doc.title],
    };
  }
  return {
    reply: `I don't have a confident answer for that yet. Email our team at ${email} and we'll help within one business day — or ask about pricing, privacy, devices, or getting started.`,
    source: "fallback",
    escalate: true,
    sources: [],
  };
}
