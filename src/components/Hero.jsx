import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-col items-start gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 w-full"
          >
            <h1 className="text-white text-5xl md:text-8xl font-sans font-bold tracking-tighter leading-[0.85] break-words">
              Hi, I'm Forman
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">
              <span>DRF Specialist</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <span>backend</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800 hidden md:block"></span>
              <span>architect</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 max-w-2xl"
          >
            <p className="text-zinc-500 text-lg md:text-xl font-sans leading-relaxed tracking-tight opacity-90">
              I craft resilient backend ecosystems and scalable system architectures.
              Currently focused on building high-performance APIs and distributed environments that scale with demand.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
              <span className="text-zinc-400 text-[10px] md:text-[11px] font-medium tracking-wide">Available for consultation.</span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-zinc-600 text-[10px] md:text-[11px]">Contact</span>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  href="mailto:formanislamhridoy@gmail.com"
                  className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-sm text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                >
                  Email
                </motion.a>
                <span className="text-zinc-600 text-[10px] md:text-[11px]">or</span>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  href="/Resume.pdf"
                  className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-sm text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-8"
          >
            <motion.a 
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="https://github.com/HridoyExe" target="_blank" rel="noreferrer" className="px-3 py-1 text-[9px] md:px-4 md:py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-zinc-400 md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a 
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="https://www.linkedin.com/in/forman-ali-hridoy" target="_blank" rel="noreferrer" className="px-3 py-1 text-[9px] md:px-4 md:py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-zinc-400 md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ y: -2, color: "#ffffff" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="https://leetcode.com/u/7rnVUFUcCZ/" target="_blank" rel="noreferrer" className="px-3 py-1 text-[9px] md:px-4 md:py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-zinc-400 md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              LeetCode
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
