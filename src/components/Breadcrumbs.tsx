import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import { LocaleLink } from "./LocaleLink";

type Crumb = { href?: string; label: string };

/** "Home / Section / Page" trail; the last crumb is the current page. */
export function Breadcrumbs({
  locale,
  dict,
  items,
  invert,
}: {
  locale: Locale;
  dict: Dictionary;
  items: Crumb[];
  invert?: boolean;
}) {
  const trail: Crumb[] = [{ href: "/", label: dict.nav.home }, ...items];
  const linkClass = invert ? "text-white/70 hover:text-white" : "text-muted hover:text-dolook";
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <LocaleLink href={crumb.href} locale={locale} className={linkClass}>
                  {crumb.label}
                </LocaleLink>
              ) : (
                <span aria-current="page" className={invert ? "font-medium text-white" : "font-medium text-dolook-dark"}>
                  {crumb.label}
                </span>
              )}
              {!last && (
                <span aria-hidden className={invert ? "text-white/40" : "text-line"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
