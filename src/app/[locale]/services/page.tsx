import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button, NumberBadge, container, section } from "@/components/ui";
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
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: dict.services.title }]}
        eyebrow="02"
        title={dict.services.title}
        sub={dict.services.sub}
      />

      <div className={`${container} ${section} space-y-16 lg:space-y-24`}>
        {divisions.map((d, i) => {
          const count = projects.filter((p) => p.division === d.slug).length;
          const flip = i % 2 === 1;
          return (
            <article key={d.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                <div className="absolute -bottom-3 -end-3 h-full w-full border border-dolook/25" aria-hidden />
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={d.imageHint}
                    alt={d.title[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <NumberBadge n={d.number} className="absolute start-4 top-4 h-11 min-w-11 text-base" />
              </div>
              <div>
                <h2 className="text-heading font-bold text-dolook-dark">{d.title[locale]}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{d.summary[locale]}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {d.scope[locale].map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-dolook-dark">
                      <CheckIcon className="mt-0.5 h-4 w-4 text-dolook" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={`/services/${d.slug}`} locale={locale}>
                    {dict.common.learnMore}
                  </Button>
                  {count > 0 && (
                    <span className="text-sm text-muted">
                      {count} {dict.projects.count}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
