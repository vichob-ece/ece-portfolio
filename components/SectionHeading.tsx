interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-slate-500 text-sm">{subtitle}</p>
      )}
      {/* Teal accent rule */}
      <div className="mt-3 h-px w-12" style={{ background: "var(--accent)" }} />
    </div>
  );
}
