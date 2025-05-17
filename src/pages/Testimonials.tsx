
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Impact from '../components/Impact';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-12 text-white">SUCCESS STORIES</h2>
          
          <div className="space-y-12">
            <Impact />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Testimonial cards can be added here later */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <p className="text-white text-lg mb-4">
                  "I got into UPenn! Thank you so much for all your help!"
                </p>
                <p className="text-[#f89cb0] font-medium">- Jessica L.</p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <p className="text-white text-lg mb-4">
                  "Thank you thank you thank you so much! She's so happy. We couldn't have done it without you."
                </p>
                <p className="text-[#f89cb0] font-medium">- Parent of Sarah K.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
