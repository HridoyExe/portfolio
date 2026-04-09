import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, 
  HiArrowRight, HiCheckCircle
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFacebook, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import SectionReveal from './SectionReveal';
import myPhoto from '../assets/images/myphoto.jpeg'; // Assuming it's here

const ContactInfo = ({ icon: Icon, label, value, link }) => (
  <motion.a 
    href={link}
    target={link.startsWith('http') ? '_blank' : undefined}
    rel={link.startsWith('http') ? 'noreferrer' : undefined}
    whileHover={{ x: 10 }}
    className="flex items-center gap-5 group cursor-pointer w-full"
  >
    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl shrink-0">
      <Icon size={20} />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">{label}</p>
      <p className="text-white font-bold text-sm sm:text-lg font-display truncate hover:whitespace-normal break-all">
        {value}
      </p>
    </div>
  </motion.a>
);

const SocialIcon = ({ Icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors shadow-lg"
  >
    <Icon size={20} />
  </motion.a>
);

const FormInput = ({ label, name, type = "text", placeholder, required = false }) => (
  <div className="space-y-3">
    <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] ml-2">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
    />
  </div>
);

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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="section-subtitle">Collaborative Engineering</span>
          <h2 className="section-title">Let's Build the <span className="text-gradient">Future</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            I'm currently available for junior-level backend roles and high-impact full-stack collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left Column: Info */}
          <SectionReveal delay={0.2}>
            <div className="space-y-8 h-full">
              {/* Profile Card */}
              <div className="premium-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img src={myPhoto} alt="Forman Ali" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-display">Forman Ali</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Available for Hire</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <ContactInfo 
                    icon={HiOutlineMail} 
                    label="Mail Me" 
                    value="formanislamhridoy@gmail.com" 
                    link="mailto:formanislamhridoy@gmail.com" 
                  />
                  <ContactInfo 
                    icon={HiOutlinePhone} 
                    label="Call Me" 
                    value="01315590623" 
                    link="tel:01315590623" 
                  />
                  <ContactInfo 
                    icon={HiOutlineLocationMarker} 
                    label="Location" 
                    value="Tetulia, Panchagarh" 
                    link="#" 
                  />
                </div>

                <div className="flex flex-wrap gap-3 mt-10 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <SocialIcon Icon={FaGithub} link="https://github.com/HridoyExe" />
                  <SocialIcon Icon={FaLinkedin} link="https://www.linkedin.com/in/forman-ali-hridoy-197973401/" />
                  <SocialIcon Icon={FaFacebook} link="https://www.facebook.com/fardin.hridoy18/" />
                </div>
              </div>

              {/* Instant Connect Card */}
              <div className="premium-card p-10 rounded-[3rem] border-white/5 bg-linear-to-br from-cyan-500/5 to-transparent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20">
                    <FaWhatsapp size={24} />
                  </div>
                  <h4 className="text-white font-extrabold font-display">Fast Response</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Need a quick technical consultation? Reach out via WhatsApp for immediate support.
                </p>
                <a 
                  href="https://wa.me/8801315590623" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 glass text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  Message Now <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: Form */}
          <SectionReveal delay={0.4}>
            <div className="lg:col-span-2 h-full">
              <div className="premium-card p-10 lg:p-16 rounded-[4rem] border-white/5 shadow-2xl relative overflow-hidden h-full">
                <div className="relative z-10">
                  <div className="mb-12">
                    <h3 className="text-3xl font-extrabold text-white mb-4 font-display">Initialize Conversation</h3>
                    <p className="text-slate-500 font-light">Fill out the form below and I'll respond within 24 business hours.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormInput 
                        label="Full Name" 
                        name="name" 
                        placeholder="e.g. John Doe" 
                        required 
                      />
                      <FormInput 
                        label="Email Identity" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <FormInput 
                      label="Subject / Project Focus" 
                      name="subject" 
                      placeholder="Backend Optimization, Full-Stack Design, etc." 
                      required 
                    />
                    
                    <div className="space-y-3">
                      <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] ml-2">Detail Narrative</label>
                      <textarea
                        required
                        name="message"
                        rows="6"
                        placeholder="Tell me about your technical mission or business goals..."
                        className="w-full bg-slate-900 border border-white/5 rounded-3xl p-6 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all placeholder:text-slate-700 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className={`btn-premium w-full py-6 group ${formState === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="relative z-10 flex items-center gap-3 text-sm">
                        {formState === 'loading' ? 'Transmitting Data...' : 'Dispatch Message'}
                        <HiArrowRight className={`group-hover:rotate-45 transition-transform ${formState === 'loading' ? 'animate-pulse' : ''}`} />
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {formState === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 glass bg-cyan-500/10 border-cyan-500/30 rounded-3xl text-cyan-400 font-bold text-center flex items-center justify-center gap-3"
                        >
                          <HiCheckCircle size={24} />
                          Mission Success! Communication link established.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
