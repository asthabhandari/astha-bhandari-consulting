
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f89cb0] text-white">
      <Navigation />
      
      <section className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-12">WHO WE ARE</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="border-4 border-black transform -rotate-1">
                <img 
                  src="/lovable-uploads/b772e18f-6646-4fe3-bdac-58cc8eb7444b.png" 
                  alt="Astha at Stanford" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl">
                ABC was founded by Astha Bhandari – the proud daughter of immigrants, and an immigrant herself.
              </p>
              
              <p className="text-xl">
                When it came time to apply to college, Astha had no roadmap. No legacy. No consultants. No one in her family had ever been to college. She figured it out anyway.
              </p>
              
              <p className="text-xl">
                She got into every college she dreamed of.
              </p>
              
              <p className="text-xl">
                And more importantly, she learned how the system works – how to build a story that stands out, how to translate potential into strategy, and how to win with authenticity.
              </p>
              
              <p className="text-xl">
                Today, she brings that same insight, drive, and care to every student she works with – and maintains a 100% success rate helping students get into their dream schools.
              </p>
              
              <div className="flex justify-end mt-8">
                <div className="text-right flex flex-col items-end">
                  <img 
                    src="/lovable-uploads/b772e18f-6646-4fe3-bdac-58cc8eb7444b.png"
                    alt="Proud parents" 
                    className="w-56 h-auto mb-2"
                  />
                  <span className="text-sm font-light">PROUD PARENTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
