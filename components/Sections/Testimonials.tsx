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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 0 0 0 rgba(0,0,0,0)'
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)', // Distinct gold border
    boxShadow: '0 10px 40px -10px rgba(212, 175, 55, 0.1)', // Luxurious glow
    transition: { 
      delay: i * 0.2, 
      duration: 1.0, 
      ease: [0.22, 1, 0.36, 1], // Custom "Expo Out" for premium feel
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  })
};

const starVariants = {
  hidden: { opacity: 0, scale: 0, y: 10, rotate: -45 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 15 } // Bouncy spring effect
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Testimonials: React.FC = () => {
  return (
    <section className="w-full relative py-32 overflow-hidden" id="reviews">
       {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[20%] left-[-20%] w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] animate-float opacity-20"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-float-delayed opacity-20"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div 
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="bg-white/5 p-12 border transition-all duration-500 group relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.span key={i} variants={starVariants}>
                    <Star size={14} fill="currentColor" className="text-primary" />
                  </motion.span>
                ))}
              </div>
              
              <motion.div variants={textVariants}>
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;