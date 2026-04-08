import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPhone, HiCheckCircle } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi2';

import { FaGithub, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="section-subtitle">Collaborative Engineering</span>
          <h2 className="section-title">Let's Build the <span className="text-gradient">Future</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            I'm currently available for senior-level backend roles and high-impact full-stack collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-12"
          >
            <div className="space-y-12">
              {[
                { icon: HiMail, title: "Direct Email", value: "formanislamhridoy@gmail.com", color: "cyan" },
                { icon: HiLocationMarker, title: "Base Location", value: "Jashore, Bangladesh", color: "blue" },
                { icon: HiPhone, title: "Voice / WhatsApp", value: "+880 1315 590623", color: "indigo" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-10 group">
                  <div className="w-20 h-20 rounded-[2rem] glass flex items-center justify-center text-cyan-400 transition-all duration-700 border-white/5 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-12 shadow-2xl">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-xl font-display mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-lg font-light leading-relaxed truncate max-w-[200px] md:max-w-none hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/5">
              <h4 className="text-white font-extrabold text-xl mb-10 font-display italic">Social Ecosystem</h4>
              <div className="flex space-x-6">
                {[
                  { icon: FaGithub, href: 'https://github.com/HridoyExe' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/forman-ali-hridoy-197973401/' },
                  { icon: FaFacebook, href: 'https://www.facebook.com/fardin.hridoy18' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-500 hover:scale-110 active:scale-95 shadow-2xl"
                  >
                    <social.icon size={26} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 premium-card p-10 md:p-16 rounded-[4rem] border-white/5 relative"
          >
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-cyan-500/30 transition-all duration-500 peer placeholder-transparent font-light"
                    id="name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-8 top-5 text-slate-500 text-sm transition-all duration-500 pointer-events-none peer-focus:-top-3 peer-focus:left-6 peer-focus:text-cyan-500 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-cyan-500 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-linear-to-r from-cyan-500 to-blue-600 group-focus-within:w-full transition-all duration-700"></div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-cyan-500/30 transition-all duration-500 peer placeholder-transparent font-light"
                    id="email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-8 top-5 text-slate-500 text-sm transition-all duration-500 pointer-events-none peer-focus:-top-3 peer-focus:left-6 peer-focus:text-cyan-500 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-cyan-500 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Email Address
                  </label>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-linear-to-r from-cyan-500 to-blue-600 group-focus-within:w-full transition-all duration-700"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={6}
                  className="w-full bg-slate-950/50 border border-white/5 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-cyan-500/30 transition-all duration-500 peer placeholder-transparent font-light resize-none"
                  id="message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-8 top-6 text-slate-500 text-sm transition-all duration-500 pointer-events-none peer-focus:-top-3 peer-focus:left-6 peer-focus:text-cyan-500 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-cyan-500 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Brief Your Vision
                </label>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-linear-to-r from-cyan-500 to-blue-600 group-focus-within:w-full transition-all duration-700"></div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formState !== 'idle'}
                type="submit"
                className={`btn-premium w-full !py-6 text-sm font-black tracking-[0.3em] uppercase transition-all shadow-2xl overflow-hidden ${
                  formState === 'success' ? '!bg-green-500' : ''
                }`}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Deploy Message
                    </motion.div>
                  )}
                  {formState === 'loading' && (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      Transmitting...
                    </motion.div>
                  )}
                  {formState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <HiCheckCircle size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

