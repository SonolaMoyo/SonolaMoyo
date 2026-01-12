import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Scalable Microservices with Kubernetes and Istio",
    excerpt: "A deep dive into designing resilient microservice architectures using service mesh patterns, traffic management, and observability.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    title: "Fine-Tuning LLMs for Enterprise Applications",
    excerpt: "Practical strategies for adapting large language models to domain-specific use cases while maintaining performance and reducing costs.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt: "Advanced patterns for optimizing React applications including code splitting, memoization, and virtual list implementations.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    title: "Infrastructure as Code Best Practices",
    excerpt: "How to structure Terraform modules, manage state effectively, and implement GitOps workflows for reliable deployments.",
    date: "Oct 22, 2024",
    readTime: "10 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <section id="blog" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Blog & <span className="text-gradient">Thought Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sharing knowledge and insights on cloud architecture, AI engineering, and software development best practices.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden glass-hover group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                    <Tag size={10} />
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Read Article <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-5 glass-hover group cursor-pointer flex gap-4"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-medium">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 text-sm">
                  {article.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            View All Articles
            <ArrowUpRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
