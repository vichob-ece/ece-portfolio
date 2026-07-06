"use client";

import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const typeBadgeColors: Record<string, string> = {
  "Class Project":    "bg-blue-50 text-blue-700 ring-blue-200",
  Lab:                "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Research:           "bg-violet-50 text-violet-700 ring-violet-200",
  "Personal Project": "bg-amber-50 text-amber-700 ring-amber-200",
  "Team Project":     "bg-rose-50 text-rose-700 ring-rose-200",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeClass = typeBadgeColors[project.type] ?? "bg-slate-50 text-slate-600 ring-slate-200";
  const tier1Style = project.tier === 1
    ? { borderLeft: "2px solid var(--accent)", borderRadius: "0 12px 12px 0" }
    : {};

  return (
    // Outer div so the GitHub link can live outside <Link> (avoids nested <a> tags)
    <div className="flex flex-col">
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition-all"
        style={tier1Style}
      >
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ring-1 ${badgeClass}`}>
          {project.type}
        </span>

        <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-slate-700 transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
              {skill}
            </span>
          ))}
          {project.skills.length > 4 && (
            <span className="text-xs text-slate-400 px-1 py-0.5">
              +{project.skills.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-5">
          <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
            View project →
          </span>
        </div>
      </Link>

      {/* GitHub link sits outside <Link> to avoid the nested <a> hydration error */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 px-1 text-xs text-slate-400 hover:text-slate-700 transition-colors self-start"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
