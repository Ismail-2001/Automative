import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionA = motion.a as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#reviews' },
  ];

  const menuVariants = {
    initial: { 
      opacity: 0,
      clipPath: "inset(0 0 100% 0)"
    },
    animate: { 
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Ease Out Expo
      }
    },
    exit: { 
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: { 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/90 backdrop-blur-xl border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex items-center justify-between relative z-50">
        <div className="flex items-center">
          <h2 className="text-white text-xl font-light tracking-[0.4em] leading-tight cursor-pointer select-none">
            ELITE<span className="text-primary text-[10px] font-bold tracking-widest ml-3">STUDIO</span>
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button className="relative overflow-hidden group flex min-w-[140px] cursor-pointer items-center justify-center border border-primary/40 h-10 px-6 bg-transparent text-primary text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:text-black">
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
            <span className="relative z-10">Inquire</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white/80 hover:text-primary transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center pt-32 pb-12 px-6 lg:hidden overflow-y-auto"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

            <MotionDiv 
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center gap-10 my-auto"
            >
              {navLinks.map((link) => (
                <MotionA
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={itemVariants}
                  className="text-white text-3xl font-serif italic tracking-wide hover:text-primary transition-colors relative group"
                >
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  {link.name}
                  <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                </MotionA>
              ))}
              
              <MotionDiv variants={itemVariants} className="mt-4">
                <button className="relative overflow-hidden group border border-primary/40 h-14 px-12 text-primary text-xs uppercase font-bold tracking-[0.2em] transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:text-black bg-transparent">
                    <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                    <span className="relative z-10">Inquire Now</span>
                </button>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv 
              variants={itemVariants} 
              className="mt-auto pt-12 flex flex-col items-center gap-4 text-center"
            >
               <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
               <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-light">
                Los Angeles &bull; Bel-Air &bull; Malibu
              </p>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;