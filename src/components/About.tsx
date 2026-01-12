import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Brain, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end applications with modern frameworks and best practices.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing scalable, resilient infrastructure on AWS, GCP, and Azure.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Implementing intelligent solutions with TensorFlow, PyTorch, and LLMs.",
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
                  I started my career as a front-end developer and quickly expanded into 
                  full-stack development, driven by a curiosity to understand the entire 
                  application lifecycle.
                </p>
                <p>
                  My passion for cloud technologies led me to become certified in AWS and GCP, 
                  designing systems that handle millions of requests daily with 99.99% uptime.
                </p>
                <p>
                  Recently, I've been deeply immersed in AI/ML, building recommendation engines, 
                  NLP applications, and integrating LLMs into production systems.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "Python", "AWS", "Kubernetes", "TensorFlow"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
