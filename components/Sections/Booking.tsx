import React from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-24 mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-16 md:p-32 flex flex-col items-center text-center gap-12 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <h2 className="text-white text-5xl md:text-7xl font-serif">Secure Your Session</h2>
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-bold">Inquire about our private calendar availability.</p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-8">
          <button className="bg-primary text-black px-16 h-16 font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95">
            Request Booking
          </button>
          <button className="bg-transparent border border-white/10 text-white px-16 h-16 font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white/5 transition-all duration-500 hover:scale-105 active:scale-95">
            Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Booking;