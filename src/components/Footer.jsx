import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5">
            <NavLink to="/" className="text-3xl font-black tracking-tighter text-white mb-8 block font-display group">
              FORMAN<span className="text-cyan-500 group-hover:animate-pulse transition-all">.</span>
            </NavLink>
            <p className="text-slate-400 max-w-md mb-10 text-lg font-light leading-relaxed">
              Crafting premium digital experiences through scalable code and modern design. Dedicated to building the future of the web, one pixel at a time.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: FaGithub, href: 'https://github.com/HridoyExe', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/forman-ali-hridoy-197973401/', label: 'LinkedIn' },
                { icon: FaFacebook, href: 'https://www.facebook.com/fardin.hridoy18', label: 'Facebook' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-black text-xl mb-8 font-display italic">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Skills', path: '/skills' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path} 
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-medium hover:translate-x-2 block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-white font-black text-xl mb-8 font-display italic">Reach Out</h4>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-1">Location</span>
                <span className="text-slate-400 text-lg font-light">Tetulia, Panchagarh</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:formanislamhridoy@gmail.com" className="text-slate-400 text-lg font-light hover:text-cyan-400 transition-colors">
                  formanislamhridoy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Forman. Crafted with Passion.</p>
          <div className="mt-6 md:mt-0 flex gap-8">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
