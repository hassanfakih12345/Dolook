import { PageIntro } from "@/components/PageIntro";
import { ProjectsFilter } from "@/components/ProjectsFilter";
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro locale={locale} dict={dict} number="03" title={dict.projects.title} sub={dict.projects.sub} />
      <div className="mt-10">
        <ProjectsFilter projects={projects} locale={locale} dict={dict} />
      </div>
    </div>
  );
}
