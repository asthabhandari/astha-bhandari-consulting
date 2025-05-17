
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
          <h2 className="text-4xl md:text-5xl font-normal tracking-wider mb-12 text-white">SUCCESS STORIES</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <p className="text-white text-lg mb-4">
                  "I got into Northeastern! Thank you so much! 😭😭😭"
                </p>
                <p className="text-[#f89cb0] font-medium">- Michael T.</p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <p className="text-white text-lg mb-4">
                  "Just wanted to let you know that Deonna is 9 for 9!"
                </p>
                <p className="text-[#f89cb0] font-medium">- Parent of Deonna W.</p>
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl md:text-3xl font-normal mb-8 text-white">Where Our Students Have Been Accepted</h3>
              <div className="flex justify-center gap-12">
                <img 
                  src="/lovable-uploads/ef0b5219-e6f7-4efd-a542-db8b6a37e9dc.png" 
                  alt="University acceptances" 
                  className="w-64 h-auto"
                />
              </div>
            </div>
            
            <Impact />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
