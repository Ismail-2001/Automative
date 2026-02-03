import React from 'react';
import { Award, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Award, label: "Master Artisans" },
  { icon: ShieldCheck, label: "Paint Protection" },
  { icon: Sparkles, label: "Molecular Clean" },
  { icon: Clock, label: "Concierge Service" },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-background-dark py-24 border-b border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-12">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-4 group cursor-default"
          >
            <feature.icon
              strokeWidth={1}
              className="text-primary/40 w-8 h-8 group-hover:text-primary transition-colors duration-500"
            />
            <span className="text-white/40 group-hover:text-white/70 transition-colors font-bold uppercase text-[9px] tracking-[0.4em]">
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;