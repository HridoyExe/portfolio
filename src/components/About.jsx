import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiLightningBolt, HiTerminal } from 'react-icons/hi';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import SectionReveal from './SectionReveal';


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

  const { scrollYProgress } = useScroll();
  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

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
              <SectionReveal delay={0.2}>
                <motion.div variants={revealVariants}>
                  <span className="section-subtitle">The Engineering Mindset</span>
                  <h2 className="section-title">Beyond The <span className="text-gradient">Logic</span></h2>
                  <div className="h-8 mb-6">
                    <p className="text-cyan-400 font-mono text-xl md:text-2xl font-bold tracking-tight">
                      {typedText}<span className="animate-pulse">|</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div className="space-y-6">
                  <motion.p variants={revealVariants} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                    Hello! I'm <span className="text-white font-medium">Forman Ali</span>, a specialized <span className="text-white underline decoration-cyan-500/30 underline-offset-8">Backend System Architect</span> and Full-Stack Developer. My journey is defined by transforming complex problems into elegant, scalable server-side solutions.
                  </motion.p>
                  <motion.p variants={revealVariants} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                    I specialize in building secure APIs and high-concurrency architectures using <span className="text-cyan-400 font-medium">Django & Python</span>. My approach focuses on data integrity, performant queries, and seamless frontend integration with modern <span className="text-blue-400 font-medium">React</span> ecosystems.
                  </motion.p>
                </motion.div>

                {/* Achievement Badges */}
                <motion.div variants={revealVariants} className="flex flex-wrap gap-6 pt-6">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass px-8 py-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center min-w-[160px] group hover:border-cyan-500/30 transition-all shadow-xl"
                  >
                    <HiTerminal size={32} className="text-cyan-400 mb-3 group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-extrabold text-white font-display">7th</span>
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">CS Semester</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass px-8 py-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center min-w-[160px] group hover:border-blue-500/30 transition-all shadow-xl"
                  >
                    <HiOutlineCheckBadge size={32} className="text-blue-400 mb-3 group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-extrabold text-white font-display">6+</span>
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Global Projects</span>
                  </motion.div>
                </motion.div>
              </SectionReveal>
            </div>

            {/* Right Column: Timeline & Cards */}
            <div className="lg:col-span-5 space-y-10">
              <SectionReveal delay={0.4}>
                <motion.div variants={revealVariants} className="premium-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/5 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-8 font-display flex items-center gap-3">
                    <HiLightningBolt size={24} className="text-cyan-400" />
                    Core Expertise
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Systems", value: "Backend Architecture", color: "cyan" },
                      { label: "Database", value: "SQL & Performance Opt.", color: "blue" },
                      { label: "Workflow", value: "Optimized CI/CD & Deployment", color: "indigo" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 5 }}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/5 pb-4 gap-2 sm:gap-0 group/item cursor-default"
                      >
                        <span className="text-slate-500 font-black text-[10px] tracking-widest uppercase">{item.label}</span>
                        <span className="text-white font-bold text-sm md:text-base font-display group-hover/item:text-cyan-400 transition-colors text-left sm:text-right">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={revealVariants} className="premium-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/5 relative mt-10">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-10 font-display italic">Evolution</h3>
                  <div className="space-y-12">
                    <div className="relative pl-12">
                      {/* Animated Vertical Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           style={{ height: timelineHeight }}
                           className="absolute top-0 left-0 right-0 bg-linear-to-b from-cyan-400 to-blue-600"
                         />
                      </div>

                      <div className="relative mb-12">
                        <div className="absolute -left-[51px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
                        <h4 className="text-white font-extrabold text-xl font-display mb-1">Diploma in CST</h4>
                        <p className="text-cyan-400 text-[10px] font-mono font-black uppercase tracking-[0.2em] mb-4 bg-cyan-500/5 px-3 py-1 rounded-md inline-block">Jashore Polytechnic Institute | Session 2022-2023</p>
                        <p className="text-slate-400 font-light leading-relaxed text-base">Mastering advanced systems design and full-stack architecture.</p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[51px] top-1 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
                        <h4 className="text-white font-extrabold text-xl font-display mb-1">Secondary School Certificate</h4>
                        <p className="text-blue-400 text-[10px] font-mono font-black uppercase tracking-[0.2em] mb-4 bg-blue-500/5 px-3 py-1 rounded-md inline-block">Graduated 2022 | Science: GPA 4.56</p>
                        <p className="text-slate-400 font-light leading-relaxed text-base">Mathematical logic and rigorous analytical training.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

