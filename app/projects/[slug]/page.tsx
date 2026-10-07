import { notFound } from "next/navigation";
import Link from "next/link";
import projects from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const categoryProjects = projects.filter((p) => p.category === project.category);
  const idx = categoryProjects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? categoryProjects[idx - 1] : null;
  const next = idx < categoryProjects.length - 1 ? categoryProjects[idx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-14 pb-24">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-10">
        <Link href="/projects"
          className="text-sm transition-colors"
          style={{ color: "var(--accent)" }}>
          ← Projects
        </Link>
        <span className="text-slate-200">/</span>
        <span className="text-sm text-slate-400">{project.category}</span>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent)" }}>
            {project.type}
          </span>
          {project.tier === 1 && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "var(--accent-light)", color: "var(--accent-text)" }}>
              Featured
            </span>
          )}
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 leading-snug">
          {project.title}
        </h1>
        <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-xl">
          {project.summary}
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <span key={skill}
                  className="text-xs px-2 py-0.5 rounded-md"
                  style={{ background: "var(--accent-light)", color: "var(--accent-text)" }}>
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.githubUrl || project.externalUrl) && (
          <div className="mt-4 flex gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--accent)" }}>
                GitHub ↗
              </a>
            )}
            {project.externalUrl && (
              <a href={project.externalUrl} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--accent)" }}>
                External Link ↗
              </a>
            )}
          </div>
        )}
      </header>

      {/* Teal accent divider */}
      <div className="h-px mb-10" style={{ background: "var(--accent-light)" }} />

      {/* Case study sections */}
      <div className="space-y-10 text-sm text-slate-700 leading-relaxed">

        {project.overview && (
          <Section title="Overview"><p>{project.overview}</p></Section>
        )}
        {project.problemStatement && (
          <Section title="Problem Statement"><p>{project.problemStatement}</p></Section>
        )}
        {project.technicalApproach && (
          <Section title="Technical Approach"><p>{project.technicalApproach}</p></Section>
        )}

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
        <Section title="Gallery">
          <div className="grid gap-6 sm:grid-cols-2">
              {project.images.map((image, i) => (
                <figure key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.caption ?? `${project.title} — figure ${i + 1}`}
                    className="rounded-lg border border-slate-200 w-full object-cover"
                  />
                  {image.caption && (
                    <figcaption className="mt-2 text-xs text-slate-600 text-center leading-snug">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        {project.results && (
          <Section title="Results"><p>{project.results}</p></Section>
        )}
        {project.status && (
          <Section title="Current Progress"><p>{project.status}</p></Section>
        )}
        {project.keyTakeaways && (
          <Section title="Key Takeaways"><p>{project.keyTakeaways}</p></Section>
        )}
        
        {project.report && (
        <a href="/public/files" target="_blank" rel="noopener noreferrer"
          className="btn-accent inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg">
          Download Report
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        )}
      </div>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <div className="mt-16 pt-8 border-t border-slate-100 flex items-start justify-between gap-6">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group max-w-xs">
              <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>← Previous</p>
              <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group max-w-xs text-right ml-auto">
              <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>Next →</p>
              <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                {next.title}
              </p>
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
