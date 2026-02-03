import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    quote: "The ceramic coating transformed my 911. The depth of color is now beyond what I thought possible.",
    author: "Marcus R.",
    car: "Porsche 911 Carrera S"
  },
  {
    quote: "Absolute professionalism. Their mobile unit is more equipped than most fixed shops I've visited.",
    author: "Sarah L.",
    car: "Tesla Model S Plaid"
  },
  {
    quote: "They treat your vehicle as a piece of art. The attention to detail is truly unparalleled.",
    author: "James W.",
    car: "Range Rover Autobiography"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-32" id="reviews">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-24 gap-8"
      >
        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">
          Client Narratives
        </span>
        <h2 className="text-white text-5xl md:text-6xl font-serif">The Standard of Excellence</h2>
        <div className="flex gap-12 mt-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-2xl font-serif">4.9</span>
            <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Google</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-2xl font-serif">5.0</span>
            <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Yelp</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="bg-white/5 p-12 border border-white/5 hover:border-primary/20 transition-all duration-700 group"
          >
            <div className="text-primary flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-primary" />
              ))}
            </div>
            <p className="text-white/80 italic text-xl mb-12 font-serif leading-relaxed">
              "{review.quote}"
            </p>
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-1 group-hover:text-primary transition-colors">
                {review.author}
              </h4>
              <p className="text-primary text-[9px] font-bold uppercase tracking-widest opacity-60">
                {review.car}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;