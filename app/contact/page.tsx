import SectionHeading from "@/components/SectionHeading";

const contactLinks = [
  { label: "Email", value: "jvichob@ucsd.edu", href: "mailto:jvichob@ucsd.edu", description: "Best for internship inquiries and research opportunities." },
  { label: "GitHub", value: "github.com/vichob-ece", href: "https://github.com/vichob-ece", description: "Source code for projects and lab work." },
  { label: "LinkedIn", value: "linkedin.com/in/jaden-vichob", href: "https://linkedin.com/in/jaden-vichob", description: "Professional background and connection requests." },
];

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">
      <SectionHeading title="Contact" />
      <p className="text-sm text-slate-600 max-w-md leading-relaxed mb-10">
        I am open to internship opportunities, undergraduate research positions,
        and conversations about hardware engineering, semiconductor devices, and
        photonics. Email is the best way to reach me.
      </p>
      <ul className="space-y-6 max-w-lg">
        {contactLinks.map((link) => (
          <li key={link.label} className="flex gap-4 items-start">
            <div className="w-16 pt-0.5 text-xs font-semibold uppercase tracking-wider shrink-0"
                 style={{ color: "var(--accent)" }}>
              {link.label}
            </div>
            <div>
              <a href={link.href}
                 target={link.href.startsWith("http") ? "_blank" : undefined}
                 rel="noopener noreferrer"
                 className="contact-link text-sm font-medium">
                {link.value} ↗
              </a>
              <p className="mt-0.5 text-xs text-slate-400">{link.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
