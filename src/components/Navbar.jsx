import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/images/myphoto.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isScroll: true, hash: '#top' },
    { name: 'Skills', path: '/skills', isScroll: false },
    { name: 'Projects', path: '/projects', isScroll: false },
    { name: 'Contact', path: '/contact', isScroll: false },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.isScroll && location.pathname === '/') {
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.path);
      if (link.isScroll) {
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-full max-w-[850px] ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-8'
    }`}>
      <div className="px-6 md:px-8 flex justify-between items-center relative">
        {/* Logo/Icon */}
        <NavLink to="/" className="group shrink-0 relative z-[110]">
           <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500">
             <img src={profileImg} alt="Forman" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
           </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`px-4 py-1.5 rounded-sm border border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-[0.2em] transition-all
                ${location.pathname === link.path ? 'text-white border-white/20 bg-white/5' : 'text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/5'}
              `}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-[110] flex flex-col gap-1.5 items-end justify-center w-8 h-8"
        >
          <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 pt-24 pb-12 px-8 flex flex-col gap-6 md:hidden z-[100]"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-2xl font-serif italic text-left transition-all
                    ${location.pathname === link.path ? 'text-white' : 'text-zinc-600'}
                  `}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
