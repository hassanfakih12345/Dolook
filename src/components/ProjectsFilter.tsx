"use client";

import { useMemo, useState } from "react";
import { divisions, type DivisionSlug } from "@/data/divisions";
import type { Project, ProjectStatus } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { ProjectCard } from "./ProjectCard";

type Props = { projects: Project[]; locale: Locale; dict: Dictionary };

const base = "rounded-md border px-3 py-1.5 text-sm font-medium transition";
const active = "border-dolook bg-dolook text-white";
const idle = "border-line bg-white text-muted hover:border-dolook/40";

export function ProjectsFilter({ projects, locale, dict }: Props) {
  const [status, setStatus] = useState<"all" | ProjectStatus>("all");
  const [division, setDivision] = useState<"all" | DivisionSlug>("all");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (status === "all" || p.status === status) && (division === "all" || p.division === division),
      ),
    [projects, status, division],
  );

  const statuses: ["all" | ProjectStatus, string][] = [
    ["all", dict.projects.all],
    ["completed", dict.projects.completed],
    ["ongoing", dict.projects.ongoing],
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {statuses.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setStatus(value)}
            className={`${base} ${status === value ? active : idle}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setDivision("all")}
          className={`${base} ${division === "all" ? active : idle}`}
        >
          {dict.projects.all}
        </button>
        {divisions.map((d) => (
          <button
            key={d.slug}
            type="button"
            onClick={() => setDivision(d.slug)}
            className={`${base} ${division === d.slug ? active : idle}`}
          >
            {d.title[locale]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted">{dict.projects.empty}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
