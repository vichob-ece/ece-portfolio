import SectionHeading from "@/components/SectionHeading";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">
      <SectionHeading title="Resume" subtitle="Download or view my current resume." />
      <div className="max-w-md">
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          My resume summarizes my coursework, technical skills, lab experience,
          and project work. Feel free to reach out if you have questions or
          would like to discuss opportunities.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="btn-accent inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg">
          Download Resume (PDF)
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        <p className="mt-4 text-xs text-slate-400">
          To update: replace{" "}
          <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">/public/resume.pdf</code>{" "}
          with your new file.
        </p>
      </div>
    </div>
  );
}
