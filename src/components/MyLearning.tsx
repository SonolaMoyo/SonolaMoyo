import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MyLearning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="my-learning" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Continuous Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I explore new technologies and master skills through continuous learning. Check out what I'm learning currently
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Decorative background gradients */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>

          <div className="relative glass rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 flex flex-col items-center text-center">
            
            {/* Logo/Icon Area */}
            <div className="w-24 h-24 mb-6 rounded-full bg-black/40 flex items-center justify-center border-2 border-orange-500/50 shadow-lg shadow-orange-500/20 overflow-hidden">
              <img 
                src="/pluralsight-dp.jpeg" 
                alt="Moyosoluwalorun Sonola" 
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">Moyosoluwalorun Sonola</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Check out my skills assessment and learning progress on Pluralsight.
            </p>

            <a
              href="https://app.pluralsight.com/profile/sonola-moyosoluwalor"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full font-semibold text-white tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
            >
              View my Profile
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyLearning;
