import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import { Breadcrumbs } from "./Breadcrumbs";

type Props = { locale: Locale; dict: Dictionary; number: string; title: string; sub?: string };

/** Breadcrumb + numbered eyebrow + title + subtitle at the top of the inner pages. */
export function PageIntro({ locale, dict, number, title, sub }: Props) {
  return (
    <>
      <Breadcrumbs locale={locale} dict={dict} items={[{ label: title }]} />
      <p className="text-sm font-semibold text-dolook">{number}</p>
      <h1 className="mt-2 text-4xl font-bold text-dolook-dark">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-muted">{sub}</p>}
    </>
  );
}
