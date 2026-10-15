import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  href: string;
  locale: Locale;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

/** Link that prefixes `href` with the current locale (`/about` → `/en/about`). */
export function LocaleLink({ href, locale, children, className, onClick }: Props) {
  const localized = href === "/" ? `/${locale}` : `/${locale}${href}`;
  return (
    <Link href={localized} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
