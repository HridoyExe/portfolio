import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const SystemConsole = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: 'INFO', msg: 'Core systems initialized...', time: new Date().toLocaleTimeString() },
    { id: 2, type: 'SUCCESS', msg: 'Portfolio engine v2.0 online', time: new Date().toLocaleTimeString() },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() > 0.98) {
        addLog('INFO', `Viewport synchronized at ${window.scrollY}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addLog = (type, msg) => {
    setLogs(prev => [
      ...prev.slice(-4),
      { id: Date.now(), type, msg, time: new Date().toLocaleTimeString() }
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] font-mono text-[10px] w-64 md:w-72">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-3 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-zinc-500 uppercase tracking-widest font-bold">System Log</span>
               </div>
               <span className="text-[9px] text-zinc-700">DEBUG_MODE: ON</span>
            </div>
            
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2 scrollbar-none">
               {logs.map(log => (
                 <div key={log.id} className="flex gap-2 leading-tight">
                    <span className="text-zinc-700">[{log.time}]</span>
                    <span className={log.type === 'SUCCESS' ? 'text-emerald-500' : 'text-zinc-400'}>
                      {log.type}: {log.msg}
                    </span>
                 </div>
               ))}
               <div className="text-emerald-500/50 animate-pulse">$ listening for events...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 backdrop-blur-md transition-all group"
      >
        <FaTerminal className="group-hover:rotate-12 transition-transform" />
        <span className="uppercase tracking-[0.2em] font-bold text-[9px] md:text-[10px]">Console</span>
        {isOpen ? <FaChevronDown size={8} /> : <FaChevronUp size={8} />}
      </button>
    </div>
  );
};

export default SystemConsole;
