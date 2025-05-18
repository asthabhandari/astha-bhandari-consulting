import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f89cb0] text-white flex flex-col">
      <Navigation />

      <section className="pt-32 pb-0 min-h-[calc(100vh+10px)] relative">
        <div className="container mx-auto px-4 h-full">
          <h2 className="font-['Garet'] text-4xl md:text-5xl font-light tracking-wider mb-12 text-black">
            WHO WE ARE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="border-4 border-black transform -rotate-1">
                <img
                  src="/lovable-uploads/e0be2613-5b22-4b88-a2a2-c54da891d7d1.png"
                  alt="Astha at Stanford"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="font-['Garet'] lg:col-span-7 space-y-6 text-white">
              <p className="text-3xl">
                ABC was founded by Astha Bhandari – the proud daughter of immigrants, and an immigrant herself.
              </p>
              <p className="text-3xl">
                When it came time to apply to college, Astha had no roadmap. No legacy. No consultants. No one in her family had ever been to college. She figured it out anyway.
              </p>
              <p className="text-3xl">She got into every college she dreamed of.</p>
              <p className="text-3xl">
                And more importantly, she learned how the system works – how to build a story that stands out, how to translate potential into strategy, and how to win with authenticity.
              </p>
              <p className="text-3xl">
                Today, she brings that same insight, drive, and care to every student she works with – and maintains a 100% success rate helping students get into their dream schools.
              </p>
            </div>
          </div>
        </div>

{/* Parents */}
<div className="relative w-full h-[250px]">
  {/* Label and arrow */}
  <div className="absolute left-[1300px] bottom-[80px] text-black text-lg font-light flex flex-col items-center leading-none gap-[0px]">
    <img 
      src="/lovable-uploads/665ac1e8-7ce9-453f-9238-05e6e9cb905b.png" 
      alt="Arrow pointing to parents"
      className="w-72 h-auto m-0 p-0" 
    />
    <span className="m-0 p-0">PROUD PARENTS</span>
  </div>

  {/* Parent image */}
  <img
    src="/lovable-uploads/a01d1c46-6558-4a25-86e0-34e1e7e94aa6.png"
    alt="Proud parents"
    className="absolute bottom-[0px] right-0 w-60 h-auto"
  />
</div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
