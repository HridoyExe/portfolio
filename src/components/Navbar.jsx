import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-cyan-500 to-blue-600 origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6">
        <div className={`relative flex justify-between items-center transition-all duration-500 px-8 py-3 rounded-[2rem] ${
          scrolled ? 'glass border-white/5 shadow-2xl backdrop-blur-2xl' : 'bg-transparent border-transparent'
        }`}>
          <NavLink to="/" className="group flex items-center gap-2">
            <motion.span 
              className="text-2xl font-black tracking-tighter text-white font-display"
              whileHover={{ scale: 1.05 }}
            >
              FORMAN<span className="text-cyan-500 group-hover:animate-pulse">.</span>
            </motion.span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-full relative group ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-700/50 rounded-full border border-white/5 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <div className="w-4"></div>
            <NavLink
              to="/contact"
              className="px-6 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 w-full px-6 pt-2 pb-10 md:hidden"
          >
            <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center space-y-6 shadow-2xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-bold transition-all ${
                        isActive ? 'text-cyan-500 scale-110' : 'text-slate-400 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-black rounded-2xl shadow-xl shadow-cyan-500/20"
              >
                Hire Me
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
