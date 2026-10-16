import { PageHero } from "@/components/PageHero";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { container, section } from "@/components/ui";
import { projects } from "@/data/projects";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/projects", title: dict.projects.title, description: dict.meta.projects });
}

export default async function ProjectsPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: dict.projects.title }]}
        eyebrow="03"
        title={dict.projects.title}
        sub={dict.projects.sub}
      />
      <div className={`${container} ${section} !pt-10`}>
        <ProjectsFilter projects={projects} locale={locale} dict={dict} />
      </div>
    </>
  );
}
