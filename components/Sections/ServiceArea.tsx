import React from 'react';
import { Phone, Mail, Search, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

const locations = [
  "Beverly Hills & Bel-Air",
  "Malibu Estates",
  "The Palisades",
  "Hidden Hills",
  "Rolling Hills"
];

const ServiceArea: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-32 border-t border-white/5 overflow-hidden" id="service-area">
      <div className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block"
          >
            Our Reach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-5xl md:text-6xl font-serif"
          >
            Our Atelier Radius
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* List Column */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl font-serif border-b border-primary/20 pb-4">Service Area</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                We bring our bespoke studio experience directly to your private residence or corporate estate across the region's most prestigious enclaves.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                {locations.map((loc, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                      {loc}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-6 pt-8 border-t border-white/5">
              <h4 className="text-white/40 text-[9px] uppercase tracking-[0.5em] font-bold">Direct Access</h4>
              <div className="flex gap-8">
                <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-3">
                  <Phone size={18} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Concierge</span>
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-3">
                  <Mail size={18} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-8 relative group"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[600px] bg-[#0a0a0a] border border-white/5 overflow-hidden group-hover:border-primary/20 transition-all duration-1000">
              {/* Map Background Image */}
              <div 
                className="absolute inset-0 opacity-40 grayscale contrast-125 transition-transform duration-[10s] ease-linear group-hover:scale-105"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1200&auto=format&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              {/* SVG Abstract Map Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
                <defs>
                  <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="500" cy="300" r="220" fill="url(#gold-glow)" className="animate-spin-slow origin-[500px_300px]" stroke="#d4af37" strokeDasharray="10 10" strokeWidth="0.5" />
                <circle cx="500" cy="300" r="180" fill="none" stroke="#d4af37" strokeOpacity="0.4" strokeWidth="1.5" />
                
                {/* Ping points */}
                <g transform="translate(500, 300)">
                  <circle r="4" fill="#d4af37" />
                  <circle r="12" fill="none" stroke="#d4af37" strokeWidth="1" className="animate-ping" />
                </g>
                <g transform="translate(420, 220)"><circle r="3" fill="#d4af37" opacity="0.6" /></g>
                <g transform="translate(610, 380)"><circle r="3" fill="#d4af37" opacity="0.6" /></g>
                <g transform="translate(380, 420)"><circle r="3" fill="#d4af37" opacity="0.6" /></g>
              </svg>

              {/* Map UI */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] z-20">
                <div className="relative flex items-center bg-black/80 backdrop-blur-md border border-primary/30 h-14 px-6 transition-all duration-500 hover:border-primary">
                  <Search size={16} className="text-primary/60 mr-4" />
                  <input 
                    type="text" 
                    placeholder="CHECK YOUR LOCATION" 
                    className="bg-transparent border-none focus:ring-0 text-[10px] tracking-[0.3em] font-bold text-white placeholder:text-white/20 w-full uppercase outline-none"
                  />
                  <button className="text-primary hover:text-white transition-colors" aria-label="Use current location">
                    <Crosshair size={18} />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 text-right flex flex-col items-end pointer-events-none">
                <span className="text-white/20 text-[8px] tracking-[0.5em] font-bold uppercase mb-2">Operational Hub</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] font-light">34.0522° N, 118.2437° W</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;