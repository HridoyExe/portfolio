import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Premium Noise Overlay */}
      <div className="noise-bg"></div>

      {/* Modern Cursor Glow */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-20 blur-[120px] transition-transform duration-700 ease-out hidden lg:block"
        style={{ 
          background: `radial-gradient(circle, var(--color-cyan-500), transparent 70%)`,
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`
        }}
      ></div>

      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

