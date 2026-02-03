import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import Services from './components/Sections/Services';
import Testimonials from './components/Sections/Testimonials';
import ServiceArea from './components/Sections/ServiceArea';
import Booking from './components/Sections/Booking';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <ServiceArea />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;