import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import projects, { CATEGORY_ORDER, type ProjectCategory } from "@/data/projects";

export default function Projects() {
  const grouped = CATEGORY_ORDER.reduce<Record<ProjectCategory, typeof projects>>(
    (acc, cat) => {
      acc[cat] = projects.filter((p) => p.category === cat);
      return acc;
    },
    {} as Record<ProjectCategory, typeof projects>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">
      <SectionHeading
        title="Projects"
        subtitle="Organized by area. Tier 1 projects have the most detailed write-ups."
      />

      <div className="space-y-16">
        {CATEGORY_ORDER.map((category) => {
          const categoryProjects = grouped[category];
          if (!categoryProjects || categoryProjects.length === 0) return null;

          return (
            <section key={category}>
              {/* Teal category label */}
              <p className="text-xs font-semibold tracking-widest uppercase mb-5"
                 style={{ color: "var(--accent)" }}>
                {category}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
