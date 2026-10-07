// ============================================================
// projects.ts — the single source of truth for all projects
// ============================================================
// ADDING A PROJECT:
//   1. Copy an existing object, paste at end of its category array
//   2. Set featured: true to show on homepage (keep to ~3 total)
//   3. Fill in the detail fields when you write up the case study
//   4. Add images to /public/images/ and reference them here
// ============================================================

export type ProjectType =
  | "Class Project"
  | "Lab"
  | "Research"
  | "Personal Project"
  | "Team Project"
  | "Ongoing";

// Categories control how projects are grouped on /projects
export type ProjectCategory =
  | "Photonics & Imaging"
  | "Digital Systems"
  | "Machine Learning & Computing"
  | "Analog & Control Systems"
  | "Embedded & Autonomous Systems"
  | "Outreach & Leadership";

export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;          // 1 sentence — shown on card and project header
  skills: string[];
  type: ProjectType[];
  category: ProjectCategory;
  featured: boolean;        // true = appears on homepage
  tier: 1 | 2 | 3;         // 1 = flagship, 2 = strong, 3 = supporting
  githubUrl?: string;
  externalUrl?: string;

  // ── Detail page ──────────────────────────────────────────
  overview?: string;        // 2–3 sentence executive summary
  problemStatement?: string;
  technicalApproach?: string;
  results?: string;     // finished projects
  status?: string;      //ongoing projects
  keyTakeaways?: string;
  images?: ProjectImage[];        // paths under /public/, e.g. "/images/zemax-spot.png"
  report?: string;
}

