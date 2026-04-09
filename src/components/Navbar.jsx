import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiMenuAlt3, HiX, HiChevronRight } from 'react-icons/hi';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 z-[110] origin-left"
        style={{ scaleX }}
      />

      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
          ? 'py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
          : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <NavLink 
              to="/" 
              className="text-2xl font-black tracking-tighter text-white font-display group"
            >
              FORMAN<span className="text-cyan-500 group-hover:animate-pulse transition-all">.</span>
            </NavLink>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.15}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    relative text-[10px] font-black uppercase tracking-[0.2em] transition-colors
                    ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                  `}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    />
                  )}
                </NavLink>
              </Magnetic>
            ))}
            
            <Magnetic strength={0.3}>
              <NavLink
                to="/contact"
                className="px-6 py-2.5 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-500 transition-all active:scale-95 shadow-xl shadow-cyan-500/10"
              >
                Hire Me
              </NavLink>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 glass rounded-xl border-white/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 top-0 bg-slate-950/95 backdrop-blur-3xl z-[-1] flex flex-col pt-32 px-6"
            >
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black text-white flex items-center justify-between group py-4 border-b border-white/5"
                    >
                      <span className="group-hover:text-cyan-500 transition-colors uppercase font-display">{link.name}</span>
                      <HiChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-cyan-500" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
