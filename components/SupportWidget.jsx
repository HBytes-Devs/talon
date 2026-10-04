"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { BRAND } from "../lib/brand";
import { useLocale } from "./LocaleProvider";

export default function SupportWidget() {
  const { locale, t } = useLocale();
  const s = t.support;
  const faqItems = t.faq?.items || [];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const panelId = useId();
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  const suggestions = useMemo(
    () => faqItems.slice(0, 4).map((item) => item.q),
    [faqItems]
  );

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: s.welcome,
      },
    ]);
    setInput("");
    setTyping(false);
  }, [s.welcome, locale]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(
    () => () => {
      abortRef.current?.abort();
    },
    []
  );

  const ask = async (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userMsg = { id: `u-${Date.now()}`, role: "user", text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setTyping(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const history = nextMessages
      .filter((m) => m.id !== "welcome")
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.text }));

    try {
      const res = await fetch("/api/support/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, locale, history }),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        (typeof data.reply === "string" && data.reply.trim()) ||
        s.errorReply;

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: reply,
          escalate: Boolean(data.escalate),
        },
      ]);
    } catch (err) {
      if (err?.name === "AbortError") return;
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: s.errorReply,
          escalate: true,
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="support-widget" ref={rootRef}>
      {open ? (
        <div
          id={panelId}
          className="support-panel support-chat"
          role="dialog"
          aria-label={s.title}
        >
          <div className="support-panel-head">
            <div className="support-agent">
              <span className="support-agent-avatar" aria-hidden="true">
                AI
              </span>
              <div>
                <p className="support-eyebrow">{s.eyebrow}</p>
                <strong>{s.title}</strong>
                <span className="support-online">{s.online}</span>
              </div>
            </div>
            <button
              type="button"
              className="support-close"
              aria-label={s.close}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="support-messages" ref={listRef} aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`support-bubble is-${msg.role}`}>
                {msg.text}
                {msg.escalate ? (
                  <a className="support-escalate" href={`mailto:${BRAND.email}`}>
                    {s.emailCta}
                  </a>
                ) : null}
              </div>
            ))}
            {typing ? (
              <div className="support-bubble is-assistant is-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          {!typing && messages.length < 3 ? (
            <div className="support-suggestions">
              {suggestions.map((q) => (
                <button key={q} type="button" onClick={() => ask(q)}>
                  {q}
                </button>
              ))}
            </div>
          ) : null}

          <form
            className="support-compose"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={s.placeholder}
              aria-label={s.placeholder}
              autoComplete="off"
            />
            <button
              type="submit"
              className="support-send"
              aria-label={s.send}
              disabled={!input.trim() || typing}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>

          <div className="support-foot">
            <a href={`mailto:${BRAND.email}`}>{s.emailCta}</a>
            <span>{BRAND.email}</span>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className={`support-fab ${open ? "is-open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? s.close : s.open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        )}
        <span className="support-fab-label">{s.open}</span>
      </button>
    </div>
  );
}
