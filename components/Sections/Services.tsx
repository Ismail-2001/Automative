import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionP = motion.p as any;

const services = [
  {
    title: "Interior Restoration",
    tier: "Tier I",
    desc: "Deep fiber extraction and pH-balanced heritage leather conditioning.",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Surface Correction",
    tier: "Tier II",
    desc: "Multi-stage orbital correction to achieve a flawless mirror-like clarity.",
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Nanotech Shield",
    tier: "Tier III",
    desc: "Permanent ceramic bonding for extreme hydrophobic self-cleaning properties.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-32" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">
            Curated Services
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-serif">The Collection</h2>
        </MotionDiv>
        <MotionP
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/40 max-w-[450px] font-light text-lg leading-relaxed"
        >
          Redefining automotive preservation through technical mastery and obsessive attention to detail.
        </MotionP>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {services.map((service, idx) => (
          <MotionDiv
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: idx * 0.2, ease: "easeOut" }}
            className="group flex flex-col bg-transparent"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-white text-2xl font-serif group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                  {service.tier}
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Services;