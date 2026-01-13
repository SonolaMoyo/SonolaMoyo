import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Brain, Users } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiTensorflow, SiTypescript, SiMongodb, SiGraphql, SiNextdotjs, SiPostgresql } from "react-icons/si";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end applications with modern frameworks, clean architecture and best practices.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing scalable, resilient infrastructure on AWS and Azure.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Implementing intelligent solutions with Azure Foundry and OpenAPI.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading cross-functional teams and mentoring junior developers.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Passionate About <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With over 5 years of experience in software engineering, I specialize in building 
            full-stack applications, designing cloud infrastructure, and developing AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 glass-hover">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an efficiency driven and detail-oriented Full-stack Developer with 5 years of 
                  experience in designing, developing, and maintaining frontend 
                  pages and backend systems for web and mobile applications.
                </p>
                <p>
                  Proficient in Node.js, PHP, Python and .NET C# with strong 
                  expertise in RESTful API development, database management, 
                  and cloud services. Adept at collaborating with cross-functional 
                  teams to deliver robust, scalable, and efficient solutions
                </p>
                <p>
                  I have built experience across a diverse sectors, 
                  from Tele-Operations, working in the Government 
                  and Agencies sector, and now contributing within the Financial Sector
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="overflow-hidden relative">
                  <style>{`
                    @keyframes slide-skills {
                      from {
                        transform: translateX(0);
                      }
                      to {
                        transform: translateX(-50%);
                      }
                    }
                    .skills-slider {
                      animation: slide-skills 20s linear infinite;
                    }
                    .skills-slider:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  <div className="flex gap-4 skills-slider">
                    {/* First set of skills */}
                    {[
                      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
                      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
                      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
                      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
                      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
                      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
                      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
                      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
                      { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
                      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
                    ].map((skill, index) => (
                      <div
                        key={`tech-1-${index}`}
                        className="px-4 py-2 bg-[#0f172a] border border-primary/20 rounded-full flex items-center gap-2 group hover:border-primary/50 transition-colors duration-300 min-w-fit"
                      >
                        <skill.icon className={`${skill.color} text-lg`} />
                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
                      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
                      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
                      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
                      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
                      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
                      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
                      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
                      { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
                      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
                    ].map((skill, index) => (
                      <div
                        key={`tech-2-${index}`}
                        className="px-4 py-2 bg-[#0f172a] border border-primary/20 rounded-full flex items-center gap-2 group hover:border-primary/50 transition-colors duration-300 min-w-fit"
                      >
                        <skill.icon className={`${skill.color} text-lg`} />
                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 glass-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
