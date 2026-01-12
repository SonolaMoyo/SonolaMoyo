import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, TrendingUp, DollarSign, Clock } from "lucide-react";

const testimonials = [
  {
    quote: "An exceptional engineer who transformed our legacy system into a modern, scalable cloud architecture. The migration was seamless and resulted in significant cost savings.",
    author: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Their AI expertise helped us build a recommendation system that increased our conversion rates by 40%. Highly skilled in both the technical implementation and business impact.",
    author: "Michael Roberts",
    role: "VP Engineering, DataFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "A true full-stack professional who can handle everything from database optimization to beautiful frontend interfaces. Delivered our project ahead of schedule.",
    author: "Emily Zhang",
    role: "Product Manager, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

const caseStudies = [
  {
    company: "FinTech Startup",
    metric: "99.9%",
    label: "Uptime Achieved",
    description: "Designed and implemented a highly available payment processing system on AWS with multi-region failover.",
    icon: TrendingUp,
  },
  {
    company: "E-commerce Platform",
    metric: "$2M+",
    label: "Annual Savings",
    description: "Optimized cloud infrastructure and implemented auto-scaling, reducing operational costs by 65%.",
    icon: DollarSign,
  },
  {
    company: "Healthcare Provider",
    metric: "10x",
    label: "Faster Processing",
    description: "Built an ML pipeline for medical document processing, reducing manual review time from hours to minutes.",
    icon: Clock,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            What colleagues and clients say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 glass-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Impact <span className="text-gradient">Highlights</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl p-8 text-center glass-hover group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <study.icon className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-gradient mb-2">{study.metric}</p>
              <p className="text-sm font-medium text-foreground mb-3">{study.label}</p>
              <p className="text-muted-foreground text-xs mb-4">{study.company}</p>
              <p className="text-muted-foreground text-sm">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
