import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Optimizing Django ORM for High-Concurrency Systems",
    date: "28 July 2024",
    link: "#"
  },
  {
    title: "Building Stateless Auth with JWT & DRF",
    date: "15 June 2024",
    link: "#"
  }
];

const TechnicalBlog = () => {
  return (
    <section id="blog" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-20">
          
          <div className="bracket-header">
            <span>Sharing What I Learn</span>
          </div>

          <div className="space-y-0">
            {blogs.map((blog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group py-10 border-b border-white/5 last:border-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer"
              >
                <div className="space-y-2">
                  <h3 className="text-white text-xl md:text-2xl font-serif italic tracking-tight group-hover:text-white/60 transition-all flex items-center gap-4">
                    {blog.title} 
                    <span className="text-xs opacity-0 group-hover:opacity-40 transition-opacity">↗</span>
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 text-zinc-600">
                  <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">🗓️ {blog.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 text-center text-zinc-600">
             <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-white/10 hover:decoration-white/40 transition-all">
               View all system logs ↗
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlog;
