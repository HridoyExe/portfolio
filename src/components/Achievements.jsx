import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTrophy, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';

import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    title: 'Codeforces Solver',
    description: 'Successfully solved 80+ algorithmic challenges on Codeforces, improving logic and speed.',
    icon: SiCodeforces,
    color: 'from-blue-500 to-cyan-500',
    stat: 'Solved: 80+',
    link: 'https://codeforces.com/profile/MdFormanAli',
  },
  {
    title: 'LeetCode Problem Solver',
    description: 'Solved 90+ data structure and algorithm challenges with optimized backend mindset.',
    icon: SiLeetcode,
    color: 'from-yellow-500 to-orange-500',
    stat: 'Solved: 90+',
    link: 'https://leetcode.com/u/7rnVUFUcCZ/',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">Impact & Recognition</span>
          <h2 className="section-title">
            Major <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A testament to my dedication to solving complex problems and delivering high-quality engineering solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 rounded-[3rem] group relative overflow-hidden flex flex-col sm:flex-row gap-8 items-center"
            >
              {/* Icon Section */}
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-slate-950 shrink-0 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <item.icon size={40} />
              </div>

              {/* Content Section */}
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-extrabold text-white font-display">{item.title}</h3>
                  <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest border-cyan-500/20">
                    {item.stat}
                  </span>
                </div>
                <p className="text-slate-400 font-light text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
                >
                  Verify Achievement <HiExternalLink size={14} />
                </a>
              </div>

              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
