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

const ProjectCard = ({ project, index }) => {
  const liveLink = project.links.find(l => l.primary || l.name.toLowerCase().includes('live'))?.url;
  const githubLink = project.links.find(l => l.name.toLowerCase().includes('github') || l.name.toLowerCase().includes('architecture') || l.name.toLowerCase().includes('core') || l.name.toLowerCase().includes('source'))?.url;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="dashed-card group flex flex-col h-full bg-zinc-950/20"
    >
      {/* Visual Section */}
      <div className="relative overflow-hidden rounded-sm bg-zinc-900 aspect-[16/10] mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-sm border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
            {project.type}
          </div>
        </div>

        {/* Links Overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="px-3 py-1 bg-white text-black text-[9px] font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-colors">
              Live
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="px-3 py-1 bg-zinc-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all">
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Narrative Section */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-4">
          {project.title}
        </h3>
        <p className="text-zinc-500 mb-8 text-[13px] md:text-[14px] leading-relaxed font-sans line-clamp-3">
          {project.description}
        </p>

        {/* Tech Ecosystem */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-zinc-900 border border-white/5 text-zinc-500 text-[9px] font-bold uppercase tracking-widest rounded-sm">
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
    <div className="pt-40 pb-32 px-8 min-h-screen bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col space-y-8 md:space-y-12 mb-16 md:mb-24">
          <div className="section-label">
             <span>Impact Portfolio</span>
          </div>
          <h2 className="text-white text-4xl md:text-8xl font-serif italic tracking-tighter leading-tight">
            Digital <br />
            Architectures.
          </h2>
          <p className="text-zinc-500 max-w-2xl text-base md:text-lg font-sans leading-relaxed tracking-tight">
            A curation of my professional engineering work, focused on building high-concurrency backend systems and delightful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              index={i} 
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
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
