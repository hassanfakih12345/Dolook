import Image from "next/image";
import { getDivision } from "@/data/divisions";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";

type Props = { project: Project; locale: Locale; dict: Dictionary };

export function StatusBadge({ status, dict }: { status: Project["status"]; dict: Dictionary }) {
  const completed = status === "completed";
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 px-2.5 py-1 text-xs font-semibold ${
        completed ? "bg-white/95 text-dolook-dark" : "bg-amber-400 text-dolook-dark"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${completed ? "bg-emerald-600" : "bg-dolook-dark"}`} aria-hidden />
      {completed ? dict.projects.completed : dict.projects.ongoing}
    </span>
  );
}

export function ProjectCard({ project, locale, dict }: Props) {
  const division = getDivision(project.division);

  return (
    <LocaleLink
      href={`/projects/${project.slug}`}
      locale={locale}
      className="group block overflow-hidden border border-line bg-white transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.name[locale]}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <span className="absolute start-3 top-3">
          <StatusBadge status={project.status} dict={dict} />
        </span>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-bold text-dolook-dark group-hover:text-dolook">{project.name[locale]}</h3>
        <p className="text-sm text-muted">
          {project.location[locale]}
          {division ? ` · ${division.title[locale]}` : ""}
        </p>
        <p className="text-sm text-dolook">{project.type[locale]}</p>
      </div>
    </LocaleLink>
  );
}
