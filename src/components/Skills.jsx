import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiDjango, SiPython, SiJavascript, SiReact, SiTailwindcss, 
  SiPostgresql, SiGit, SiPostman, SiCplusplus, SiC, 
  SiMysql, SiSupabase, SiBootstrap, SiHtml5, SiCss, SiCodeforces 
} from 'react-icons/si';
import { HiCode, HiChip, HiLightningBolt, HiExternalLink } from 'react-icons/hi';

const skillCategories = [
  {
    id: 'backend',
    title: 'Systems & Logic',
    icon: HiChip,
    skills: [
      { name: 'Django', icon: SiDjango, color: '#092E20', level: 85, tagline: 'Enterprise Backend' },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 90, tagline: 'Powerful Computation' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 80, tagline: 'Data Persistence' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75, tagline: 'Advanced Relational' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', level: 70, tagline: 'Serverless Design' },
    ]
  },
  {
    id: 'frontend',
    title: 'Interface Design',
    icon: HiCode,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 70, tagline: 'Infinite Interfaces' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 65, tagline: 'Logic & Event Flow' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95, tagline: 'Modern Aesthetics' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90, tagline: 'Semantic Web' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 85, tagline: 'Visual Excellence' },
    ]
  },
  {
    id: 'core',
    title: 'Problem Solving',
    icon: HiLightningBolt,
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 75, tagline: 'High-Level Logic' },
      { name: 'C', icon: SiC, color: '#A8B9CC', level: 80, tagline: 'Low-Level Mastery' },
      { name: 'DSA', icon: HiLightningBolt, color: '#FFD700', level: 70, tagline: 'Complex Algorithms' },
      { name: 'Git', icon: SiGit, color: '#F05032', level: 80, tagline: 'Collaborative Flow' },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
      className="premium-card p-8 group relative overflow-hidden rounded-[2.5rem] perspective-1000"
    >
      {/* Dynamic Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px]"
        style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
      ></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-white/5 shadow-xl"
            style={{ backgroundColor: `${skill.color}10`, borderColor: `${skill.color}20` }}
          >
            {skill.icon && <skill.icon size={32} style={{ color: skill.color }} />}
          </div>
          <span className="text-4xl font-extrabold text-white/[0.03] group-hover:text-cyan-500/10 transition-colors uppercase italic font-display">
            {skill.name.substring(0, 2)}
          </span>
        </div>
        
        <h3 className="text-2xl font-extrabold text-white mb-1 font-display">
          {skill.name}
        </h3>
        <p className="text-slate-500 text-[9px] uppercase tracking-[0.2em] mb-10 font-black font-mono">
          {skill.tagline}
        </p>

        {/* Progress Design */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span>Expertise Level</span>
            <span className="text-cyan-400">{skill.level}%</span>
          </div>
          <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut", delay: index * 0.05 }}
              className="h-full rounded-full bg-linear-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');
  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">The Technical Stack</span>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            I architect high-performance <span className="text-white font-medium">Server-Side Systems</span> and robust APIs, complemented by modern frontend technologies.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="glass p-1.5 rounded-[2.5rem] flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3.5 rounded-[2rem] font-extrabold transition-all duration-500 flex items-center gap-3 relative overflow-hidden ${
                  activeTab === cat.id
                    ? 'text-slate-950 shadow-2xl'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <cat.icon size={20} className="relative z-10" />
                <span className="relative z-10 text-xs tracking-widest uppercase">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Impact Links */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto"
        >
          <div className="premium-card p-12 md:p-16 rounded-[4rem] flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="w-24 h-24 rounded-[2rem] bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30 shrink-0 group-hover:rotate-12 transition-transform duration-700">
              <HiCode size={45} className="text-slate-900" />
            </div>
            
            <div className="flex-grow z-10 text-center lg:text-left">
              <h3 className="text-3xl font-extrabold text-white mb-4 font-display">Algorithmic Excellence</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                Continuous improvement through competitive programming and complex problem solving on global platforms.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="https://leetcode.com/u/7rnVUFUcCZ/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-extrabold hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center gap-2 border border-white/5 active:scale-95 text-[10px] tracking-widest uppercase shadow-xl"
                >
                  LeetCode Profile <HiExternalLink size={14} />
                </a>
                <a 
                  href="https://codeforces.com/profile/MdFormanAli" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-extrabold hover:bg-white hover:text-slate-950 transition-all flex items-center gap-2 border border-white/5 active:scale-95 text-[10px] tracking-widest uppercase shadow-xl"
                >
                  Codeforces Ranking <HiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

