import { PageIntro } from "@/components/PageIntro";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";
import { resolveLocale } from "@/lib/i18n";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro number="03" title={dict.projects.title} sub={dict.projects.sub} />
      <div className="mt-10">
        <ProjectsFilter projects={projects} locale={locale} dict={dict} />
      </div>
    </div>
  );
}
