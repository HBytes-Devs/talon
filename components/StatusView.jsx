"use client";

import Link from "next/link";
import { BRAND } from "../lib/brand";
import { useLocale } from "./LocaleProvider";

function StatusAction({ href, label, variant }) {
  const className = `btn btn-${variant} h-12 px-5`;
  const resolved = href.replace("{{email}}", BRAND.email);
  if (resolved.startsWith("mailto:") || resolved.startsWith("http")) {
    return (
      <a
        href={resolved}
        className={className}
        {...(resolved.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={resolved} className={className}>
      {label}
    </Link>
  );
}

export default function StatusView({ kind }) {
  const { t } = useLocale();
  const s = t.status?.[kind] || t.status?.notFound;

  return (
    <main id="top" className="status-page status-page-embedded">
      <div className="status-page-main">
        {s.code ? <p className="status-page-code">{s.code}</p> : null}
        {s.eyebrow ? <span className="pill">{s.eyebrow}</span> : null}
        <h1 className="display-type status-page-title">{s.title}</h1>
        <p className="status-page-body">{s.body}</p>
        <div className="status-page-actions">
          <StatusAction href={s.primaryHref} label={s.primary} variant="primary" />
          <StatusAction href={s.secondaryHref} label={s.secondary} variant="secondary" />
        </div>
      </div>
    </main>
  );
}
