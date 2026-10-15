"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/data/company";
import { divisions } from "@/data/divisions";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";

type Props = { locale: Locale; dict: Dictionary; defaultDivision?: string };

const fieldClass = "w-full border border-line bg-white px-3 py-2.5 outline-none focus:border-dolook";

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block space-y-1.5 text-sm">
      <span className="font-medium text-dolook-dark">{label}</span>
      <input name={name} type={type} required={required} className={fieldClass} />
    </label>
  );
}

/** Static site, no backend: the request is sent as a pre-filled WhatsApp message. */
export function ContactForm({ locale, dict, defaultDivision }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = encodeURIComponent(
      [
        "DOLOOK Quote Request",
        `Name: ${String(data.get("name") || "")}`,
        `Phone: ${String(data.get("phone") || "")}`,
        `Division: ${String(data.get("division") || "")}`,
        `Message: ${String(data.get("message") || "")}`,
      ].join("\n"),
    );
    window.open(`${whatsappUrl}?text=${text}`, "_blank");
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="border border-dolook/20 bg-surface p-8 text-center text-dolook-dark">
        {dict.contact.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.name} name="name" required />
        <Field label={dict.contact.company} name="company" />
        <Field label={dict.contact.phone} name="phone" required type="tel" />
        <Field label={dict.contact.area} name="area" />
      </div>
      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-dolook-dark">{dict.contact.division}</span>
        <select name="division" defaultValue={defaultDivision || ""} required className={fieldClass}>
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
        <span className="font-medium text-dolook-dark">{dict.contact.message}</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-line bg-white px-3 py-2.5 outline-none focus:border-dolook"
        />
      </label>
      <button
        type="submit"
        className="inline-flex rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
      >
        {dict.contact.submit}
      </button>
    </form>
  );
}
