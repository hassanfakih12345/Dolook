import Image from "next/image";
import { getDivision } from "@/data/divisions";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";
import { StatusBadge } from "./ProjectCard";

/** Photo tile with the project name over a navy gradient — used in the home "bento" grid. */
export function FeaturedTile({
  project,
  locale,
  dict,
  large,
  className = "",
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  large?: boolean;
  className?: string;
}) {
  const division = getDivision(project.division);
  return (
    <LocaleLink
      href={`/projects/${project.slug}`}
      locale={locale}
      className={`group relative block min-h-64 overflow-hidden bg-dolook-dark ${className}`}
    >
      <Image
        src={project.image}
        alt={project.name[locale]}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes={large ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 100vw, 25vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dolook-dark/90 via-dolook-dark/25 to-transparent" />
      <span className="absolute start-4 top-4">
        <StatusBadge status={project.status} dict={dict} />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-xs font-medium text-white/70">{division?.title[locale]}</p>
        <h3 className={`mt-1 font-bold text-white ${large ? "text-2xl sm:text-3xl" : "text-lg"}`}>{project.name[locale]}</h3>
        {large && project.summary && (
          <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/80">{project.summary[locale]}</p>
        )}
      </div>
    </LocaleLink>
  );
}
