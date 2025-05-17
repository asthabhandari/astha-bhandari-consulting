
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
            {/* Text message style testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* UPenn testimonial */}
              <div className="relative">
                <div className="bg-[#333] p-6 rounded-2xl">
                  <p className="text-xl text-white mb-2">I GOT INTO UPENNNN</p>
                  <p className="text-xl text-white">TYSMM FOR ALL YOUR HELP 🙏🙏🙏</p>
                </div>
                <div className="absolute -right-4 -top-4">
                  <div className="bg-[#0695ff] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute -left-4 -bottom-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f04e23" stroke="none">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.6 9.8C17.2 13.1 14.8 12 12 12s-5.2 1.1-6.6 2.8c-.3.3-.1.8.3 1 3.2 1.5 6.9 1.8 10.2 0 .5-.2.6-.7.3-1z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Parent testimonial */}
              <div className="relative">
                <div className="bg-[#333] p-6 rounded-2xl">
                  <p className="text-xl text-white">
                    thank you thank you thank you so much she's so happy. we couldn't have done it without you.
                  </p>
                </div>
                <div className="absolute -right-4 -top-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f89cb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Northeastern testimonial */}
              <div className="relative">
                <div className="bg-[#333] p-6 rounded-2xl">
                  <p className="text-xl text-white">
                    I GOT INTO NORTHEASTERN THANK YOU SO MUCH😭😭😭
                  </p>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-[#f89cb0]">
                  OMG!!
                </div>
              </div>
              
              {/* Recommendation testimonial */}
              <div className="relative">
                <div className="bg-[#333] p-6 rounded-2xl">
                  <p className="text-lg text-white mb-4">Hi Astha,</p>
                  <p className="text-lg text-white">
                    I have recommend you to two of my friends who need help for college applications. Thank you for being so responsible and professional.
                  </p>
                </div>
                <div className="absolute -left-4 top-1/4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f89cb0" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className="absolute -left-8 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f89cb0" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className="absolute -left-12 top-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f89cb0" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Princeton testimonial */}
              <div className="relative">
                <div className="bg-[#333] p-6 rounded-2xl w-3/4 ml-0">
                  <p className="text-white text-lg">
                    ASTHA PRINCETON CAME OUT IM SO SCARED TO OPEN IT
                  </p>
                </div>
                <div className="bg-[#0695ff] p-6 rounded-2xl w-3/4 ml-auto mt-4">
                  <p className="text-white text-lg">
                    omg!! ok ok take a deep breath and open it
                  </p>
                </div>
                <div className="absolute right-12 bottom-4 text-4xl text-[#f89cb0] font-bold">
                  yay!
                </div>
                <div className="absolute left-4 bottom-0 transform translate-y-1/2">
                  <div className="bg-white p-1 rounded-md">
                    <img 
                      src="/lovable-uploads/5fc417b2-9265-4d61-b9cf-bc2d508adc76.png" 
                      alt="Princeton acceptance" 
                      className="w-24 h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* 9 for 9 testimonial */}
              <div className="space-y-4">
                <div className="bg-[#333] p-6 rounded-2xl w-full">
                  <p className="text-white text-lg">
                    Just wanted to let you know that Deonna is 9 for 9 <span className="text-[#f89cb0] font-bold">!</span>
                  </p>
                </div>
                <div className="bg-[#333] p-6 rounded-2xl w-full">
                  <p className="text-white text-lg">
                    To include UNC CH and NC State and she is a Cheatnam White finalist. Thanks for all your help!!
                  </p>
                </div>
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
