import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Briefcase, GraduationCap, Award, Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Senior Cloud Engineer",
    company: "Tech Innovations Corp",
    period: "2022 - Present",
    highlights: [
      "Architected multi-region AWS infrastructure serving 10M+ users",
      "Led migration from monolith to microservices, reducing latency by 40%",
      "Implemented ML-powered monitoring and anomaly detection",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    highlights: [
      "Built React/Node.js applications for enterprise clients",
      "Developed real-time data visualization dashboards",
      "Integrated AI-powered features using TensorFlow.js",
    ],
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2018 - 2020",
    highlights: [
      "Created RESTful APIs and database architectures",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Contributed to open-source projects with 500+ stars",
    ],
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    year: "2018",
    focus: "Machine Learning & Distributed Systems",
  },
  {
    degree: "B.S. Computer Engineering",
    school: "UC Berkeley",
    year: "2016",
    focus: "Software Engineering",
  },
];

const topRepos = [
  {
    name: "cloud-infrastructure-kit",
    description: "Production-ready Terraform modules for AWS, GCP, and Azure with best practices built-in.",
    stars: 1240,
    forks: 320,
    language: "HCL",
    url: "https://github.com",
  },
  {
    name: "ai-recommendation-engine",
    description: "Scalable recommendation system using collaborative filtering and deep learning.",
    stars: 890,
    forks: 156,
    language: "Python",
    url: "https://github.com",
  },
  {
    name: "react-dashboard-kit",
    description: "Customizable React dashboard components with real-time data visualization.",
    stars: 2100,
    forks: 445,
    language: "TypeScript",
    url: "https://github.com",
  },
];

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Resume & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            My professional journey in software engineering, cloud architecture, and AI development.
          </p>
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow">
            <Download size={18} className="mr-2" />
            Download Resume PDF
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-6 glass-hover relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-accent before:rounded-l-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{exp.title}</h4>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Award size={12} className="text-primary mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-6 glass-hover"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <span className="text-xs text-muted-foreground">{edu.year}</span>
                  </div>
                  <p className="text-primary text-sm mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-xs">{edu.focus}</p>
                </motion.div>
              ))}
            </div>

            {/* Top GitHub Repos */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Github className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-bold">Top Repositories</h3>
            </div>

            <div className="space-y-4">
              {topRepos.map((repo, index) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-4 glass-hover block group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                      {repo.name}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{repo.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-primary" />
                      {repo.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              View Full GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
