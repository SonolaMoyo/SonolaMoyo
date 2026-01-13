import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome I'm Moyosoluwalorun Sonola...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 mt-20 lg:mt-0">
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col justify-center"
          >
            {/* Typewriter Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center justify-center border border-white/20 rounded-full px-6 py-2"
            >
              <span className="text-lg md:text-xl font-medium text-primary">
                {text}
                <span className="text-primary animate-pulse ml-1">|</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Building the Future with{" "}
              <span className="text-gradient">Code & Cloud</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
               Software Engineer • DevOps • AI Engineer
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 glow"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-6 justify-center"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative Elements inspired by reference image */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Wavy line top left */}
              <motion.svg
                className="absolute top-0 left-0 w-16 h-16 text-primary/40"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                viewBox="0 0 100 100"
              >
                <path
                  d="M 10 50 Q 30 30, 50 50 T 90 50"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </motion.svg>

              {/* Circle decorations */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent/40 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Triangle play button */}
              <motion.div
                className="absolute -bottom-12 left-1/4 w-12 h-12 border-2 border-primary/40"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />

              {/* Plus sign */}
              <motion.div
                className="absolute -bottom-8 -right-8 text-4xl text-primary/30 font-light"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                +
              </motion.div>
            </div>

            {/* Profile Picture Container with decorative background */}
            <motion.div
              className="relative z-10"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Decorative background blob */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] rotate-6 blur-xl" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] -rotate-6" />
              
              {/* Placeholder for profile picture - Replace with your actual image */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="/my_cartoon_img.jpg"
                  alt="Moyosoluwalorun Sonola"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
