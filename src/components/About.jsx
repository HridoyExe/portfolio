import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { category: 'Languages', items: 'Python, C, C++, JavaScript, SQL' },
    { category: 'Frameworks & Libraries', items: 'Django, DRF, React, Node.js, Tailwind CSS' },
    { category: 'Databases', items: 'PostgreSQL, MySQL, Supabase' },
    { category: 'Tools & DevOps', items: 'Git, GitHub, Docker (Learning), VS Code' }
  ];

  const journey = [
    {
      year: '2025',
      items: [
        { title: 'Diplom in Computer Science', desc: 'Finalizing core foundations in systems and software engineering at Panchagarh.' },
        { title: 'Backend Specialization', desc: 'Deepening expertise in Django ecosystems and distributed architectures.' }
      ]
    },
    {
      year: '2023-2024',
      items: [
        { title: 'Foundational Engineering', desc: 'Mastered C, C++, and Python fundamentals. Built scalable logical foundations.' }
      ]
    }
  ];

  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="space-y-24">
          
          {/* About Intro */}
          <div className="space-y-8 max-w-3xl">
            <div className="section-label">
               <span>About</span>
            </div>
            <h2 className="text-white text-5xl md:text-6xl font-serif italic tracking-tight">About me</h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-sans opacity-90 tracking-tight">
              I'm a <span className="text-white">Backend Developer</span> who enjoys building things that are simple, useful, and easy to use. 
              I like writing clean code, designing neat interfaces, and solving real problems with tech. 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Tech Stack */}
            <div className="space-y-12">
              <div className="section-label">
                <span>Core Ecosystem</span>
              </div>
              <div className="space-y-8">
                {techStack.map((stack, i) => (
                  <div key={i} className="flex flex-col gap-2">
                     <p className="text-zinc-300 text-[11px] font-bold uppercase tracking-[0.2em]">{stack.category}</p>
                     <p className="text-zinc-500 text-sm font-sans tracking-tight">{stack.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey */}
            <div className="space-y-12">
              <div className="section-label">
                <span>My Journey So Far</span>
              </div>
              
              <div className="space-y-12">
                {journey.map((period, i) => (
                  <div key={i} className="relative pl-12 border-l border-white/5 pb-8 last:pb-0">
                    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-900 border border-white/20"></div>
                    <div className="absolute left-4 top-0 py-1 px-3 rounded-sm bg-zinc-900 border border-white/10 text-white text-[9px] font-bold">
                      {period.year}
                    </div>
                    
                    <div className="space-y-8 pt-8">
                       {period.items.map((item, idx) => (
                         <div key={idx} className="space-y-2">
                           <h4 className="text-white text-sm font-bold tracking-tight">{item.title}</h4>
                           <p className="text-zinc-500 text-[13px] font-sans leading-relaxed">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
