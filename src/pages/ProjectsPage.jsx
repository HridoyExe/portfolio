import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import flexzoneImg from '../assets/images/flexzone.png';
import eventImg from '../assets/images/event.png';
import seatflowImg from '../assets/images/seatflow.png';

const projects = [
  {
    title: 'SeatFlow',
    type: 'Systems Architecture',
    description: 'A professional restaurant management ecosystem enabling seamless seat reservations and real-time order tracking.',
    tech: ['Django REST', 'React 19', 'Supabase', 'Tailwind 4'],
    image: seatflowImg,
    links: [
      { name: 'Architecture', url: 'https://github.com/HridoyExe/seatflow-backend', icon: FaGithub },
      { name: 'Live Ecosystem', url: 'https://seatflow-frontend.vercel.app/', icon: FaExternalLinkAlt, primary: true },
    ],
  },
  {
    title: 'FlexZone',
    type: 'Member Management',
    description: 'Dynamic fitness management platform for gym memberships, workout tracking, and subscription analytics.',
    tech: ['Django', 'React', 'PostgreSQL', 'Framer Motion'],
    image: flexzoneImg,
    links: [
      { name: 'Core Engine', url: 'https://github.com/HridoyExe/FlexZone', icon: FaGithub },
      { name: 'Client Portal', url: 'https://flex-zone-frontend.vercel.app/', icon: FaExternalLinkAlt, primary: true },
    ],
  },
  {
    title: 'EventPro',
    type: 'Event Logistics',
    description: 'Robust event coordination system handling registration, scheduling, and user management with Django MVT.',
    tech: ['Django MVT', 'PostgreSQL', 'Tailwind CSS', 'JS'],
    image: eventImg,
    links: [
      { name: 'Source', url: 'https://github.com/HridoyExe/event-management', icon: FaGithub },
      { name: 'Live Platform', url: 'https://event-management-mznj.vercel.app/', icon: FaExternalLinkAlt, primary: true },
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="premium-card rounded-[3.5rem] overflow-hidden flex flex-col group hover:shadow-cyan-500/10 transition-all duration-700"
    >
      {/* Visual Section */}
      <div className="h-80 overflow-hidden relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:blur-[2px] transition-all"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
        
        {/* Type Badge */}
        <div className="absolute top-8 left-8">
          <div className="glass px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400 border-cyan-500/20 backdrop-blur-2xl">
            {project.type}
          </div>
        </div>

        {/* Hover Interaction Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex gap-4">
            {project.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  link.primary 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.4)]' 
                  : 'glass text-white border-white/10'
                }`}
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="p-10 md:p-12 flex flex-col flex-grow relative bg-[#0a0c10]/50">
        <h3 className="text-4xl font-extrabold text-white mb-4 font-display group-hover:text-gradient transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light line-clamp-3 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Tech Ecosystem */}
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-4 py-2 bg-white/[0.03] text-[10px] font-black text-slate-500 rounded-xl border border-white/5 uppercase tracking-[0.1em] hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="py-20 px-6 min-h-screen relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="section-subtitle">Impact Portfolio</span>
          <h2 className="section-title">
            Digital <span className="text-gradient">Architectures</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            A selection of my most complex full-stack applications, engineered for scalability, efficiency, and exceptional user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

