import React from 'react';
import { Award, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    id: "01",
    icon: Award, 
    label: "Master Artisans",
    desc: "Certified craftsmen dedicated to the preservation of automotive excellence."
  },
  { 
    id: "02",
    icon: ShieldCheck, 
    label: "Paint Protection",
    desc: "Advanced ceramic formulas providing enduring gloss and resilience."
  },
  { 
    id: "03",
    icon: Sparkles, 
    label: "Molecular Clean",
    desc: "Hospital-grade sanitation ensuring a pristine interior environment."
  },
  { 
    id: "04",
    icon: Clock, 
    label: "Concierge Service",
    desc: "Seamless door-to-door logistics tailored to your schedule."
  },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-obsidian py-32 border-b border-white/5 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
            className={`
              relative flex flex-col items-center text-center p-8 group transition-colors duration-500
              ${idx !== features.length - 1 ? 'md:border-r border-white/5' : ''}
              ${idx !== features.length - 1 ? 'border-b md:border-b-0 pb-12 md:pb-8 mb-12 md:mb-0' : ''}
            `}
          >
            {/* Hover Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center opacity-50"></div>

            {/* Index Number */}
            <span className="text-white/10 font-serif text-4xl mb-8 group-hover:text-primary/20 transition-colors duration-500">
              {feature.id}
            </span>

            {/* Icon Box */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <feature.icon
                strokeWidth={0.8}
                className="text-primary w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-white font-serif text-xl tracking-wide mb-4">
              {feature.label}
            </h3>
            
            <p className="text-white/40 font-light text-xs leading-relaxed tracking-wide max-w-[200px]">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;