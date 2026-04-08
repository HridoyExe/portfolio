import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { HiCode, HiUsers, HiLightningBolt, HiStar } from 'react-icons/hi';

const stats = [
  {
    label: 'Projects Delivered',
    value: 6,
    suffix: '+',
    icon: HiCode,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    label: 'Code Commits',
    value: 1200,
    suffix: '+',
    icon: HiLightningBolt,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    label: 'Problem Solving',
    value: 170,
    suffix: '+',
    icon: HiStar,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    label: 'Client Satisfaction',
    value: 100,
    suffix: '%',
    icon: HiUsers,
    color: 'from-purple-600 to-pink-600',
  },
];

const Stats = () => {
  // Use CountUp as a component, handling potential ESM/CJS default wrap
  // In some environments, CountUp is a module object { default: Component }
  const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp.CountUp || CountUp);

  return (
    <div className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group mt-10"
            >
              <div className="premium-card p-8 rounded-[2.5rem] flex flex-col items-center text-center relative overflow-hidden h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-slate-950 mb-6 shadow-lg shadow-cyan-500/10 transition-transform duration-500 group-hover:rotate-6`}>
                  <stat.icon size={28} />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display">
                  <CountUpComponent end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  <span className="text-cyan-500">{stat.suffix}</span>
                </h3>
                
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] font-mono">
                  {stat.label}
                </p>

                {/* Animated Border */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
