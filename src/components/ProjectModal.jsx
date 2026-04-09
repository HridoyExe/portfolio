import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      window.lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      window.lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      window.lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto" data-lenis-prevent>
                <span className="section-subtitle mb-4 block underline decoration-cyan-500/30 underline-offset-4">
                  {project.type}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display">
                  {project.title}
                </h2>
                
                <div className="space-y-6 mb-10">
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-white/5 text-[10px] font-black text-cyan-400 rounded-xl border border-white/5 uppercase tracking-[0.1em]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all ${
                        link.primary 
                        ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-2xl' 
                        : 'glass text-white border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <link.icon size={20} />
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
