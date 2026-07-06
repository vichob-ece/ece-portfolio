import SectionHeading from "@/components/SectionHeading";

const skills = [
  {
    group: "Hardware & Lab",
    items: ["PCB (KiCAD)", "Oscilloscope", "Soldering", "Optical Bench", "Breadboarding", "Arduino"],
  },
  {
    group: "Design & Simulation",
    items: ["Ansys Zemax", "LTspice", "PSpice", "AMD Vivado", "Intel Quartus", "ModelSim"],
  },
  {
    group: "Programming",
    items: ["SystemVerilog", "Python", "MATLAB", "C", "C++", "NumPy", "PyTorch"],
  },
  {
    group: "CAD",
    items: ["Fusion 360", "Onshape"],
  },
];

const coursework = [
  "Physical & Fourier Optics",
  "Fundamentals of Devices & Materials",
  "Electronic Materials Science of ICs",
  "Electronic Circuits and Systems",
  "Advanced Digital Design Project",
  "Introduction to Deep Learning",
  "Quantum Physics",
  "Electromagnetism",
];

// ── EDIT THESE ──────────────────────────────────────────────
// Lion dance: paste a YouTube embed URL (not the watch URL).
// Format: https://www.youtube.com/embed/VIDEO_ID
const LION_DANCE_VIDEO_URL = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
const LION_DANCE_DESCRIPTION =
  "Replace this with a short paragraph about your lion dance experience — performances you've led, events you've done, what the club means to you, etc.";

// HKN outreach: add paths to images inside /public/images/
// e.g. "/images/hkn-classroom.jpg"
const HKN_IMAGES: string[] = [
  "/images/hkn-placeholder-1.jpg",
  "/images/hkn-placeholder-2.jpg",
];
const HKN_DESCRIPTION =
  "Replace this with a short paragraph about the HKN outreach lessons — what you built, who you taught, what the goal was.";
// ────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">
      <SectionHeading title="About" />

      {/* ── Quick facts (now at top) ── */}
      <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs
                      pb-8 border-b border-slate-100">
        {[
          ["Degree",      "B.S. Electrical Engineering"],
          ["Focus",       "Devices, Materials & Photonics"],
          ["University",  "UC San Diego"],
          ["Graduation",  "Expected June 2027"],
          ["GPA",         "3.44 / 4.00"],
          ["Contact",     "jvichob@ucsd.edu"],
        ].map(([label, value]) => (
          <div key={label}>
            <span className="font-semibold text-slate-800 block mb-0.5">{label}</span>
            {label === "Contact" ? (
              <a href={`mailto:${value}`} className="transition-colors"
                 style={{ color: "var(--accent)" }}>
                {value}
              </a>
            ) : (
              <span className="text-slate-500">{value}</span>
            )}
          </div>
        ))}
      </div>

      {/* ── Main two-column layout ── */}
      <div className="grid gap-14 md:grid-cols-5">

        {/* Left: bio */}
        <div className="md:col-span-3 space-y-5 text-slate-600 text-sm leading-relaxed">
          <p>
            In the winter quarter of my first year, I attended a guest lecture by a senior
            principal engineer at Intel on gate-all-around CMOS. I could barely follow the
            physics being discussed. But I left with unusual clarity: at the nanoscale, the
            primary engineering challenges aren&apos;t circuits — they&apos;re materials and
            physics. That&apos;s exactly where I wanted to focus.
          </p>
          <p>
            From there, my coursework built deliberately toward the physical foundations of
            semiconductor devices — quantum mechanics, carrier statistics, fabrication
            processes. Concurrently, I took physical and Fourier optics, which opened a
            different direction: wave propagation, spatial frequency analysis, and the
            design of imaging systems. The two areas converged naturally on optoelectronics,
            where semiconductor devices and photonics intersect.
          </p>
          <p>
            I am most engaged when working on problems where the physics directly constrains
            the engineering. In the optics lab, that meant measuring whether a lens system
            actually reaches the Rayleigh diffraction limit. In digital design, it meant
            characterizing precisely where a Viterbi decoder breaks under noise. I prefer
            to understand why something works the way it does, not just that it does.
          </p>
        </div>

        {/* Right: skills + coursework */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--accent)" }}>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map(({ group, items }) => (
                <div key={group}>
                  <p className="text-xs font-medium text-slate-700 mb-1.5">{group}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-xs px-2 py-0.5 rounded-md"
                            style={{ background: "var(--accent-light)", color: "var(--accent-text)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}>
              Relevant Coursework
            </h3>
            <ul className="space-y-1.5">
              {coursework.map((course) => (
                <li key={course} className="text-xs text-slate-500 flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }} />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* ── Beyond Engineering ─────────────────────────────── */}
      <div className="mt-16 pt-10 border-t border-slate-100 space-y-14">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">
          Beyond the Classroom
        </h2>

        {/* Lion Dance */}
        <div id="lion-dance" className="scroll-mt-32">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
             style={{ color: "var(--accent)" }}>
            Kung Fu & Chinese Lion Dance
          </p>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <p className="text-sm text-slate-600 leading-relaxed">
              {LION_DANCE_DESCRIPTION}
            </p>

            {/* YouTube embed — replace LION_DANCE_VIDEO_URL above */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-200">
              <iframe
                src={LION_DANCE_VIDEO_URL}
                title="Kung Fu and Lion Dance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* HKN Outreach */}
        <div id="outreach" className="scroll-mt-24">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
             style={{ color: "var(--accent)" }}>
            HKN Engineering Outreach
          </p>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <p className="text-sm text-slate-600 leading-relaxed">
              {HKN_DESCRIPTION}
            </p>

            {/* Outreach photos — add real paths to HKN_IMAGES above */}
            <div className="grid grid-cols-2 gap-3">
              {HKN_IMAGES.map((src, i) => (
                <div key={i}
                     className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-50
                                flex items-center justify-center">
                  {src.includes("placeholder") ? (
                    /* Shown until you add real images */
                    <span className="text-xs text-slate-400 text-center px-2">
                      Add image path to<br />
                      <code className="font-mono">HKN_IMAGES</code>
                    </span>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={`HKN outreach ${i + 1}`}
                         className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
