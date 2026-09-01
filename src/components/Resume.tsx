import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Github, 
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Software and DevOps Engineer (Backend)",
    company: "Stanbic IBTC Bank Limited",
    period: "August 2025 - Present",
    location: "Lagos, Nigeria",
    highlights: [
      "Developed and enhanced internal core banking BackOffice applications using .NET C# framework, ensuring data integrity and transactional consistency within a highly organized DevOps environment.",
      "Collaborated on a comprehensive Card System infrastructure, encompassing the full lifecycle of card operations from issuance and activation to transaction processing and settlement.",
      "Collaborated with cross-functional teams including frontend developers, testers, and project managers to deliver robust, scalable software solutions.",
      "Developed a sophisticated, real-time, multi-channel Notification System designed for high-throughput and reliability across diverse channels with logging and delivery status tracking.",
    ],
    skills: ["C# .NET", "Azure", "SQL", "Oracle", "OpenShift", "DevOps", "Kubernetes"],
  },
  {
    title: "Mid-Level Full Stack Engineer",
    company: "Nugi Technologies, Nigeria",
    period: "Feb 2024 - August 2025",
    location: "Nigeria",
    highlights: [
      "Designed, developed, and managed deployed web and mobile applications, ensuring high code quality and security standards.",
      "Led a software engineering team to develop a web application for the Budget Monitoring and Evaluation Ministry.",
      "Optimised internal processes for State budget preparation, including yearly projected expenditure and revenue planning, enhancing fiscal oversight with IRS Agency integration.",
      "Implemented key technical features, including secure authorization, auditing capabilities, data analytics, and visualization tools.",
      "Improved user experience with seamless form control for efficient data entry and reporting.",
    ],
    skills: ["TypeScript", "Docker", "PHP", "Node.js", "CodeIgniter", "MySQL", "PostgreSQL", "NestJS", "Laravel"],
  },
  {
    title: "IT Support Specialist",
    company: "DelonApps, Nigeria",
    period: "Jan 2023 - July 2023",
    location: "Nigeria",
    highlights: [
      "Managed and maintained the 3CX PBX system, ensuring uninterrupted communication services for call centre agents, configuring extensions, call routing, and voicemail settings.",
      "Deployed and managed server infrastructure (physical servers and VMs) utilizing Linux-based operating systems for optimal performance, security, and scalability.",
      "Implemented custom solutions and integrations using Python to enhance efficiency, developing scripts for automation, monitoring, and reporting.",
      "Provided technical support and troubleshooting assistance to staff, resolving PBX and virtual machine issues in a timely manner.",
    ],
    skills: ["3CX", "Google Cloud", "Python", "MySQL", "PostgreSQL", "Linux"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Zuri Internship, Nigeria",
    period: "Mar 2022 - Dec 2022",
    location: "Remote",
    highlights: [
      "Developed metadata extraction software as part of a cross-functional engineering team.",
      "Designed and implemented backend APIs and services using Node.js and Django REST Framework.",
      "Integrated cloud services to optimize scalability, reliability, and performance of software using cloud storage, compute, and networking resources.",
    ],
    skills: ["React.js", "Node.js", "Django", "Django REST Framework", "Cloud Services"],
  },
  {
    title: "Web Developer Intern",
    company: "Side Hustle Internship",
    period: "Sept 2021 - Dec 2021",
    location: "Remote",
    highlights: [
      "Specialised in creating dynamic websites, web applications, and Progressive Web Applications (PWAs) using HTML, CSS, Node.js, and PHP.",
      "Key contributor to the team that built 'MyPadiDoctor,' a medical solution translating creative concepts into functional digital solutions.",
    ],
    skills: ["HTML", "CSS", "Node.js", "PHP", "Laravel", "PWA"],
  },
];

const education = [
  {
    degree: "(B.Eng) Bachelor of Engineering in Electrical and Electronics Engineering",
    school: "Federal University of Agriculture, Abeokuta, Ogun State, Nigeria",
    year: "February 2023",
    honors: "First Class Hons (CGPA: 4.60 / 5.0)",
    details: "Focus on Systems Engineering, Signal Processing, Control Systems, and Software Engineering.",
  },
];

