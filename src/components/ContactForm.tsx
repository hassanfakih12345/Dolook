"use client";

import { useEffect, useState, type FormEvent } from "react";
import { whatsappUrl } from "@/data/company";
import { divisions } from "@/data/divisions";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";

type Props = { locale: Locale; dict: Dictionary };

const fieldClass = "min-h-11 w-full border border-line bg-white px-3 py-2.5 outline-none focus:border-dolook";

function Field({
  label,
  name,
  required,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block space-y-1.5 text-sm">
      <span className="font-medium text-dolook-dark">
        {label}
        {required && <span className="text-dolook"> *</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={fieldClass} />
    </label>
  );
}

/**
 * Static site, no backend: the request is sent as a pre-filled WhatsApp message.
 * `?division=<slug>` in the URL preselects the division (used by the division pages).
 */
export function ContactForm({ locale, dict }: Props) {
  const [sent, setSent] = useState(false);
  const [division, setDivision] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("division");
    const match = divisions.find((d) => d.slug === slug);
    if (match) setDivision(match.title[locale]);
  }, [locale]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const c = dict.contact;
    const lines = [
      c.messageTitle,
      `${c.name}: ${value("name")}`,
      value("company") && `${c.company}: ${value("company")}`,
      `${c.phone}: ${value("phone")}`,
      `${c.division}: ${value("division")}`,
      value("area") && `${c.area}: ${value("area")}`,
      `${c.message}: ${value("message")}`,
    ].filter(Boolean);
    window.open(`${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div role="status" className="space-y-4 border border-dolook/20 bg-surface p-8 text-center text-dolook-dark">
        <p>{dict.contact.success}</p>
        <button type="button" onClick={() => setSent(false)} className="text-sm font-semibold text-dolook underline">
          {dict.contact.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.name} name="name" required autoComplete="name" />
        <Field label={dict.contact.company} name="company" autoComplete="organization" />
        <Field label={dict.contact.phone} name="phone" required type="tel" autoComplete="tel" />
        <Field label={dict.contact.area} name="area" />
      </div>
      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-dolook-dark">
          {dict.contact.division}
          <span className="text-dolook"> *</span>
        </span>
        <select
          name="division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
          className={fieldClass}
        >
          <option value="" disabled>
            {dict.contact.selectDivision}
          </option>
          {divisions.map((d) => (
            <option key={d.slug} value={d.title[locale]}>
              {d.title[locale]}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-dolook-dark">
          {dict.contact.message}
          <span className="text-dolook"> *</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-line bg-white px-3 py-2.5 outline-none focus:border-dolook"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
        >
          {dict.contact.submit}
        </button>
        <p className="text-xs text-muted">{dict.contact.note}</p>
      </div>
    </form>
  );
}
