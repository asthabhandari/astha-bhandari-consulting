
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-normal tracking-wider mb-12 text-white">SUCCESS STORIES</h2>
          
          {/* Impact statistics in corners */}
          <div className="fixed top-32 left-4 md:left-8 text-[#f89cb0] text-xl md:text-2xl font-bold">
            <div className="text-center">
              <div className="text-3xl md:text-4xl">40</div>
              <div>mentorships</div>
            </div>
          </div>
          
          <div className="fixed top-32 right-4 md:right-8 text-[#f89cb0] text-xl md:text-2xl font-bold">
            <div className="text-center">
              <div className="text-3xl md:text-4xl">26</div>
              <div>dream acceptances</div>
            </div>
          </div>
          
          <div className="fixed bottom-32 left-4 md:left-8 text-[#f89cb0] text-xl md:text-2xl font-bold">
            <div className="text-center">
              <div className="text-3xl md:text-4xl">54</div>
              <div>scholarships</div>
            </div>
          </div>
          
          <div className="fixed bottom-32 right-4 md:right-8 text-[#f89cb0] text-xl md:text-2xl font-bold">
            <div className="text-center">
              <div className="text-3xl md:text-4xl">100%</div>
              <div>success</div>
            </div>
          </div>
          
          <div className="space-y-16">
            {/* New Testimonial screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-4">
                <img 
                  src="/lovable-uploads/715043b8-9cdf-496b-907e-31895ce1b662.png" 
                  alt="Testimonial - UPenn acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/f58d076c-0eb9-444e-82c0-31bec2f0ca32.png" 
                  alt="Testimonial - Thank you message" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/0c213138-aec6-4e34-b90b-1e3e0f0a488c.png" 
                  alt="Testimonial - Northeastern acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/bbabd240-049f-4367-bde3-2459384c986b.png" 
                  alt="Testimonial - Recommendation" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/dc91a85f-9db4-4da1-8fde-f35fa80b2444.png" 
                  alt="Testimonial - Princeton acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/e90ee1f8-3739-4581-859c-7d9b12652542.png" 
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
