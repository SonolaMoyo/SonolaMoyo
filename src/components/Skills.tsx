import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaVuejs,
  FaInfinity,
  FaEye,
  FaLink,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    direction: "down",
    skills: [
      { name: "React", level: 95, icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", level: 88, icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue.js", level: 75, icon: FaVuejs, color: "#4FC08D" },
    ],
  },
  {
    title: "Backend",
    direction: "up",
    skills: [
      { name: "Node.js", level: 92, icon: FaNodeJs, color: "#339933" },
      { name: "Python", level: 88, icon: FaPython, color: "#3776AB" },
      { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#4169E1" },
      { name: "GraphQL", level: 82, icon: SiGraphql, color: "#E10098" },
      { name: "Redis", level: 78, icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Cloud & DevOps",
    direction: "down",
    skills: [
      { name: "AWS", level: 90, icon: FaAws, color: "#FF9900" },
      { name: "Docker", level: 88, icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", level: 82, icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", level: 85, icon: SiTerraform, color: "#7B42BC" },
      { name: "CI/CD", level: 88, icon: FaInfinity, color: "#4CAF50" },
    ],
  },
  {
    title: "AI & ML",
    direction: "up",
    skills: [
      { name: "TensorFlow", level: 80, icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", level: 75, icon: SiPytorch, color: "#EE4C2C" },
      { name: "OpenAI APIs", level: 90, icon: SiOpenai, color: "#412991" },
      { name: "LangChain", level: 85, icon: FaLink, color: "#1C3C3C" }, // Using generic link if SiLangchain unavailable, safe fallback
      { name: "Computer Vision", level: 70, icon: FaEye, color: "#FF5722" },
    ],
  },
];

const certifications = [
  { name: "Azure Developer", issuer: "Microsoft", year: "2025", icon: VscAzure },
  // { name: "Google Cloud Professional", issuer: "Google Cloud", year: "2023", icon: SiGooglecloud },
  // { name: "TensorFlow Developer", issuer: "Google", year: "2023", icon: SiTensorflow },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkillCard = ({ skill }: { skill: any }) => (
  <div className="flex items-center gap-4 bg-background/50 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full mb-4">
    <div
      className="p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/10 group-hover:from-primary/10 group-hover:to-primary/5 transition-colors"
      style={{ color: skill.color }}
    >
      <skill.icon size={24} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-foreground">{skill.name}</h4>
        <span className="text-sm font-bold text-primary">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  </div>
);

const InfiniteScrollColumn = ({
  skills,
  direction,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skills: any[];
  direction: string;
}) => {
  const columnRef = useRef(null);
  
  // Create a duplicated list for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl bg-black/20 border border-white/5">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      
      <motion.div
        className="p-4"
        animate={{
          y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                {category.title}
              </h3>
              <InfiniteScrollColumn
                skills={category.skills}
                direction={category.direction}
              />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-4 flex items-center gap-4 glass-hover"
              >
                <div className="relative w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="text-primary z-10" size={24} />
                  <Award className="text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" size={16} />
                </div>
                <div>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
