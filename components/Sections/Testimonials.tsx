import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 0 0 rgba(212, 175, 55, 0)'
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    borderColor: 'rgba(212, 175, 55, 0.15)', // Subtle gold border on entry
    boxShadow: '0 0 20px rgba(212, 175, 55, 0.05)', // Subtle glow
    transition: { 
      delay: i * 0.2, 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  })
};

const starVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-20 py-32" id="reviews">
      <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, idx) => (
          <MotionDiv
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="bg-white/5 p-12 border transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <MotionSpan key={i} variants={starVariants}>
                  <Star size={14} fill="currentColor" className="text-primary" />
                </MotionSpan>
              ))}
            </div>
            
            <MotionDiv variants={textVariants}>
              <p className="text-white/80 italic text-xl mb-12 font-serif leading-relaxed relative z-10">
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
            </MotionDiv>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;