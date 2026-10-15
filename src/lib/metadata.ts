import type { Metadata } from "next";
import { siteUrl } from "@/data/company";
import { getDictionary } from "@/lib/i18n";
import { locales, type Locale } from "@/lib/i18n/config";

type PageMeta = {
  locale: Locale;
  /** Path without the locale prefix, e.g. "/about" or "/" for home. */
  path: string;
  title?: string;
  description?: string;
  image?: string;
};

export function localizedPath(locale: Locale, path: string) {
  return path === "/" ? `/${locale}/` : `/${locale}${path}/`;
}

/** Per-page title, description, canonical URL, hreflang alternates and social preview. */
export function pageMetadata({ locale, path, title, description, image }: PageMeta): Metadata {
  const dict = getDictionary(locale);
  const fullTitle = title ? `${title} | ${dict.meta.siteName}` : dict.meta.siteName;
  const desc = description ?? dict.meta.description;
  const url = localizedPath(locale, path);

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localizedPath(l, path)])),
        "x-default": localizedPath("ar", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title: fullTitle,
      description: desc,
      url,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      images: [{ url: image ?? "/hero/cover.jpg" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc },
  };
}
