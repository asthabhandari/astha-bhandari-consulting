
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
                  src="/lovable-uploads/3e5a4679-1e9f-460a-a3ac-f6a0cee14d11.png" 
                  alt="Testimonial - UPenn acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/af7d0e9d-0884-48b6-91d2-bfcc066a4123.png" 
                  alt="Testimonial - Thank you message" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/64afd46b-0847-4a70-9e9a-6e81ddb06092.png" 
                  alt="Testimonial - Northeastern acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/c53df84b-8259-46c2-ab5a-7aa6cbfaf465.png" 
                  alt="Testimonial - Recommendation" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/23134334-9fca-4ac3-9f76-86b51e72f287.png" 
                  alt="Testimonial - Princeton acceptance" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-4">
                <img 
                  src="/lovable-uploads/21353630-7cae-4a66-86a3-94c3755e5d20.png" 
                  alt="Testimonial - Multiple acceptances" 
                  className="w-full h-auto"
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