const projects: Project[] = [

  // ─────────────────────────────────────────────────────────
  // PHOTONICS & IMAGING
  // ─────────────────────────────────────────────────────────
  {
    slug: "fourier-optics",
    title: "Optical Imaging & Fourier Optics",
    summary:
      "Characterized optical imaging systems with PCX lenses and achromats, measured MTF and Rayleigh-limit resolution, and designed multi-element lens systems in Zemax.",
    skills: ["Ansys Zemax", "MATLAB", "ImageJ", "Köhler Illumination", "Fourier Optics", "Optical Bench"],
    type: ["Lab"],
    category: "Photonics & Imaging",
    featured: true,
    tier: 1,
    overview:
      "A ten-week lab portfolio exploring the physics and engineering of optical imaging systems. I explore concepts from first-principles of resolution limits to multi-element lens design and aberration correction in Zemax. Treating lenses as Fourier transformers, each experiment predicted a result analytically, built it on the bench, then compared measurement to simulation.",
    problemStatement:
      "How do optical imaging systems actually perform relative to their theoretical limits? And how do lens design choices translate into measurable changes in resolution and aberration?",
    technicalApproach:
	    "Aligned optical setups using PCX lenses and achromats under Köhler illumination. Measured system resolution using USAF 1951 resolution targets and compared against the Rayleigh diffraction limit. Investigated the back focal plane (BFP) as a spatial frequency domain by applying frequency-domain masks to selectively filter image content. Built and optimized Zemax models for singlet, Cooke triplet, and zoom lens architectures, minimizing RMS spot size and analyzing aberration contributions.",
    results:
      "Measured resolution often deviated from expected Rayleigh resolution limits, typically due to aberrations not accounted in calculations. Tangible changes in resolution seen when experimenting with various lens types and orientations. Spatial filtering experiments successfully isolated and removed specific frequency bands from target images, matching theoretical predictions from Fourier analysis. Zemax Cooke triplet lens design showed significant RMS spot size reduction over the singlet baseline.",
    keyTakeaways:
      "This lab made the Fourier relationship between image and frequency domains more intuitive rather than abstract. Zemax simulations revealed that aberration correction requires complex engineering design choices. There are real design tradeoffs between field flatness, chromatic correction, and element count that don't show up in paraxial approximations.",
	  images:
	    [ {src: "/images/optics_breadboard.jpg", caption: "Optical Breadboard"}, {src: "/images/PCX_shaded.png", caption: "PCX Design"}, {src: "/images/best_image.jpg", caption: "Image of Resolution Target taken with optical setup"}, {src: "/images/zoom_lens_design.png", caption: "Zoom Lens Design"} ],
    report: "/reports/"
 },
 {
    slug: "intro-photonics-project",
    title: "Photon-Scope",
    summary: "Leading a 5-person team to design and build an accessible optical kit that introduces undergraduate students to Fourier optics and photonics through hands-on experimentation.",
    skills: ["Fourier Optics", "Circuit Design", "CAD", "Data Acquisition", "Embedded C++", "Leadership"],
    type: ["Team Project","Ongoing"],
    category: "Photonics & Imaging",
    featured: false,
    tier: 1,
    overview:
      "As a Technical Lead for UCSD's 'Project in a Box', I proposed and am currently managing a year-long initiative to address the lack of hands-on photonics experiences in undergraduate ECE. Drawing from my experience in the Fourier Optics lab, I am designing a low-cost, portable optical setup that demonstrates Fraunhofer Diffraction, allowing students to physically visualize 1D and 2D Fourier transforms. I oversee a team of 5 students, managing the project timeline, circuit design, CAD modeling, and laser cutting to ensure the delivery of a working educational prototype by the end of the academic year.",   
    problemStatement:
      "Photonics remains an underrepresented subfield in undergraduate ECE curricula, often leaving abstract concepts like Fourier optics disconnected from practical application. Traditional optical labs are cost-prohibitive and complex for beginners. How can we make introductory photonics accessible and tangible for students of all experience levels?",
    technicalApproach: 
      "Designing a tabletop optical system that is able to demonstrate Fraunhofer Diffraction using a laser source, interchangeable spatial filters, and variable apertures. Developing a custom photodiode network coupled with an Arduino Nano to electronically capture and quantify the resulting diffraction patterns on a translucent scren. Fabricating custom aperture slides using CAD, laser cutting, and aluminum foil/mesh. Leading a team of 5, managing prototyping milestones, and designing for deployment through undergraduate workshops and end-of-the-year project showcase.",
    status: 
      "Fall Quarter (In Progress): Currently still in conceptualization and planning phase. A project charter has been established which defines the system architectue, preliminary technical requirements, and safety considerations. A team of students have been recruited, and a three-quarter development timeline has been mapped out. Finalizing initial component sourcing with project manager and preparing for Fall Quarter prototyping.",
    keyTakeaways: 
      "Taking on the the Technical Lead role has emphasized the importance of early milestone planning. Recruiting a team of students that I will mentor and oversee throughout the year will prove to be instrumental for my growth as an engineering student and an invaluable experience in interdisciplinary engineering teamwork.",
    images:  
      [],
 },

  // ─────────────────────────────────────────────────────────
  // DIGITAL SYSTEMS
  // ─────────────────────────────────────────────────────────
  {
    slug: "viterbi-decoder",
    title: "FPGA Viterbi Decoder",
    summary:
      "Designed and verified a synthesizable Viterbi decoder in SystemVerilog with a robustness testbench that derived the decoder's noise tolerance limits analytically.",
    skills: ["SystemVerilog", "Intel Quartus Prime", "ModelSim", "RTL Design", "Finite State Machines", "Error Correction"],
    type: ["Class Project"],
    category: "Digital Systems",
    featured: true,
    tier: 1,
    githubUrl: "https://github.com/jvichob/viterbi-decoder",
    overview:
      "Full RTL implementation of a Viterbi algorithm decoder for convolutional error-correcting codes, targeting synthesis on Intel FPGAs. The design covers the full datapath (branch metric computation, add-compare-select, and traceback) verified against a systematic noise injection testbench.",
    problemStatement:
      "Convolutional codes are ubiquitous in wireless communication, but implementing a Viterbi decoder in synthesizable RTL requires mapping a fundamentally sequential algorithm onto a parallel hardware datapath. The challenge is doing this correctly and then characterizing exactly where the decoder breaks under noise.",
    technicalApproach:
      "Implemented three interdependent SystemVerilog modules: the Branch Metric Unit (BMU) computing Hamming distances, the Add-Compare-Select (ACS) unit updating trellis path metrics, and the Traceback Unit (TBU) recovering the most likely transmitted sequence. Verified using a self-checking testbench that injected inverted bits at controlled quantities and intervals, sweeping across error rates to characterize decoder accuracy.",
    results:
      "Decoder functioned correctly up to the theoretical error threshold. Systematic testbench sweeps produced a closed-form formula for the maximum correctable bit-error rate as a function of constraint length. Design passed synthesis and timing closure in Quartus Prime.",
    keyTakeaways:
      "This project closed the loop between communication theory and hardware implementation in a concrete way. Verifying testbench results was as technically demanding as writing the RTL. The decoder has no observable failure mode until deliberately stress tested, and characterizing its limits required treating the verification problem as an experiment.",
	  images: // to-do
	    [{src:"/images/viterbi_decoder_rtl.png", caption: "RTL Schematic"}],
    report: "" // to-do
  },
  {
    slug: "fpga-calculator",
    title: "FPGA Calculator with IR Remote",
    summary:
      "FPGA-based four-function calculator accepting input from an IR remote, with full IR decoding implemented in SystemVerilog.",
    skills: ["Verilog", "AMD Vivado", "IR Decoding", "FPGA", "Seven-Segment Display"],
    type: ["Class Project"],
    category: "Digital Systems",
    featured: false,
    tier: 3,
    overview:
      "A digital systems project implementing an addition-only 4-bit operand calculator on an FPGA development board. Input is received from a consumer IR remote, decoded using a sony-remote signal recognizer, processed through cascaded full adders, and displayed on the board's seven-segment displays.",
    problemStatement:
      "Design a system that takes serial IR burst data from a consumer remote and turns it into reliable calculator input, solving both the low-level timing problem (decoding 38kHz-modulated bursts) and the higher-level datapath problem (multi-digit entry, operator precedence).",
    technicalApproach:
      "Implemented an IR protocol decoder as a state machine that measures pulse widths using a high-frequency reference counter. Designed the calculator datapath with a register file for multi-digit input, a cascaded system of full adders, and display multiplexing logic for the seven-segment outputs.",
    results:
      "System correctly decoded remote inputs and could perform addition with multi-digit numbers. Demonstrated live on-board during lab evaluation.",
    keyTakeaways:
      "IR decoding is a good lesson in working with real-world asynchronous signals. Our signal decoder has edge cases (repeat codes, leader pulse detection) that don't appear in the spec until you start testing with an actual remote.",
  },

  // ─────────────────────────────────────────────────────────
  // MACHINE LEARNING & COMPUTING
  // ─────────────────────────────────────────────────────────
  {
    slug: "context-encoder-inpainting",
    title: "Context Encoder Image Inpainting",
    summary:
      "Trained a U-Net context encoder with adversarial loss to reconstruct masked image regions, exploring the role of GAN training in perceptual image quality.",
    skills: ["PyTorch", "Python", "U-Net", "GANs", "NumPy", "Computer Vision"],
    type: ["Class Project"],
    category: "Machine Learning & Computing",
    featured: false,
    tier: 1,
    overview:
      "Implementation and analysis of a context encoder: a convolutional encoder-decoder network trained with both reconstruction and adversarial loss to fill in missing regions of images. The project explored how GAN training changes the character of inpainted regions compared to MSE loss alone.",
    problemStatement:
      "Image inpainting asks a model to hallucinate plausible content for masked regions, given only surrounding context. Pure pixel-level losses produce blurry reconstructions; adversarial training produces sharper but sometimes structurally incorrect results. The question is how to balance the two.",
    technicalApproach:
      "Built a U-Net encoder-decoder in PyTorch with skip connections, trained jointly with a patch discriminator. Ablated reconstruction loss weight against adversarial loss weight to characterize the sharpness/coherence tradeoff. Trained on masked natural image datasets with randomized mask placement.",
    results:
      "Adversarially-trained model produced visually sharper reconstructions than MSE-only baseline, particularly for structured content like edges and textures. Increasing adversarial weight beyond a threshold introduced artifacts at mask boundaries, identifying the practical stability ceiling.",
    keyTakeaways:
      "The tension between reconstruction fidelity and perceptual quality in inpainting is a microcosm of the broader GAN training challenge. Skip connections matter enormously for preserving spatial structure, as without them the decoder loses location awareness entirely.",
	  images:
	    [{src: "/images/results.png", caption: "Figure 1 - Results of optimized context encoder."}, {src: "/images/celeba_no_gan.png", caption: "Figure 2 - Ablation study: GAN removal"}],
    report: ""// to-do
  },
  {
    slug: "numerical-capacitance",
    title: "Numerical Capacitance Extraction",
    summary:
      "Computed capacitance of arbitrary 2D conductor geometries by numerically solving the Laplace equation and integrating surface charge density.",
    skills: ["MATLAB", "Numerical Methods", "Electromagnetics", "Scientific Computing", "Finite Differences"],
    type: ["Class Project"],
    category: "Machine Learning & Computing",
    featured: false,
    tier: 2,
    overview:
      "A numerical electromagnetics project implementing finite-difference solution via integral and matrix equations to extract capacitance from 2D conductor cross-sections.",
    problemStatement:
      "Analytical capacitance solutions only exist for simple geometries. Real IC interconnects have irregular cross-sections where numerical methods are required. The goal was to implement a grid-based solver and validate it against closed-form parallel-plate and coaxial results.",
    technicalApproach:
      "Discretized the charges using finite differences on a uniform grid. Applied Dirichlet boundary conditions at conductor surfaces, iteratively solved using successive over-relaxation (SOR), then extracted capacitance by integrating the resulting surface charge distribution.",
    results:
      "Determined charge and capacitance values for a parallel plate capacitor given parameters of plate width w and plate separation d. Visualized surface charge distribution of top plate, experimenting with various patch sizes. Demonstrated correct scaling behavior with conductor separation for parallel plates.",
    keyTakeaways:
      "Numerical field solvers are more physically transparent than I expected. The iterative relaxation is literally watching the field settle into its minimum-energy configuration. Understanding the convergence criterion is as important as writing the solver.",
	  images:
	    [{src:"/images/surface_charge_density.png"}, {src:"/images/capacitance_dependence.png"}],
    report: ""// to-do
  },

  // ─────────────────────────────────────────────────────────
  // ANALOG & CONTROL SYSTEMS
  // ─────────────────────────────────────────────────────────
  {
    slug: "wien-bridge-oscillator",
    title: "Wien Bridge Oscillator & Stability Analysis",
    summary:
      "Designed and built a Wien bridge oscillator, then characterized its stability margins experimentally using Bode plots, Nyquist plots, and FFT analysis.",
    skills: ["LTspice", "Oscilloscope", "FFT Analysis", "Bode Plots", "Nyquist Analysis", "Op-Amp Design"],
    type: ["Lab"],
    category: "Analog & Control Systems",
    featured: false,
    tier: 2,
    overview:
      "Full design, simulation, and hardware characterization of a Wien bridge RC oscillator, with emphasis on understanding oscillation as a stability boundary phenomenon rather than a circuit curiosity.",
    problemStatement:
      "The Barkhausen criterion tells you when a circuit will oscillate, but building one that oscillates cleanly — with a stable amplitude and low harmonic distortion — requires understanding the nonlinear mechanisms that actually set the limit cycle. The goal was to connect the control-systems view of oscillation to measured hardware behavior.",
    technicalApproach:
      "Designed the oscillator for a target frequency using the Wien network RC values, set loop gain slightly above unity using a lamp-based AGC, then characterized the open-loop transfer function experimentally by breaking the loop. Measured Bode and Nyquist plots to locate the gain/phase margins. Performed FFT on the output waveform to quantify harmonic distortion.",
    results:
      "Achieved stable oscillation at target frequency. Measured THD below 1% with AGC active. Bode plot confirmed gain and phase margins consistent with stable limit-cycle behavior, and Nyquist encirclement confirmed stability.",
    keyTakeaways:
      "Oscillators sit exactly at the stability boundary — designing one well requires understanding that boundary from both sides. The Nyquist criterion stopped being abstract the moment I could see the measured open-loop response circling the -1 point.",
  },
  {
    slug: "active-differentiator",
    title: "Active Differentiator Design & Compensation",
    summary:
      "Designed an op-amp differentiator, analyzed its high-frequency instability, and implemented compensation to restore stability while preserving differentiator behavior.",
    skills: ["LTspice", "Op-Amp Design", "Frequency Response", "Stability Analysis", "Oscilloscope"],
    type: ["Lab"],
    category: "Analog & Control Systems",
    featured: false,
    tier: 2,
    overview:
      "A practical analog design lab demonstrating why ideal op-amp differentiators are unstable in practice, and how to compensate them — a design problem encountered regularly in sensor signal conditioning.",
    problemStatement:
      "An ideal op-amp differentiator has gain that increases with frequency — which amplifies high-frequency noise and, combined with op-amp phase shift at high frequencies, causes the circuit to oscillate. The challenge is adding compensation that limits gain at high frequencies without degrading differentiator accuracy in the band of interest.",
    technicalApproach:
      "Built the ideal differentiator first and verified the instability. Added a series resistor at the input to create a gain ceiling at high frequencies, selected its value using the phase margin criterion from Bode analysis. Verified compensation adequacy through Bode measurement and step response.",
    results:
      "Compensated circuit achieved stable operation with phase margin above 45°. Differentiator accuracy within spec across the intended signal bandwidth. Step response showed no ringing.",
    keyTakeaways:
      "Every real op-amp differentiator needs this compensation — it's not optional. The lab made the abstract stability criterion concrete: you can see the gain margin disappear as frequency increases, and you can see it come back when you add the resistor.",
  },

  // ─────────────────────────────────────────────────────────
  // EMBEDDED SYSTEMS
  // ─────────────────────────────────────────────────────────
  {
    slug: "autonomous-vehicle",
    title: "ROS2-Based Autonomous Vehicle",
    summary:
      "Developing an autonomous vehicle using ROS2 and Python. Training a behavioral cloning model to map sensor data (Camera, LiDAR, GPS) to real-time control commands, collaborating with a cross-disciplinary team of ECE and MAE students.",
    skills: ["ROS2", "Python 3", "Machine Learning", "Computer Vision", "Controls", "Linux", "Sensor Fusion"],
    type: ["Class Project", "Ongoing"],
    category: "Embedded & Autonomous Systems",
    featured: true,
    tier: 1,
    overview:
      "A comprehensive project to develop an autonomous vehicle using ROS2 and Python, focusing on integrating sensor data with real-time control systems and multi-modal machine learning.",
    problemStatement:
      "Design and implement a robust autonomous driving system that can navigate complex environments while ensuring safety and efficiency.",
    technicalApproach:
      "Utilizing the ROS2 software stack, the ECE team is developing the control systems for the vehicle, training multiple models and implementing computer vision with an OAK-D Lite camera. To further increase precision we are implementing sensor fusion with LiDAR and GPS, to create a multi-modal perception pipeline. The motor of the vehicle is powered with an XT 60 VESC flashed with custom firmware to achieve higher speeds. The MAE team is respoonsible for chassis design and optimization using CAD software to laser cut and 3D print various components.",
    status:
      "Using DonkeySim, trained a behavioral cloning model to autonomously navigate the vehicle. Simulated track was designed by instructional team to match the real-world environment. Currently prototyping the hardware integration and preparing electrical systems to drive a physical vehicle.",
    keyTakeaways:
      "Despite the high expectations to deliver a fully functional autonomous vehicle by the end of the academic quarter, promising results have been achieved so far. The collaboration between the ECE and MAE students within the team allow for parallel development and testing.",
  },
  {
    slug: "solar-basketball-hoop",
    title: "Solar-Powered Basketball Scoreboard",
    summary:
      "Led circuit design for a portable solar-powered hoop with Arduino-driven ultrasonic shot detection; placed 2nd of 20 teams at UCSD IEEE Winter 2025.",
    skills: ["Arduino", "C++", "KiCAD", "Ultrasonic Sensing", "Solar Power"],
    type: ["Team Project"],
    category: "Embedded & Autonomous Systems",
    featured: false,
    tier: 3,
    overview:
      "End-to-end hardware project built in one quarter for UCSD IEEE's competitive quarterly challenge. The system uses an ultrasonic sensor and an Arduino-based counter to automatically detect and score basketball shots, powered entirely by an onboard solar cell and battery.",
    problemStatement:
      "Design a portable, self-powered scoring system that reliably detects ball passage through a hoop in an outdoor environment — with no wired power, variable lighting, and unpredictable shot trajectories.",
    technicalApproach:
      "Designed the sensing circuit around an HC-SR04 ultrasonic sensor mounted at the hoop rim. Wrote firmware to filter out false positives from nearby movement using a time-gating strategy. Integrated solar charging with LiPo battery and power management. Led PCB layout in KiCAD.",
    results:
      "Placed 2nd out of 20 competing teams on combined functionality, innovation, and presentation. Shot detection worked reliably across the tested range of shot angles and distances.",
    keyTakeaways:
      "Environmental robustness is a different engineering problem than bench functionality. Sensor placement and noise rejection dominate the design decisions in a way that clean-room prototypes don't expose.",
  },
  
  // ─────────────────────────────────────────────────────────
  // OUTREACH & LEADERSHIP
  // ─────────────────────────────────────────────────────────
  {
    slug: "k12-outreach-sp26",
    title: "HKN K–12 Engineering Outreach (Spring 2026)",
    summary:
      "Designed and delivered a hands-on EE lesson to socioeconomically disadvantaged K–12 students in San Diego through UCSD HKN.",
    skills: ["Arduino", "Curriculum Design", "Breadboarding", "Circuit Design", "Science Communication"],
    type: ["Team Project"],
    category: "Outreach & Leadership",
    featured: false,
    tier: 3,
    overview:
      "As part of UCSD's Eta Kappa Nu outreach program, designed and facilitated an interactive engineering lesson for underserved K–12 students. The lesson centered on building and driving a breadboard-based remote-controlled car, chosen to make abstract electrical concepts immediately tangible.",
    problemStatement:
      "How do you introduce real electrical engineering to students with no background, in a single class period, in a way that leaves them more interested in engineering than when they arrived?",
    technicalApproach:
      "Designed the circuit to be simple enough to assemble within 60-90 minutes but real enough to illustrate voltage, current, and motor control. Iterated on the lesson structure through dry runs, adjusting pacing and vocabulary based on what caused students to disengage. Ensured to promote the importance of collaboration in engineering processes. Included an interactive racing segment at the end of the lesson to incentivize students to finish assembling their car.",
    results:
      "Reached students across multiple sessions. Post-session surveys showed high engagement; several students expressed interest in pursuing engineering coursework.",
    keyTakeaways:
      "Teaching engineering to non-experts is its own technical challenge. The most effective moments were when the car moved for the first time as the theory became real to the students. Designing for that moment of realization shaped every other decision in the curriculum.",
  },

   {
    slug: "k12-outreach-fa26",
    title: "HKN K–12 Engineering Outreach (Fall 2026)",
    summary:
      "",
    skills: ["Arduino", "Curriculum Design", "Breadboarding", "Circuit Design", "Science Communication"],
    type: ["Team Project", "Ongoing"],
    category: "Outreach & Leadership",
    featured: false,
    tier: 3,
    overview:
      "",
    problemStatement:
      "How do you introduce real electrical engineering to students with no background, in a single class period, in a way that leaves them more interested in engineering than when they arrived?",
    technicalApproach:
      "",
    status:
      "",
    keyTakeaways:
      "",
  },

{
  slug: "cosmos-outreach",
  title: "COSMOS Photonics Workshop TA",
  summary:
    "Prepared and assisted COSMOS-related workshops pertaining to Photonics and EE design and principles to high school students.",
  skills: ["Curriculum Design", "CAD", "3D Printing", "Arduino", "C++", "Science Communication"],
  type: ["Team Project"],
  category: "Outreach & Leadership",   
  featured: false,
  tier: 3,
  overview:
    "Participated in assisting an ECE professor with designing, preparing, and teaching a two-day workshop on creating an Arduino-based solar panel which tracks sun movement throughout the day. The lesson consisted of two parts: CAD design & 3D printing and circuit building & embedded systems programming.",
  problemStatement:
    "How do you introduce and reinforce various engineering principles and skills to students of varying levels of comfort while also supporting their current knowledge and learning in photonics? Furthermore, how do you deliver the content for this small-scale project across multiple sessions such that every student is given sufficient time to engineer their solar trackers?",
  technicalApproach:   
    "Collaborated with multiple students and faculty members to design and prepare for the workshop. Performed multiple tests to ensure content is both technical and digestible for students to complete within the two sessions. Ensured to maintain a both professional and friendly attitude in both the preparation and teaching for the workshop.",
  results: "",
  keyTakeaways:
    "Science and engineering education can be quite challenging when delivering to a diverse group of students with various levels of experience. However, it is also extremely rewarding when the students are able to feel accomplished and proud of their completed projects.",
  // images: [{ src: "/images/cosmos-1.jpg", caption: "Optional caption" }],
},

];

export default projects;

// Helper: get unique categories in display order
export const CATEGORY_ORDER: ProjectCategory[] = [
  "Photonics & Imaging",
  "Digital Systems",
  "Machine Learning & Computing",
  "Analog & Control Systems",
  "Embedded & Autonomous Systems",
  "Outreach & Leadership",
];
