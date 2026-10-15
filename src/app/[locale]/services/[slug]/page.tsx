import Image from "next/image";
import { notFound } from "next/navigation";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectCard } from "@/components/ProjectCard";
import { divisions, getDivision } from "@/data/divisions";
import { projects } from "@/data/projects";
import { locales, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => divisions.map((d) => ({ locale, slug: d.slug })));
}

export default async function DivisionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, dict } = await resolveLocale(params);
  const division = getDivision((await params).slug);
  if (!division) notFound();

  const related = projects.filter((p) => p.division === division.slug).slice(0, 3);

  return (
    <div>
      <section className="relative min-h-[42vh] overflow-hidden">
        <Image
          src={division.imageHint}
          alt={division.title[locale]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dolook-dark/70" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
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
            <li key={item} className="border border-line bg-surface px-5 py-4 text-sm font-medium text-dolook-dark">
              {item}
            </li>
          ))}
        </ul>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-dolook-dark">{dict.services.relatedProjects}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 border border-line bg-surface p-8 text-center">
          <LocaleLink
            href="/contact"
            locale={locale}
            className="inline-flex rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white"
          >
            {dict.services.requestQuote}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
