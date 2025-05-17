
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
          
          <div className="space-y-16">
            {/* Testimonial screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-4">
                <img 
                  src="/lovable-uploads/04be238a-88f1-40d8-a728-95645ac8fc09.png" 
                  alt="Testimonial 1" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/44261243-3412-4efb-a7f2-1f43b6c080e6.png" 
                  alt="Testimonial 2" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/a03198cc-7596-4022-9a5c-14ab4cd80ff4.png" 
                  alt="Testimonial 3" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/b772e18f-6646-4fe3-bdac-58cc8eb7444b.png" 
                  alt="Testimonial 4" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/fddf1116-e596-4281-935f-3af4baae6a96.png" 
                  alt="Testimonial 5" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl md:text-3xl font-normal mb-8 text-white">Where Our Students Have Been Accepted</h3>
              <div className="flex justify-center">
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
