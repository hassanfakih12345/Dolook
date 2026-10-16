import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckIcon } from "@/components/icons";
import { LocaleLink } from "@/components/LocaleLink";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow, ArrowLink, Button, NumberBadge, SectionHeading, container, pad2, section } from "@/components/ui";
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
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ href: "/services", label: dict.nav.services }, { label: division.title[locale] }]}
        eyebrow={division.number}
        title={division.title[locale]}
        sub={division.summary[locale]}
        image={{ src: division.imageHint, alt: division.title[locale] }}
      >
        <Button href={`/contact?division=${division.slug}`} locale={locale} variant="light">
          {dict.services.requestQuote}
        </Button>
      </PageHero>

      <section className={section}>
        <div className={container}>
          <SectionHeading title={dict.services.scopeTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {division.scope[locale].map((item, i) => (
              <li key={item} className="flex flex-col gap-4 border border-line bg-surface p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-white text-dolook">
                  <CheckIcon />
                </span>
                <span className="text-xs font-bold text-dolook/60">{pad2(i + 1)}</span>
                <span className="font-semibold text-dolook-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`bg-surface ${section}`}>
        <div className={container}>
          <SectionHeading
            title={dict.services.relatedProjects}
            action={
              related.length > 3 ? (
                <ArrowLink href={`/projects?division=${division.slug}`} locale={locale}>
                  {dict.home.viewAll} ({related.length})
                </ArrowLink>
              ) : undefined
            }
          />
          {related.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
              ))}
            </div>
          ) : (
            <p className="mt-8 border border-dashed border-line bg-white px-6 py-12 text-center text-muted">
              {dict.services.noProjects}
            </p>
          )}
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <SectionHeading title={dict.services.otherDivisions} />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex flex-col overflow-hidden border border-line bg-white transition hover:border-dolook/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={d.imageHint}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, 33vw"
                  />
                  <NumberBadge n={d.number} className="absolute start-3 top-3" />
                </div>
                <span className="flex min-h-14 items-center justify-between gap-3 px-5 py-4 font-semibold text-dolook-dark group-hover:text-dolook">
                  {d.title[locale]}
                  <Arrow className="text-dolook" />
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
