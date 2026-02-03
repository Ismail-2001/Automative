import React from 'react';
import { ArrowRight, ArrowUp, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-obsidian border-t border-white/5 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Newsletter / CTA Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-24 border-b border-white/5 mb-24">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] mb-4 block">Correspondence</span>
            <h3 className="text-white text-3xl md:text-4xl font-serif">Stay Informed on the Art of Automotive Perfection</h3>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-0 border-b border-primary/30 focus-within:border-primary transition-all duration-500 group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS"
                aria-label="Email address for newsletter"
                className="bg-transparent border-none text-[10px] tracking-[0.3em] font-bold text-white placeholder:text-white/20 w-full md:w-80 px-0 py-4 focus:ring-0 uppercase outline-none"
              />
              <button className="text-primary hover:text-white transition-colors flex items-center gap-3 px-4 py-4 group relative overflow-hidden">
                <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase">Join</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-white text-xl font-light tracking-[0.5em] uppercase mb-6">
                ELITE<span className="text-primary text-[10px] ml-3 font-bold">STUDIO</span>
              </h2>
              <p className="text-white/40 text-[11px] font-light leading-[2] tracking-[0.1em] max-w-xs">
                Defining the standard for luxury automotive preservation. Our mobile atelier delivers technical mastery to the most discerning collectors.
              </p>
            </div>
            <div className="flex gap-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" }
              ].map(({ Icon, label }, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={`Follow us on ${label}`}
                  className="text-primary/60 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-10">
            <h5 className="text-white font-serif text-lg tracking-widest">Experience</h5>
            <nav className="flex flex-col gap-5">
              {['Services', 'Membership', 'Gallery', 'Process'].map((item) => (
                <a key={item} href="#" className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-light hover:text-primary transition-colors flex items-center gap-4 group">
                  <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300"></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Information Column */}
          <div className="flex flex-col gap-10">
            <h5 className="text-white font-serif text-lg tracking-widest">Information</h5>
            <nav className="flex flex-col gap-5">
              {['Privacy Protocol', 'Terms of Engagement', 'Service Area'].map((item) => (
                <a key={item} href="#" className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-light hover:text-primary transition-colors flex items-center gap-4 group">
                  <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300"></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-10">
            <h5 className="text-white font-serif text-lg tracking-widest">Concierge</h5>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/20 text-[8px] uppercase tracking-[0.4em] font-bold">Priority Line</span>
                  <a href="tel:+13105550198" className="text-white/40 text-[10px] tracking-[0.2em] hover:text-primary transition-colors">+1 (310) 555-0198</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/20 text-[8px] uppercase tracking-[0.4em] font-bold">Email Inquiry</span>
                  <a href="mailto:concierge@elitestudio.com" className="text-white/40 text-[10px] tracking-[0.2em] hover:text-primary transition-colors">concierge@elitestudio.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/20 text-[8px] uppercase tracking-[0.4em] font-bold">Headquarters</span>
                  <p className="text-white/40 text-[10px] tracking-[0.2em] leading-relaxed">9200 Sunset Blvd,<br />West Hollywood, CA 90069</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/10 text-[9px] tracking-[0.4em] uppercase">© 2024 ELITE STUDIO LLC. REGISTERED TRADEMARK. ALL RIGHTS RESERVED.</p>
          <button onClick={scrollToTop} aria-label="Scroll to top" className="flex flex-col items-center gap-3 group">
            <span className="text-white/20 text-[8px] tracking-[0.5em] uppercase group-hover:text-primary transition-colors">Back to Top</span>
            <div className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
              <ArrowUp size={16} className="text-primary animate-bounce" />
            </div>
          </button>
          <div className="flex gap-8 text-white/10 text-[9px] tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Ethics</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;