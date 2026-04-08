import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiLightningBolt, HiTerminal } from 'react-icons/hi';
import { HiOutlineCheckBadge } from 'react-icons/hi2';


const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Backend-First Developer architecting high-performance systems...";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const revealVariants = {
    hidden: { opacity: 0, filter: "blur(20px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div variants={revealVariants}>
                <span className="section-subtitle">The Engineering Mindset</span>
                <h2 className="section-title">Beyond The <span className="text-gradient">Logic</span></h2>
                <div className="h-8 mb-6">
                  <p className="text-cyan-400 font-mono text-xl md:text-2xl font-bold tracking-tight">
                    {typedText}<span className="animate-pulse">|</span>
                  </p>
                </div>
              </motion.div>

              <motion.div variants={revealVariants} className="space-y-6">
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                  Hello! I'm <span className="text-white font-medium">Forman Ali</span>, a specialized <span className="text-white underline decoration-cyan-500/30 underline-offset-8">Backend System Architect</span> and Full-Stack Developer. My journey is defined by transforming complex problems into elegant, scalable server-side solutions.
                </p>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                  I specialize in building secure APIs and high-concurrency architectures using <span className="text-cyan-400 font-medium">Django & Python</span>. My approach focuses on data integrity, performant queries, and seamless frontend integration with modern <span className="text-blue-400 font-medium">React</span> ecosystems.
                </p>
              </motion.div>

              {/* Achievement Badges */}
              <motion.div variants={revealVariants} className="flex flex-wrap gap-6 pt-6">
                <div className="glass px-8 py-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center min-w-[160px] group hover:border-cyan-500/30 transition-all">
                  <HiTerminal size={32} className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-extrabold text-white font-display">7th</span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">CS Semester</span>
                </div>
                <div className="glass px-8 py-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center min-w-[160px] group hover:border-blue-500/30 transition-all">
                  <HiOutlineCheckBadge size={32} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-extrabold text-white font-display">6+</span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Global Projects</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Timeline & Cards */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div variants={revealVariants} className="premium-card p-10 rounded-[3rem] border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                <h3 className="text-2xl font-extrabold text-white mb-8 font-display flex items-center gap-3">
                  <HiLightningBolt size={24} className="text-cyan-400" />
                  Core Expertise
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Systems", value: "Backend Architecture", color: "cyan" },
                    { label: "Database", value: "SQL & Performance Opt.", color: "blue" },
                    { label: "Workflow", value: "Efficient Development & Deployment Workflow", color: "indigo" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group/item">
                      <span className="text-slate-500 font-black text-[10px] tracking-widest uppercase">{item.label}</span>
                      <span className="text-white font-bold text-sm font-display group-hover/item:text-cyan-400 transition-colors">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={revealVariants} className="premium-card p-10 rounded-[3rem] border-white/5">
                <h3 className="text-2xl font-extrabold text-white mb-8 font-display italic">Evolution</h3>
                <div className="space-y-12">
                  <div className="relative pl-12 border-l-2 border-cyan-500/20">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse" />
                    <h4 className="text-white font-extrabold text-xl font-display mb-1">CST Specialization</h4>
                    <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Current | Jashore Poly.</p>
                    <p className="text-slate-400 font-light leading-relaxed text-base">Advanced systems design and full-stack integration mastery.</p>
                  </div>
                  
                  <div className="relative pl-12 border-l-2 border-white/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-700" />
                    <h4 className="text-slate-300 font-extrabold text-xl font-display mb-1">Foundational Sciences</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Graduated 2022</p>
                    <p className="text-slate-500 font-light leading-relaxed text-base">Mathematical logic and rigorous analytical training.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

