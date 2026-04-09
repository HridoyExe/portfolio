import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';

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

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <CustomCursor />

        {/* Premium Noise Overlay */}
        <div className="noise-bg"></div>

        {/* performance-optimized fixed background */}
        <div className="fixed inset-0 pointer-events-none z-[-2] bg-slate-950">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `
              radial-gradient(circle at 50% -20%, rgba(6, 182, 212, 0.2) 0%, transparent 70%),
              radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/10 blur-[150px] rounded-full animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full animate-blob [animation-delay:2s]"></div>
          <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full animate-blob [animation-delay:4s]"></div>
        </div>

        <Navbar />
        <main className="flex-grow pt-24">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              {children}
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Layout;
