import React from 'react';
import { motion } from 'framer-motion';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black min-h-screen">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="flex flex-col space-y-16">
          
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-5xl font-serif italic tracking-tighter">Contact me</h2>
            <p className="text-zinc-500 text-sm md:text-[15px] font-sans leading-relaxed tracking-tight max-w-2xl">
              I'm currently open to freelance opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to chat.
            </p>
          </div>

          {/* Icon */}
          <div className="flex justify-center py-4 md:py-8">
            <div className="text-zinc-800 scale-75 md:scale-100">
               <HiChatBubbleLeftRight size={140} />
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest ml-4">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest ml-4">Email</label>
                <input 
                  type="email" 
                  placeholder="johndoe@gmail.com" 
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest ml-4">Message</label>
              <textarea 
                rows="5" 
                placeholder="Type your message here..." 
                className="w-full bg-zinc-950/50 border border-white/5 rounded-3xl px-6 py-6 text-white text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-800 resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-white text-black font-bold uppercase tracking-widest text-[10px] py-4 rounded-2xl hover:bg-zinc-200 transition-all">
              Send Message
            </button>
          </form>

          {/* WhatsApp Support */}
          <div className="pt-12 border-t border-white/5 flex flex-col items-center space-y-4">
            <span className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Alternative Contact</span>
            <a 
              href="https://wa.me/8801315590623" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 text-zinc-500 hover:text-emerald-500 transition-colors"
            >
              <FaWhatsapp size={18} />
              <span className="text-[11px] font-bold tracking-[0.3em]">+880 1315 590623</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