const certificates = [
  {
    title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
    issuer: "Microsoft",
    year: "2026",
    code: "AZ-400",
  },
  {
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2026",
    code: "GCP-PCA",
  },
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF / Linux Foundation",
    year: "2026",
    code: "KCNA",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    year: "2026",
    code: "AZ-204",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
    code: "AZ-900",
  },
  {
    title: "Cloud Development and Blockchain Technology",
    issuer: "Binance",
    year: "2023",
    code: "Binance",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado",
    year: "2022",
    code: "CU-DB",
  },
  {
    title: "Back-End Web Development in Node and Python",
    issuer: "KodeCamp / Zuri",
    year: "2022 - 2023",
    code: "Backend",
  },
];

const volunteerExperience = [
  {
    role: "Engineering Instructor & CAD Tutor",
    organization: "Cross River State University of Technology",
    period: "Faculty of Engineering",
    highlights: [
      "Delivered hands-on learning on relevant programming languages and CAD software tools, including Python, MATLAB, Simulink, ETAP, Proteus, and SPSS.",
      "Implemented interactive lesson plans and activities to provide the best teaching experience for undergraduate and postgraduate students.",
    ],
  },
  {
    role: "Cloud Engineering Tutor (Volunteer)",
    organization: "Guru Tech Hub, CRUTECH (NITDA)",
    period: "July 2023 - Dec 2023",
    highlights: [
      "Organised by Nigeria National Information Technology Development Agency (NITDA).",
      "Developed and delivered engaging technical lesson plans and instructional materials tailored to about 20 students.",
      "Facilitated interactive lab sessions across GCP, Azure, and DigitalOcean cloud platforms.",
    ],
  },
  {
    role: "Technical Mentor",
    organization: "Google Developer Student Club (GDSC)",
    period: "June 2021 - July 2022",
    highlights: [
      "Facilitated educative sessions and mentorship in software development (Frontend and Backend Programming) and Cloud Computing.",
    ],
  },
];

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"experience" | "education_certs" | "volunteer">("experience");

  return (
    <section id="resume" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles size={16} /> Professional Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Resume & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Result-driven Software and DevOps Engineer with 5+ years of experience designing, developing, 
            and maintaining scalable backend systems and cloud infrastructure across banking, government, and enterprise solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow shadow-lg"
              asChild
            >
              <a href="https://github.com/SonolaMoyo" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-2" />
                View CV / Download PDF
              </a>
            </Button>
            <Button variant="outline" className="border-primary/40 hover:bg-primary/10" asChild>
              <a href="https://www.linkedin.com/in/sonolamoyo2000" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl glass border border-white/10 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Briefcase size={16} />
              Work Experience ({experiences.length})
            </button>

            <button
              onClick={() => setActiveTab("education_certs")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "education_certs"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <ShieldCheck size={16} />
              Education & Certifications ({certificates.length + 1})
            </button>

            <button
              onClick={() => setActiveTab("volunteer")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === "volunteer"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <HeartHandshake size={16} />
              Volunteer & Mentorship ({volunteerExperience.length})
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 glass-hover relative overflow-hidden group border border-white/10 hover:border-primary/40 transition-all"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
                
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-1">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span>•</span>
                          <span className="text-muted-foreground">{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/80 text-secondary-foreground border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "education_certs" && (
          <motion.div
            key="education_certs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-2xl font-bold">Academic Education</h3>
              </div>

              {education.map((edu) => (
                <div key={edu.school} className="glass rounded-2xl p-6 md:p-8 glass-hover border border-white/10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium text-sm mt-1">{edu.school}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
                    🎓 {edu.honors}
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={22} />
                </div>
                <h3 className="text-2xl font-bold">Certifications & Credentials</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass rounded-xl p-5 glass-hover flex items-start gap-4 border border-white/10 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary px-2 py-0.5 bg-primary/10 rounded">
                          {cert.code}
                        </span>
                        <span className="text-xs text-muted-foreground">{cert.year}</span>
                      </div>
                      <h4 className="font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "volunteer" && (
          <motion.div
            key="volunteer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <HeartHandshake size={22} />
              </div>
              <h3 className="text-2xl font-bold">Volunteer & Community Engagement</h3>
            </div>

            {volunteerExperience.map((vol, index) => (
              <motion.div
                key={vol.role + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 glass-hover border border-white/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{vol.role}</h4>
                    <p className="text-primary font-medium text-sm">{vol.organization}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {vol.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {vol.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 rounded-full" asChild>
            <a href="https://github.com/SonolaMoyo" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              View GitHub Portfolio @SonolaMoyo
              <ExternalLink size={14} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

