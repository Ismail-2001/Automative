import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Interior Restoration",
    tier: "Tier I",
    desc: "Deep fiber extraction and pH-balanced heritage leather conditioning.",
    img: "https://picsum.photos/600/800?random=1&grayscale",
  },
  {
    title: "Surface Correction",
    tier: "Tier II",
    desc: "Multi-stage orbital correction to achieve a flawless mirror-like clarity.",
    img: "https://picsum.photos/600/800?random=2&grayscale",
  },
  {
    title: "Nanotech Shield",
    tier: "Tier III",
    desc: "Permanent ceramic bonding for extreme hydrophobic self-cleaning properties.",
    img: "https://picsum.photos/600/800?random=3&grayscale",
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-32" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">
            Curated Services
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-serif">The Collection</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 max-w-[450px] font-light text-lg leading-relaxed"
        >
          Redefining automotive preservation through technical mastery and obsessive attention to detail.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group flex flex-col bg-transparent"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
              <div
                className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                style={{ backgroundImage: `url("${service.img}")` }}
              ></div>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;