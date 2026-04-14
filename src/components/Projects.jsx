import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'SeatFlow',
    description: 'A high-performance Restaurant Management System. Built with a focus on real-time table orchestration and distributed booking logic.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    live: 'https://seatflow-frontend.vercel.app/',
    github: 'https://github.com/HridoyExe/seatflow-backend',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery'],
    icon: '🪑'
  },
  {
    title: 'FlexZone',
    description: 'An enterprise-grade Gym Management Platform emphasizing member analytics and complex subscription lifecycle management.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    live: 'https://flex-zone-frontend.vercel.app/',
    github: 'https://github.com/HridoyExe/flexzone-django',
    tech: ['Django', 'MySQL', 'React', 'Chart.js'],
    icon: '🏋️'
  },
  {
    title: 'EventPro',
    description: 'Scalable event registration ecosystem using serverless edge logic to handle high-concurrency ticket bursts.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000',
    live: 'https://event-management-mznj.vercel.app/',
    github: 'https://github.com/HridoyExe/eventpro-supabase',
    tech: ['Next.js', 'Supabase', 'PostgreSQL'],
    icon: '🎟️'
  }
];

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="dashed-card mb-8 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Image Area */}
        <div className="lg:col-span-5 relative overflow-hidden rounded-sm bg-zinc-900 aspect-[16/10]">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
           />
           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
        </div>

        {/* Project content Area */}
        <div className="lg:col-span-7 flex flex-col justify-start space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-3xl font-serif italic tracking-tight flex items-center gap-3">
              {project.title} <span className="text-lg opacity-40 grayscale">{project.icon}</span>
            </h3>
            
            <div className="project-link-group">
               <a href={project.live} target="_blank" rel="noreferrer" className="project-link-item">Live</a>
               <div className="project-link-divider"></div>
               <a href={project.github} target="_blank" rel="noreferrer" className="project-link-item">GitHub</a>
            </div>
          </div>

          <p className="text-zinc-500 text-[14px] font-sans leading-relaxed tracking-tight max-w-xl">
            {project.description}
          </p>

          <div className="space-y-4">
             <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Technologies Used:</span>
             <div className="flex flex-wrap gap-1.5">
               {project.tech.map((t, idx) => (
                 <span key={idx} className="px-2 py-0.5 bg-zinc-900 border border-white/5 text-zinc-400 text-[9px] font-bold tracking-widest rounded-sm uppercase">
                   {t}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="space-y-12">
          
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-5xl font-serif italic tracking-tighter">Projects</h2>
            <p className="text-zinc-600 text-[14px] font-sans leading-relaxed max-w-2xl">
              Every project you see here is something I've built with intent - to learn, to improve, or to solve a real-world need. Whether it's a crisp UI or a full-stack system, I care about making things that actually work and feel great to use.
            </p>
          </div>

          <div className="section-label">
            <span>Things I've Built</span>
          </div>

          <div className="space-y-6">
            {projectData.map((project, i) => (
              <ProjectCard key={i} project={project} i={i} />
            ))}
          </div>

          {/* View More */}
          <div className="pt-12 flex justify-end">
             <a href="/projects" className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] underline underline-offset-8 decoration-white/10 group-hover:decoration-white/40">View all projects</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">↗</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
