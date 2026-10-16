import { notFound } from "next/navigation";
import { LocaleLink } from "@/components/LocaleLink";
import { PageHero } from "@/components/PageHero";
import { ProjectCard, StatusBadge } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Arrow, Button, buttonClass, container } from "@/components/ui";
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
    description:
      project.summary?.[locale] ??
      [project.type[locale], project.location?.[locale]].filter(Boolean).join(" — "),
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

  // Facts with no published value (location, area) are left out rather than shown as "—".
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: dict.projects.location, value: project.location?.[locale] },
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
    { label: dict.projects.area, value: formatArea(project.area, locale) },
    { label: dict.projects.status, value: dict.projects[project.status] },
  ].filter((fact) => fact.value != null);

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ href: "/projects", label: dict.nav.projects }, { label: project.name[locale] }]}
        title={project.name[locale]}
        sub={[project.type[locale], project.location?.[locale]].filter(Boolean).join(" · ")}
        image={{ src: project.image, alt: project.name[locale] }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} dict={dict} />
          {division && (
            <LocaleLink
              href={`/services/${division.slug}`}
              locale={locale}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              {division.title[locale]} <Arrow />
            </LocaleLink>
          )}
        </div>
      </PageHero>

      <div className={`${container} py-14 sm:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className="text-heading font-bold text-dolook-dark">{dict.projects.overview}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {project.summary?.[locale] ?? `${project.type[locale]} — ${project.location?.[locale] ?? ""}`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?division=${project.division}`} locale={locale}>
                {dict.nav.quote}
              </Button>
              <LocaleLink href="/projects" locale={locale} className={buttonClass("secondary")}>
                <Arrow direction="back" /> {dict.projects.allProjects}
              </LocaleLink>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px self-start overflow-hidden border border-line bg-line">
            {facts.map(({ label, value }, i) => (
              <div
                key={label}
                className={`bg-surface p-4 sm:p-5 ${facts.length % 2 === 1 && i === facts.length - 1 ? "col-span-2" : ""}`}
              >
                <dt className="text-xs font-semibold tracking-wide text-dolook uppercase">{label}</dt>
                <dd className="mt-2 text-sm font-semibold text-dolook-dark sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {project.gallery && (
          <section className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-heading font-bold text-dolook-dark">{dict.projects.gallery}</h2>
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
                <h2 className="text-heading font-bold text-dolook-dark">{dict.projects.drawings}</h2>
                <div className="mt-6">
                  <ProjectGallery images={project.drawings} locale={locale} dict={dict} contain />
                </div>
              </div>
            )}
            {project.spaces && (
              <div className="max-w-2xl">
                <h2 className="text-heading font-bold text-dolook-dark">{dict.projects.spaces}</h2>
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

        {more.length > 0 && (
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-heading font-bold text-dolook-dark">{dict.projects.more}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} locale={locale} dict={dict} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
