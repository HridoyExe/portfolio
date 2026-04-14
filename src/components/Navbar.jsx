import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/images/myphoto.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-full max-w-[850px] ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6 md:py-8'
    }`}>
      <div className="px-6 md:px-8 flex justify-between items-center">
        {/* Logo/Icon */}
        <NavLink to="/" className="shrink-0">
           <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
             <img src={profileImg} alt="Forman" className="w-full h-full object-cover" />
           </div>
        </NavLink>

        {/* Links Row - Shared for All Screens */}
        <div className="flex gap-2 items-center overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`px-3 py-1.5 rounded-sm border border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-[0.1em] transition-all whitespace-nowrap
                ${location.pathname === link.path ? 'text-white border-white/20 bg-white/5' : 'text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/5'}
              `}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
