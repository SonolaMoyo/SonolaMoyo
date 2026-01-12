import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Brain, Cpu, Database, Zap, Shield, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing and implementing scalable, fault-tolerant cloud infrastructure using AWS, GCP, and Azure with infrastructure as code.",
    points: ["Multi-region deployments", "Auto-scaling strategies", "Cost optimization"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Building intelligent systems from predictive models to LLM-powered applications that solve complex business problems.",
    points: ["Custom ML models", "LLM integration", "Real-time inference"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Creating robust data pipelines and architectures that enable real-time analytics and AI-driven insights.",
    points: ["ETL pipelines", "Data lakes", "Real-time streaming"],
  },
];

const useCases = [
  {
    challenge: "E-commerce Personalization",
    solution: "Built a recommendation engine using collaborative filtering and deep learning, deployed on AWS SageMaker with real-time inference.",
    impact: "35% increase in conversion rates",
    tags: ["TensorFlow", "AWS", "Redis"],
  },
  {
    challenge: "Infrastructure Cost Reduction",
    solution: "Migrated legacy on-prem systems to Kubernetes on GCP with auto-scaling and spot instances, implementing GitOps workflows.",
    impact: "60% reduction in cloud costs",
    tags: ["Kubernetes", "Terraform", "GCP"],
  },
  {
    challenge: "Document Processing Automation",
    solution: "Developed an NLP pipeline using GPT-4 and custom fine-tuned models for automated document classification and extraction.",
    impact: "90% reduction in manual processing",
    tags: ["OpenAI", "Python", "FastAPI"],
  },
];

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            AI & Cloud <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My approach to solving complex technical challenges with modern cloud and AI technologies.
          </p>
        </motion.div>

        {/* Solutions Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 glass-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap size={12} className="text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Problem-Solving Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Problem-Solving <span className="text-gradient">Case Studies</span>
          </h3>
        </motion.div>

        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.challenge}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 glass-hover"
            >
              <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="text-primary" size={18} />
                    <span className="text-sm font-medium text-primary">Challenge</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{useCase.challenge}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{useCase.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
                    <ArrowRight className="text-primary" size={16} />
                    <span className="text-sm font-semibold text-primary">{useCase.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
