import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import { locales } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/metadata";

export const dynamic = "force-static";

/** Every public page in both languages, with hreflang alternates. Served as /sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    ...divisions.map((d) => `/services/${d.slug}`),
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/clients",
    "/certificates",
    "/contact",
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, path)}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localizedPath(l, path)}`])),
      },
    })),
  );
}
