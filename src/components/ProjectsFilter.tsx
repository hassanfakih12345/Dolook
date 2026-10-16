"use client";

import { useEffect, useMemo, useState } from "react";
import { divisions, type DivisionSlug } from "@/data/divisions";
import { projectStatuses, type Project, type ProjectStatus } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { ProjectCard } from "./ProjectCard";

type Props = { projects: Project[]; locale: Locale; dict: Dictionary };

type StatusFilter = "all" | ProjectStatus;
type DivisionFilter = "all" | DivisionSlug;

const base = "rounded-md border px-3 py-1.5 text-sm font-medium transition";
const active = "border-dolook bg-dolook text-white";
const idle = "border-line bg-white text-muted hover:border-dolook/40";

/** Filters are mirrored in the URL (?status=…&division=…) so filtered views can be linked to. */
export function ProjectsFilter({ projects, locale, dict }: Props) {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [division, setDivision] = useState<DivisionFilter>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("status");
    const d = params.get("division");
    if (projectStatuses.includes(s as ProjectStatus)) setStatus(s as ProjectStatus);
    if (d && divisions.some((x) => x.slug === d)) setDivision(d as DivisionSlug);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (status !== "all") params.set("status", status);
    if (division !== "all") params.set("division", division);
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  }, [status, division]);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (status === "all" || p.status === status) && (division === "all" || p.division === division),
      ),
    [projects, status, division],
  );

  const countFor = (d: DivisionFilter) =>
    projects.filter((p) => (status === "all" || p.status === status) && (d === "all" || p.division === d)).length;

  // Only offer statuses that at least one project has.
  const statuses: [StatusFilter, string][] = [
    ["all", dict.projects.all],
    ...projectStatuses
      .filter((s) => projects.some((p) => p.status === s))
      .map((s): [StatusFilter, string] => [s, dict.projects[s]]),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div role="group" aria-label={dict.projects.filterStatus} className="flex flex-wrap gap-2">
          {statuses.map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={status === value}
              onClick={() => setStatus(value)}
              className={`${base} ${status === value ? active : idle}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div role="group" aria-label={dict.projects.filterDivision} className="flex flex-wrap gap-2">
          {(["all", ...divisions.map((d) => d.slug)] as DivisionFilter[]).map((slug) => {
            const label = slug === "all" ? dict.projects.all : divisions.find((d) => d.slug === slug)!.title[locale];
            return (
              <button
                key={slug}
                type="button"
                aria-pressed={division === slug}
                onClick={() => setDivision(slug)}
                className={`${base} ${division === slug ? active : idle}`}
              >
                {label} <span className="opacity-60">({countFor(slug)})</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-sm text-muted" aria-live="polite">
        {filtered.length} {dict.projects.count}
      </p>

      {filtered.length === 0 ? (
        <p className="border border-dashed border-line py-16 text-center text-muted">{dict.projects.empty}</p>
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
