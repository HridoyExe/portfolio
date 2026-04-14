import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { useLenis } from 'lenis/react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen, lenis]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[200] cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[201] p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl max-h-[90vh] glass rounded-[3rem] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all z-20"
              >
                <HiX size={24} />
              </button>

              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-10 md:p-14 overflow-y-auto" data-lenis-prevent>
                <div className="section-label">
                  <span>Case Study</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8 tracking-tight">
                  {project.title}
                </h2>
                
                <div className="space-y-8 mb-12">
                  <p className="text-zinc-500 text-lg leading-relaxed font-sans tracking-tight">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] block">Tech Ecosystem:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`py-4 rounded-sm flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] transition-all ${
                        link.primary 
                        ? 'bg-white text-black hover:bg-zinc-200' 
                        : 'bg-zinc-900 text-white border border-white/10 hover:bg-zinc-800'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
