import Image from "next/image";
import { divisions } from "@/data/divisions";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";

type Props = { project: Project; locale: Locale; dict: Dictionary };

export function ProjectCard({ project, locale, dict }: Props) {
  const division = divisions.find((d) => d.slug === project.division);

  return (
    <LocaleLink
      href={`/projects/${project.slug}`}
      locale={locale}
      className="group block overflow-hidden border border-line bg-white transition hover:border-dolook/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.name[locale]}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <span className="absolute start-3 top-3 bg-white/95 px-2.5 py-1 text-xs font-semibold text-dolook-dark">
          {project.status === "completed" ? dict.projects.completed : dict.projects.ongoing}
        </span>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-bold text-dolook-dark">{project.name[locale]}</h3>
        <p className="text-sm text-muted">
          {project.location[locale]}
          {division ? ` · ${division.title[locale]}` : ""}
        </p>
        <p className="text-sm text-dolook">{project.type[locale]}</p>
      </div>
    </LocaleLink>
  );
}
