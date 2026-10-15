import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  href: string;
  locale: Locale;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page";
  children: React.ReactNode;
};

/**
 * Link that prefixes `href` with the current locale (`/about` → `/en/about/`).
 * Query and hash are kept after the trailing slash (`/about#ceo` → `/en/about/#ceo`).
 */
export function LocaleLink({ href, locale, children, ...rest }: Props) {
  const [, path, suffix = ""] = href.match(/^([^?#]*)(.*)$/)!;
  const base = path === "/" || path === "" ? `/${locale}/` : `/${locale}${path.replace(/\/$/, "")}/`;
  return (
    <Link href={`${base}${suffix}`} {...rest}>
      {children}
    </Link>
  );
}
