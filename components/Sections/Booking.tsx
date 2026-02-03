import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Booking: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-24 mb-24">
      <MotionDiv 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-16 md:p-32 flex flex-col items-center text-center gap-12 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <h2 className="text-white text-5xl md:text-7xl font-serif">Secure Your Session</h2>
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-bold">Inquire about our private calendar availability.</p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-8">
          <button className="relative overflow-hidden group bg-primary text-black px-16 h-16 font-black text-[10px] uppercase tracking-[0.4em] transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10">Request Booking</span>
          </button>
          <button className="relative overflow-hidden group bg-transparent border border-white/10 text-white px-16 h-16 font-black text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:border-primary/50 hover:text-primary hover:scale-105 active:scale-95">
            <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10">Portfolio</span>
          </button>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Booking;