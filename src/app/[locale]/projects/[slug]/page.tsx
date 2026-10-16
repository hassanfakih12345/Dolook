import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectCard, StatusBadge } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Arrow } from "@/components/ui";
import { getDivision } from "@/data/divisions";
import { formatArea, getProject, projects } from "@/data/projects";
import { locales, resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Params) {
  const { locale } = await resolveLocale(params);
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: project.name[locale],
    description: project.summary?.[locale] ?? `${project.type[locale]} — ${project.location[locale]}`,
    image: project.image,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  const project = getProject((await params).slug);
  if (!project) notFound();

  const division = getDivision(project.division);
  const sameDivision = projects.filter((p) => p.slug !== project.slug && p.division === project.division);
  const more = [...sameDivision, ...projects.filter((p) => p.slug !== project.slug && p.division !== project.division)].slice(0, 3);

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: dict.projects.location, value: project.location[locale] },
    { label: dict.projects.type, value: project.type[locale] },
    {
      label: dict.projects.division,
      value: division ? (
        <LocaleLink href={`/services/${division.slug}`} locale={locale} className="hover:text-dolook hover:underline">
          {division.title[locale]}
        </LocaleLink>
      ) : (
        "—"
      ),
    },
    { label: dict.projects.area, value: formatArea(project.area, locale) ?? "—" },
    { label: dict.projects.status, value: dict.projects[project.status] },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image src={project.image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-dolook-dark/75" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <Breadcrumbs
            locale={locale}
            dict={dict}
            invert
            items={[{ href: "/projects", label: dict.nav.projects }, { label: project.name[locale] }]}
          />
          <StatusBadge status={project.status} dict={dict} />
          <h1 className="mt-4 text-4xl font-bold text-white">{project.name[locale]}</h1>
          <p className="mt-3 text-white/85">{project.location[locale]}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {project.summary ? (
            <div>
              <h2 className="text-2xl font-bold text-dolook-dark">{dict.projects.overview}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary[locale]}</p>
            </div>
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
              <Image
                src={project.image}
                alt={project.name[locale]}
                fill
                className="object-contain"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          )}
          <dl className="grid content-start gap-4 sm:grid-cols-2">
            {facts.map(({ label, value }) => (
              <div key={label} className="border border-line bg-surface p-5">
                <dt className="text-xs font-semibold tracking-wide text-dolook uppercase">{label}</dt>
                <dd className="mt-2 text-base font-semibold text-dolook-dark">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {project.gallery && (
          <section className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-bold text-dolook-dark">{dict.projects.gallery}</h2>
              <p className="text-sm text-muted">
                {project.gallery.length} {dict.projects.images}
                {project.status === "design" && ` · ${dict.projects.renders}`}
              </p>
            </div>
            <div className="mt-6">
              <ProjectGallery images={project.gallery} locale={locale} dict={dict} />
            </div>
          </section>
        )}

        {(project.drawings || project.spaces) && (
          <section className="mt-16 space-y-16">
            {project.drawings && (
              <div>
                <h2 className="text-2xl font-bold text-dolook-dark">{dict.projects.drawings}</h2>
                <div className="mt-6">
                  <ProjectGallery images={project.drawings} locale={locale} dict={dict} contain />
                </div>
              </div>
            )}
            {project.spaces && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-dolook-dark">{dict.projects.spaces}</h2>
                <table className="mt-6 w-full border border-line text-sm">
                  <thead className="bg-surface text-xs tracking-wide text-dolook uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-start font-semibold">
                        {dict.projects.space}
                      </th>
                      <th scope="col" className="px-4 py-3 text-end font-semibold">
                        m²
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.spaces.map((space) => (
                      <tr key={space.name.en} className="border-t border-line">
                        <td className="px-4 py-2.5 text-dolook-dark">{space.name[locale]}</td>
                        <td className="px-4 py-2.5 text-end tabular-nums text-muted">{space.area}</td>
                      </tr>
                    ))}
                  </tbody>
                  {project.area !== null && (
                    <tfoot className="border-t-2 border-dolook/30 bg-surface font-semibold text-dolook-dark">
                      <tr>
                        <td className="px-4 py-3">{dict.projects.total}</td>
                        <td className="px-4 py-3 text-end tabular-nums">{project.area}</td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            )}
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-3">
          <LocaleLink
            href="/projects"
            locale={locale}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-dolook-dark transition hover:border-dolook/40"
          >
            <Arrow direction="back" /> {dict.projects.allProjects}
          </LocaleLink>
          <LocaleLink
            href={`/contact?division=${project.division}`}
            locale={locale}
            className="rounded-md bg-dolook px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-dolook-soft"
          >
            {dict.nav.quote}
          </LocaleLink>
        </div>

        {more.length > 0 && (
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-2xl font-bold text-dolook-dark">{dict.projects.more}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} locale={locale} dict={dict} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
