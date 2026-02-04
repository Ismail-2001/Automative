import React from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-24 mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-8 md:p-16 flex flex-col items-center text-center gap-12 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col gap-6 w-full max-w-4xl">
          <h2 className="text-white text-4xl md:text-6xl font-serif">Secure Your Session</h2>
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-bold">Priority access for new clientele.</p>
        </div>

        {/* Formspree Form Integration */}
        {/* REPLACE ACTION URL WITH YOUR FORMSPREE ID */}
        <form 
          action="https://formspree.io/f/mqazqgzd" 
          method="POST" 
          className="relative z-10 flex flex-col gap-6 w-full max-w-2xl mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              name="name"
              type="text" 
              placeholder="FULL NAME" 
              required
              className="bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-bold text-white placeholder:text-white/30 h-14 px-6 focus:border-primary/60 focus:ring-0 focus:bg-white/10 transition-all uppercase outline-none"
            />
            <input 
              name="email"
              type="email" 
              placeholder="EMAIL ADDRESS" 
              required
              className="bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-bold text-white placeholder:text-white/30 h-14 px-6 focus:border-primary/60 focus:ring-0 focus:bg-white/10 transition-all uppercase outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <input 
              name="phone"
              type="tel" 
              placeholder="PHONE NUMBER" 
              className="bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-bold text-white placeholder:text-white/30 h-14 px-6 focus:border-primary/60 focus:ring-0 focus:bg-white/10 transition-all uppercase outline-none"
            />
             <select 
              name="service"
              className="bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-bold text-white/70 h-14 px-6 focus:border-primary/60 focus:ring-0 focus:bg-white/10 transition-all uppercase outline-none appearance-none"
             >
               <option className="bg-neutral-900">Select Service Tier</option>
               <option className="bg-neutral-900" value="interior">Interior Restoration (Tier I)</option>
               <option className="bg-neutral-900" value="correction">Surface Correction (Tier II)</option>
               <option className="bg-neutral-900" value="ceramic">Nanotech Shield (Tier III)</option>
             </select>
          </div>
          <textarea 
            name="message"
            rows={4} 
            placeholder="VEHICLE DETAILS & SPECIAL REQUESTS" 
            className="bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-bold text-white placeholder:text-white/30 p-6 focus:border-primary/60 focus:ring-0 focus:bg-white/10 transition-all uppercase outline-none resize-none"
          ></textarea>
          
          <button type="submit" className="relative overflow-hidden group bg-primary text-black w-full h-16 font-black text-[10px] uppercase tracking-[0.4em] transition-all duration-500 shadow-2xl hover:scale-[1.01] active:scale-[0.99] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] mt-4">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10">Request Booking</span>
          </button>
        </form>

      </motion.div>
    </section>
  );
};

export default Booking;