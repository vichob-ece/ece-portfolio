import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import projects from "@/data/projects";

const interests = [
  "Semiconductor Devices",
  "Optical Imaging",
  "Photonics",
  "FPGA Design",
  "Optoelectronics",
  "Electronic Materials",
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="pt-20 pb-14">
        <p className="text-xs font-semibold tracking-widest uppercase mb-5 link-accent">
          UC San Diego · Electrical Engineering
        </p>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
          Jaden Vichob
        </h1>

        <p className="mt-4 text-lg text-slate-500 max-w-xl leading-relaxed">
          I build and characterize hardware — from optical imaging systems and
          FPGA decoders to analog circuits and embedded devices.
        </p>

        <p className="mt-4 text-sm text-slate-600 max-w-xl leading-relaxed">
          My interest sits at the intersection of semiconductor physics and
          photonics. I am drawn to the physical layer of engineering where
          material properties and device structure determine what is possible at
          the system level.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg">
            Resume
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a href="https://github.com/vichob-ece" target="_blank" rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border"
            style={{ borderColor: "var(--accent-border)" }}>
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/jaden-vichob" target="_blank" rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border"
            style={{ borderColor: "var(--accent-border)" }}>
            LinkedIn ↗
          </a>
          <a href="mailto:jvichob@ucsd.edu"
            className="link-accent inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border"
            style={{ borderColor: "var(--accent-border)" }}>
            Email
          </a>
        </div>
      </section>

      {/* ── Current Interests ── */}
      <section className="pb-14">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4"
           style={{ color: "var(--accent)" }}>
          Currently exploring
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((label) => (
            <span key={label} className="text-xs px-3 py-1.5 rounded-full border font-medium"
              style={{
                background: "var(--accent-light)",
                color: "var(--accent-text)",
                borderColor: "var(--accent-border)",
              }}>
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="pb-14">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work across imaging, digital hardware, and machine learning."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="link-accent text-sm font-medium transition-colors">
            View all projects →
          </Link>
        </div>
      </section>

      {/* ── Beyond the Classroom ── */}
      <section className="pb-20">
        <SectionHeading title="Beyond the Classroom" 
            subtitle="Experiences focused on teaching, mentorship, and community impact."
        />
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-xl border p-5"
               style={{ borderColor: "var(--accent-border)", background: "var(--accent-light)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2"
               style={{ color: "var(--accent)" }}>
              Kung Fu & Lion Dance
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--accent-text)" }}>
              Assistant instructor at Camarillo Kung Fu and Lion Dance Club since 2021.
              I teach weekly classes, lead lion dance choreography for public performances
              and private receptions, and help adapt shows to different venues and conditions.
            </p>
          </div>
          <div className="rounded-xl border p-5"
               style={{ borderColor: "var(--accent-border)", background: "var(--accent-light)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2"
               style={{ color: "var(--accent)" }}>
              Engineering Outreach
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--accent-text)" }}>
              Through UCSD&apos;s HKN, I design and deliver hands-on engineering lessons to
              K–12 students from underserved communities in the San Diego area.
              The goal is to empower students and expose them to the intriguing world of electrical engineering.
            </p>
          </div>
            <Link href="/about#lion-dance" className="text-sm font-medium transition-colors mt-4 inline-block link-accent">
                Learn more →
            </Link>
        </div>
      </section>

    </div>
  );
}
