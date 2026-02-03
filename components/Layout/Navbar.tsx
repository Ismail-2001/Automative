import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex items-center justify-between">
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
          className="lg:hidden text-white/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/80 text-lg font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button className="mt-8 relative overflow-hidden group border border-primary/40 h-12 px-10 text-primary text-xs uppercase font-bold tracking-[0.2em] transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:text-black">
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
            <span className="relative z-10">Inquire Now</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;