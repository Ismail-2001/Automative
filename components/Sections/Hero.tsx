import React from 'react';
import { motion } from 'framer-motion';

const MotionSpan = motion.span as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 animate-slow-zoom">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/95 z-10"></div>
        <img
          alt="Luxury Car Detail"
          className="w-full h-full object-cover"
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
        />
      </div>

      {/* Animated Particles/Bokeh */}
      <div className="bokeh w-64 h-64 top-[20%] left-[10%] opacity-20" style={{ animationDelay: '0s' }}></div>
      <div className="bokeh w-96 h-96 top-[60%] left-[70%] opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="bokeh w-48 h-48 top-[10%] left-[80%] opacity-20" style={{ animationDelay: '5s' }}></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] px-6 text-center">
        <MotionSpan
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary/80 text-[10px] font-bold uppercase tracking-[0.6em] mb-8 block"
        >
          The Pinnacle of Care
        </MotionSpan>

        <h1 className="text-white text-5xl md:text-8xl font-serif leading-[1.1] mb-10 overflow-hidden flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8">
            {["The", "Art", "of"].map((word, i) => (
              <MotionSpan
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="inline-block"
              >
                {word}
              </MotionSpan>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8">
            {["Automotive", "Perfection."].map((word, i) => (
              <MotionSpan
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                className="inline-block"
              >
                {word}
              </MotionSpan>
            ))}
          </div>
        </h1>

        <div className="flex flex-col items-center gap-12">
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-white/60 text-xs md:text-sm font-light uppercase tracking-[0.4em] max-w-[600px] leading-relaxed"
          >
            Bespoke mobile detailing for those who demand excellence.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button className="relative group px-12 py-5 bg-primary overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] animate-shimmer"></div>
              <span className="relative z-10 text-black text-[11px] font-black uppercase tracking-[0.4em]">
                Book Your Experience
              </span>
            </button>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.5em] font-bold">Explore</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-ping"></div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;