import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDjango, SiPython, SiPostgresql, SiReact, SiSupabase, SiGit,
  SiCplusplus, SiC, SiLeetcode, SiCodeforces, SiMysql, SiTailwindcss,
  SiJavascript, SiHtml5
} from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';

const coreSkills = [
  { name: 'Django', icon: SiDjango, color: 'text-[#092e20]', level: 'Scale' },
  { name: 'DRF', icon: SiDjango, color: 'text-[#092e20]', level: 'Scale' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776ab]', level: 'Core' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]', level: 'Data' },
  { name: 'MySQL', icon: SiMysql, color: 'text-[#4479a1]', level: 'Relational' },
  { name: 'React', icon: SiReact, color: 'text-[#61dafb]', level: 'UI' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06b6d4]', level: 'Design' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#f7df1e]', level: 'Logic' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ecf8e]', level: 'Auth' },
];

const problemSolving = [
  { name: 'C++', icon: SiCplusplus, color: 'text-[#00599c]', level: 'Core' },
  { name: 'C Language', icon: SiC, color: 'text-[#a8b9cc]', level: 'Base' },
  { name: 'DSA', icon: SiCplusplus, color: 'text-emerald-500', level: 'Algorithmic' },
];

const competitiveProfiles = [
  { name: 'LeetCode', icon: SiLeetcode, color: 'text-[#ffa116]', url: 'https://leetcode.com/u/7rnVUFUcCZ/' },
  { name: 'Codeforces', icon: SiCodeforces, color: 'text-[#1f8acb]', url: 'https://codeforces.com/profile/MdFormanAli' },
];

const webFoundations = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-[#e34f26]', level: 'Structure' },
  { name: 'CSS3', icon: FaCss3, color: 'text-[#1572b6]', level: 'Style' },
];

const SkillItem = ({ skill, i }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0"
  >
    <div className="text-zinc-500 group-hover:text-white transition-all">
      {skill.icon && <skill.icon size={20} />}
    </div>
    <div className="flex-grow">
      <h4 className="text-white text-sm font-bold tracking-tight">{skill.name}</h4>
      <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{skill.level}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Core & Foundations */}
            <div className="space-y-12">
              <div className="section-label">
                <span>Core Systems & Web</span>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {[...coreSkills, ...webFoundations].map((skill, i) => <SkillItem key={i} skill={skill} i={i} />)}
              </div>
            </div>

            {/* Problem Solving & Mastery */}
            <div className="space-y-12">
              <div className="section-label">
                <span>Problem Solving & Competitive</span>
              </div>
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-1">
                  {problemSolving.map((skill, i) => <SkillItem key={i} skill={skill} i={i} />)}
                </div>
                
                <div className="space-y-6">
                  <span className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-black">Algorithmic Profiles:</span>
                  <div className="flex gap-4">
                    {competitiveProfiles.map((p, i) => (
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        key={i}
                        className="reference-pill"
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
