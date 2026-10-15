import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { Arrow } from "@/components/ui";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/services", title: dict.services.title, description: dict.meta.services });
}

export default async function ServicesPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro locale={locale} dict={dict} number="02" title={dict.services.title} sub={dict.services.sub} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {divisions.map((d) => {
          const count = projects.filter((p) => p.division === d.slug).length;
          return (
            <LocaleLink
              key={d.slug}
              href={`/services/${d.slug}`}
              locale={locale}
              className="group relative block overflow-hidden border border-line bg-white transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={d.imageHint}
                  alt={d.title[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dolook-dark/80 via-dolook-dark/20 to-transparent" />
                <span className="absolute start-4 top-4 inline-flex h-9 min-w-9 items-center justify-center bg-dolook px-2 text-sm font-bold text-white">
                  {d.number}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h2 className="text-xl font-bold text-dolook-dark group-hover:text-dolook">{d.title[locale]}</h2>
                <p className="text-sm leading-relaxed text-muted">{d.summary[locale]}</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-dolook">
                    {dict.common.learnMore} <Arrow />
                  </span>
                  {count > 0 && (
                    <span className="text-xs text-muted">
                      {count} {dict.projects.count}
                    </span>
                  )}
                </div>
              </div>
            </LocaleLink>
          );
        })}
      </div>
    </div>
  );
}
