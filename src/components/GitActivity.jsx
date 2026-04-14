import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GitActivity = () => {
  const customTheme = {
    light: ['#0a0a0a', '#18181b', '#27272a', '#3f3f46', '#52525b'],
    dark: ['#0a0a0a', '#111111', '#1a1a1a', '#222222', '#333333'],
  };

  return (
    <section id="activity" className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
               <div className="bracket-header">
                 <span>GitHub Activity</span>
               </div>
               <h2 className="text-white text-3xl font-serif italic tracking-tight">Open Source Contributions</h2>
            </div>
            <div className="flex gap-12">
               <div className="text-right">
                  <p className="text-white text-2xl font-bold tracking-tighter">1.4k+</p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-black">Commits</p>
               </div>
               <div className="text-right">
                  <p className="text-white text-2xl font-bold tracking-tighter">320+</p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-black">Active Days</p>
               </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 rounded-2xl bg-zinc-950/50 border border-white/5 flex flex-col items-center">
            <div className="w-full overflow-hidden flex justify-center py-6">
              <GitHubCalendar 
                username="HridoyExe" 
                theme={customTheme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                colorScheme="dark"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GitActivity;
