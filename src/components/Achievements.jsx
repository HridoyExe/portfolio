import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const milestones = [
  {
    title: "Algorithmic Mastery on LeetCode",
    description: "Successfully solved 90+ data structure and algorithm challenges, focusing on optimized time and space complexity.",
    date: "Ongoing",
    link: "https://leetcode.com/u/7rnVUFUcCZ/"
  },
  {
    title: "Competitive Programming at Codeforces",
    description: "Solved 80+ problems on Codeforces, developing rigorous logic and rapid problem-solving capabilities.",
    date: "Ongoing",
    link: "https://codeforces.com/profile/MdFormanAli"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bracket-header mb-12">
            <span className="text-white uppercase tracking-widest text-xs font-bold">Sharing What I Learn</span>
          </div>

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-zinc-900 pb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-2xl text-white font-display font-medium group-hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                      {item.title} 
                      <FaExternalLinkAlt size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-zinc-500 mt-2 text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-zinc-600 text-xs font-mono">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-medium border-b border-zinc-800 pb-1">
               View all blogs ↗
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
