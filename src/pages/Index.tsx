
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
