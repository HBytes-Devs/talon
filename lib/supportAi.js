import { localSupportAnswer, retrieveSupportContext } from "./supportKnowledge";

const SYSTEM_PROMPT = `You are the HawkLens AI support assistant for HawkBytes.
Rules:
- Answer ONLY using the provided CONTEXT. If the context is insufficient, say you are unsure and suggest emailing human support.
- Be concise, professional, and friendly. Use short paragraphs or bullets when helpful.
- Do not invent prices, legal claims, or features not in the context.
- Never ask for passwords, screenshots of private data, or employee PII.
- If the user is frustrated, angry, asking for refunds/contracts/legal, or needs account-specific help, set escalate to true and point them to the human support email from context.
- Prefer the user's language when possible (English, Russian, Greek, Turkish, or Arabic).
- Return plain text only (no markdown fences).`;

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-8)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, 1200),
    }));
}

export async function generateSupportReply({ message, locale = "en", history = [] }) {
  const query = String(message || "").trim().slice(0, 1000);
  if (!query) {
    return {
      reply: "Please type a question about HawkLens.",
      source: "validation",
      escalate: false,
      sources: [],
    };
  }

  const { context, sources, topScore } = retrieveSupportContext(query, locale);
  const apiKey = process.env.OPENAI_API_KEY || process.env.SUPPORT_AI_API_KEY;
  const baseUrl = (process.env.SUPPORT_AI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.SUPPORT_AI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    const local = localSupportAnswer(query, locale);
    return { ...local, sources: local.sources.length ? local.sources : sources };
  }

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "system",
      content: `CONTEXT:\n${context}`,
    },
    ...sanitizeHistory(history),
    { role: "user", content: query },
  ];

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: 420,
      messages,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("support AI error", res.status, detail.slice(0, 400));
    const local = localSupportAnswer(query, locale);
    return {
      ...local,
      source: "fallback-ai-error",
      sources: local.sources.length ? local.sources : sources,
    };
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    return localSupportAnswer(query, locale);
  }

  const escalate =
    topScore < 0.2 ||
    /email|human|support team|not sure|don't have|do not have|unsure/i.test(reply);

  return {
    reply,
    source: "ai",
    escalate,
    sources,
  };
}
