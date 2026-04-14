import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#000000] flex justify-center selection:bg-white/20">
        
        {/* The A4 "Page" Container */}
        <div className="w-[92%] md:w-full max-w-[850px] min-h-screen bg-black relative border-x border-dashed border-white/20 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Noise Overlay */}
          <div className="noise-bg absolute inset-0"></div>

          <Navbar />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                {children}
              </PageTransition>
            </AnimatePresence>
          </main>
          
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Layout;
