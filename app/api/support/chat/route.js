import { NextResponse } from "next/server";
import { generateSupportReply } from "../../../../lib/supportAi";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;
const hits = new Map();

function clientIp(req) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "local";
}

function rateLimit(ip) {
  const now = Date.now();
  const row = hits.get(ip) || { count: 0, start: now };
  if (now - row.start > WINDOW_MS) {
    row.count = 0;
    row.start = now;
  }
  row.count += 1;
  hits.set(ip, row);
  return row.count <= MAX_PER_WINDOW;
}

export async function POST(req) {
  try {
    const ip = clientIp(req);
    if (!rateLimit(ip)) {
      return NextResponse.json(
        {
          error: "rate_limited",
          reply: "Too many messages. Please wait a moment, then try again — or email info@hawkbytes.cloud.",
          escalate: true,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const message = typeof body.message === "string" ? body.message : "";
    const locale = typeof body.locale === "string" ? body.locale : "en";
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message.trim()) {
      return NextResponse.json({ error: "empty_message" }, { status: 400 });
    }

    const result = await generateSupportReply({ message, locale, history });
    return NextResponse.json(result);
  } catch (err) {
    console.error("support chat route failed", err);
    return NextResponse.json(
      {
        error: "server_error",
        reply: "Something went wrong on our side. Please email info@hawkbytes.cloud and we’ll help.",
        escalate: true,
        source: "error",
        sources: [],
      },
      { status: 500 }
    );
  }
}
