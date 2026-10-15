import Image from "next/image";
import { notFound } from "next/navigation";
import { LocaleLink } from "@/components/LocaleLink";
import { getDivision } from "@/data/divisions";
import { getProject, projects } from "@/data/projects";
import { locales, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, dict } = await resolveLocale(params);
  const project = getProject((await params).slug);
  if (!project) notFound();

  const division = getDivision(project.division);
  const facts = [
    [dict.projects.location, project.location[locale]],
    [dict.projects.type, project.type[locale]],
    [dict.projects.division, division?.title[locale] ?? "—"],
    [dict.projects.area, project.area ?? "—"],
    [dict.projects.status, project.status === "completed" ? dict.projects.completed : dict.projects.ongoing],
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image src={project.image} alt={project.name[locale]} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-dolook-dark/65" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">{project.name[locale]}</h1>
          <p className="mt-3 text-white/85">{project.location[locale]}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="border border-line bg-surface p-5">
              <dt className="text-xs font-semibold tracking-wide text-dolook uppercase">{label}</dt>
              <dd className="mt-2 text-base font-semibold text-dolook-dark">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap gap-3">
          <LocaleLink
            href="/projects"
            locale={locale}
            className="rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-dolook-dark"
          >
            ← {dict.common.back}
          </LocaleLink>
          <LocaleLink
            href="/contact"
            locale={locale}
            className="rounded-md bg-dolook px-5 py-2.5 text-sm font-semibold text-white"
          >
            {dict.nav.quote}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
