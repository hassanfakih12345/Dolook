import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow } from "@/components/ui";
import { divisions, getDivision } from "@/data/divisions";
import { projects } from "@/data/projects";
import { locales, resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => divisions.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({ params }: Params) {
  const { locale } = await resolveLocale(params);
  const division = getDivision((await params).slug);
  if (!division) return {};
  return pageMetadata({
    locale,
    path: `/services/${division.slug}`,
    title: division.title[locale],
    description: division.summary[locale],
    image: division.imageHint,
  });
}

export default async function DivisionPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  const division = getDivision((await params).slug);
  if (!division) notFound();

  const related = projects.filter((p) => p.division === division.slug);
  const others = divisions.filter((d) => d.slug !== division.slug);

  return (
    <div>
      <section className="relative min-h-[42vh] overflow-hidden">
        <Image src={division.imageHint} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-dolook-dark/75" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <Breadcrumbs
            locale={locale}
            dict={dict}
            invert
            items={[{ href: "/services", label: dict.nav.services }, { label: division.title[locale] }]}
          />
          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center bg-dolook text-sm font-bold text-white">
            {division.number}
          </span>
          <h1 className="text-4xl font-bold text-white">{division.title[locale]}</h1>
          <p className="mt-4 max-w-2xl text-white/85">{division.summary[locale]}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dolook-dark">{dict.services.scopeTitle}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {division.scope[locale].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border border-line bg-surface px-5 py-4 text-sm font-medium text-dolook-dark"
            >
              <span className="h-2 w-2 shrink-0 bg-dolook" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-dolook-dark">{dict.services.relatedProjects}</h2>
            {related.length > 3 && (
              <LocaleLink
                href={`/projects?division=${division.slug}`}
                locale={locale}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
              >
                {dict.home.viewAll} ({related.length}) <Arrow />
              </LocaleLink>
            )}
          </div>
          {related.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
              ))}
            </div>
          ) : (
            <p className="mt-6 border border-dashed border-line px-6 py-10 text-center text-muted">
              {dict.services.noProjects}
            </p>
          )}
        </section>

        <div className="mt-16 border border-line bg-surface p-8 text-center">
          <LocaleLink
            href={`/contact?division=${division.slug}`}
            locale={locale}
            className="inline-flex rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
          >
            {dict.services.requestQuote}
          </LocaleLink>
        </div>

        <section className="mt-16 border-t border-line pt-12">
          <h2 className="text-xl font-bold text-dolook-dark">{dict.services.otherDivisions}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex items-center justify-between gap-3 border border-line bg-white px-5 py-4 transition hover:border-dolook/40"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-bold text-dolook">{d.number}</span>
                  <span className="text-sm font-semibold text-dolook-dark group-hover:text-dolook">{d.title[locale]}</span>
                </span>
                <Arrow className="text-dolook" />
              </LocaleLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
