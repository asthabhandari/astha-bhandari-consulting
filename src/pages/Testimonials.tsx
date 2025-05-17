
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-normal tracking-wider mb-12 text-white">OUR IMPACT</h2>
          
          {/* Impact statistics in row at the top with bigger font */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mb-16">
            <div className="text-[#f89cb0] text-center">
              <div className="text-4xl md:text-6xl font-normal">100%</div>
              <div className="font-light text-xl">success</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-4xl md:text-6xl font-normal">40</div>
              <div className="font-light text-xl">mentorships</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-4xl md:text-6xl font-normal">26</div>
              <div className="font-light text-xl">dream acceptances</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-4xl md:text-6xl font-normal">54</div>
              <div className="font-light text-xl">scholarships</div>
            </div>
          </div>
          
          <div className="space-y-16">
            {/* Updated Testimonial screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-4">
                <img 
                  src="/lovable-uploads/c656b1a7-be74-40fd-a508-4800a084103c.png" 
                  alt="Testimonial - UPenn acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/453a2b49-ef6c-4fc6-b104-8985064897a1.png" 
                  alt="Testimonial - Thank you message" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/a95e298b-0d18-4888-bfce-3fce404cfc02.png" 
                  alt="Testimonial - Northeastern acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/f410028a-8430-4493-a084-c1577e6aec63.png" 
                  alt="Testimonial - Recommendation" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/7e31bb8d-7918-447f-a6d3-187d2531528c.png" 
                  alt="Testimonial - Princeton acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/9208a2c6-c731-4776-9aa3-b25874611321.png" 
                  alt="Testimonial - Multiple acceptances" 
                  className="w-full h-auto"
                />
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
