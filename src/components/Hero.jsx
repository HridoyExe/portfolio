import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import myPhoto from '../assets/images/myphoto.jpeg';
import Magnetic from './Magnetic';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500, 900], [1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const nameText = "Forman Ali";
  const nameWords = nameText.split(" ");
  const titleText = "Architecting the Future of Web Systems";
  const titleWords = titleText.split(" ");

  return (
    <section className="relative min-h-screen flex lg:items-center lg:justify-center pt-16 pb-12 lg:pt-20 lg:pb-20">
      {/* Background Decor Wrapper (clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
             rotate: [0, 5, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div
           animate={{
             scale: [1, 1.3, 1],
             opacity: [0.2, 0.4, 0.2],
             rotate: [0, -5, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={typeof window !== 'undefined' && window.innerWidth > 1024 ? { y: y1, opacity } : {}}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 lg:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] font-mono">Open for opportunities</span>
            </motion.div>
            
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.05] font-display relative">
              <div className="absolute -left-20 -top-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
                <pre className="text-xs font-mono text-cyan-500 leading-relaxed">
                  {`class Architect(System):
  def __init__(self):
    self.role = "Backend"
    self.focus = "Performance"
    self.stack = ["Django", "AWS"]
    
  def optimize(self, query):
    return query.prefetch_related()`}
                </pre>
              </div>
              <motion.span variants={itemVariants} className="block text-slate-500 font-light text-xl md:text-2xl mb-1 lg:mb-2">Hello, I'm</motion.span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 mb-2 lg:mb-4">
                {nameWords.map((word, i) => (
                  <motion.span key={i} variants={itemVariants} className="text-gradient block">{word}</motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 md:gap-x-3 text-2xl md:text-4xl lg:text-5xl text-slate-400 font-medium tracking-tight">
                {titleWords.map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={itemVariants}
                    className={word === "Future" || word === "Web" || word === "Systems" ? "text-white" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-lg max-w-2xl mb-6 lg:mb-10 leading-relaxed mx-auto lg:mx-0 font-light px-4 lg:px-0">
              Senior-focused <span className="text-white font-medium">Backend Engineer</span> & Full-Stack Architect specialized in high-performance Django ecosystems and React interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start px-6 sm:px-0">
              <Magnetic strength={0.2}>
                <NavLink
                  to="/projects"
                  className="btn-premium group w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Portfolio
                    <HiArrowNarrowRight className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </NavLink>
              </Magnetic>
              
              <Magnetic strength={0.3}>
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border-white/5 uppercase text-[10px] tracking-widest text-center"
                >
                  Connect Now
                </NavLink>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative order-1 lg:order-2"
          >
            <motion.div 
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ willChange: "transform" }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] mx-auto group perspective-1000"
            >
              {/* Premium Floating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] border border-dashed border-cyan-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] border border-slate-500/10 rounded-full"
              />

              {/* Profile Wrapper */}
              <div className="absolute inset-0 bg-slate-900 rounded-[3rem] p-1.5 transition-shadow duration-700 group-hover:shadow-[0_0_80px_rgba(6,182,212,0.15)] relative animate-float">
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative">
                  <img
                    src={myPhoto}
                    alt="Forman Ali"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                {/* Static Badge on Hoodie */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 glass px-6 py-2.5 rounded-full border border-white/5 shadow-2xl flex items-center gap-2.5 backdrop-blur-md z-30 min-w-max">
                  <HiCheckCircle className="text-cyan-400 text-lg opacity-80" />
                  <span className="text-white/90 font-medium text-[10px] uppercase tracking-[0.15em] font-display">Specialized Backend</span>
                </div>
              </div>

              {/* Glowing Aura */}
              <div className="absolute inset-10 bg-cyan-500/20 blur-[100px] rounded-full -z-10 group-hover:bg-cyan-500/30 transition-colors duration-700"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
