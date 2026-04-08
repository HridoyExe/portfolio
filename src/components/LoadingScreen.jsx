import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="w-24 h-24 rounded-3xl border-2 border-cyan-500/30 flex items-center justify-center relative">
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-3xl animate-[spin_3s_linear_infinite] clip-path-loading"></div>
            <span className="text-white font-black text-2xl font-display">FA</span>
          </div>
        </motion.div>

        <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden mb-4 relative">
          <motion.div 
            className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-white font-black text-4xl font-display tabular-nums">
            {percent}%
          </span>
          <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
            Initalizing Ecosystem
          </span>
        </div>
      </div>

      <style>{`
        .clip-path-loading {
          clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;
