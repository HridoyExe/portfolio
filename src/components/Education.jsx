import React from 'react';
import { motion } from 'framer-motion';

const academicItems = [
  {
    year: "2022 — Present",
    title: "Diploma in Computer Science & Technology",
    desc: "Focusing on systems design, data structures, and engineering high-performance software at Jashore Polytechnic Institute.",
    institution: "Jashore Polytechnic Institute"
  },
  {
    year: "2022",
    title: "Secondary School Certificate (Science)",
    desc: "Strong foundation in mathematics and logical reasoning. Graduated from Shipaipara High School with GPA: 4.56",
    institution: "Shipaipara High School"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="space-y-16">
          
          <div className="section-label">
            <span>My Journey So Far</span>
          </div>

          <div className="space-y-12">
            {academicItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-[3.5px] top-6 bottom-0 w-[1px] bg-zinc-900"></div>
                
                <div className="absolute left-0 top-0 py-1 px-3 rounded-sm bg-zinc-900 border border-white/10 text-white text-[10px] font-bold">
                  {item.year.split(' — ')[0]}
                </div>
                
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    </div>
                    <h3 className="text-white text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="pl-8 space-y-2">
                    <p className="text-zinc-500 text-sm font-sans leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                    <span className="inline-block text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-black">
                      {item.institution}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
