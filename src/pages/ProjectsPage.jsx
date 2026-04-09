import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import Magnetic from '../components/Magnetic';
import SectionReveal from '../components/SectionReveal';
import flexzoneImg from '../assets/images/flexzone.png';
import eventImg from '../assets/images/event.png';
import seatflowImg from '../assets/images/seatflow.png';

const projects = [
  {
    title: 'SeatFlow',
    type: 'Systems Architecture',
    description: 'A professional restaurant management ecosystem enabling seamless seat reservations, real-time order tracking, and high-performance backend synchronization.',
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
    description: 'Dynamic fitness management platform for gym memberships, workout tracking, and subscription analytics with a sleek, interactive frontend.',
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
    description: 'Robust event coordination system handling registration, scheduling, and user management with an optimized Django-based backend.',
    tech: ['Django MVT', 'PostgreSQL', 'Tailwind CSS', 'JS'],
    image: eventImg,
    links: [
      { name: 'Source', url: 'https://github.com/HridoyExe/event-management', icon: FaGithub },
      { name: 'Live Platform', url: 'https://event-management-mznj.vercel.app/', icon: FaExternalLinkAlt, primary: true },
    ],
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onClick={onOpen}
      className="premium-card rounded-[3.5rem] overflow-hidden flex flex-col group hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all duration-700 cursor-pointer relative perspective-1000"
    >
      {/* Shine Effect */}
      <motion.div 
        style={{
          background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 80%)",
          left: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
          top: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "20%"]),
        }}
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Visual Section */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-80 overflow-hidden relative"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
        
        {/* Type Badge */}
        <div className="absolute top-8 left-8">
          <div className="glass px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400 border-cyan-500/20 backdrop-blur-2xl">
            {project.type}
          </div>
        </div>

        {/* View Details Label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="glass px-8 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest border-white/10">
             Explore Case Study
           </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="p-10 md:p-12 flex flex-col flex-grow relative bg-[#0a0c10]/50 border-t border-white/5">
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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-20 px-6 min-h-screen relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionReveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <ProjectCard 
                key={i} 
                project={project} 
                index={i} 
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </SectionReveal>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default ProjectsPage;
