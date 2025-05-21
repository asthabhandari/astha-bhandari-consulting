import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f89cb0] text-white flex flex-col">
      <Navigation />

      <section className="pt-24 pb-0 flex-grow"> 
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-['Garet'] text-5xl md:text-6xl font-light tracking-wider mb-6 text-black">
              WHO WE ARE
            </h2>
            <div className="w-24 h-1 bg-white/80 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image frame */}
            <div className="lg:w-5/12 relative flex-shrink-0">
              <img
                src="images/frame.png"
                alt="Ornate frame"
                className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] object-cover z-10 pointer-events-none"
              />
              <div className="relative pt-[15%] pl-[15%] pr-[15%] pb-[15%]">
                <img
                  src="/lovable-uploads/e0be2613-5b22-4b88-a2a2-c54da891d7d1.png"
                  alt="Astha at Stanford"
                  className="w-[170%] relative left-[-65px] transform -rotate-1"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="font-['Garet'] lg:w-7/12 space-y-8 text-[#1a1a1a]">
              <p className="text-2xl leading-relaxed">
                <span className="font-bold text-[#111] underline decoration-[#ff4d6d] decoration-2">ABC was founded by Astha Bhandari</span> — the proud daughter of immigrants, and an immigrant herself who <span className="font-semibold text-[#111]">cracked the code of elite college admissions</span>. With <span className="underline decoration-[#ff4d6d]/70">no legacy status</span>, <span className="underline decoration-[#ff4d6d]/70">no private consultants</span>, and <span className="underline decoration-[#ff4d6d]/70">no family blueprint</span> to follow, Astha navigated the complex admissions process entirely on her own. She didn't just get accepted — <span className="font-semibold bg-[#ff4d6d]/10 px-1">she earned spots at every top college she dreamed of.</span>
              </p>

              <div className="relative">
                <div className="absolute -left-6 top-0 h-full w-1 bg-[#ff4d6d]"></div>
                <p className="text-2xl italic leading-relaxed pl-8 text-[#333]">
                  "My favorite part of this is watching students realize how amazing their story can be if written correctly."
                </p>
              </div>

              <p className="text-2xl leading-relaxed">
                But the real breakthrough wasn't getting in — it was <span className="font-semibold text-[#111]">reverse-engineering how the system works</span>. Astha discovered that college admissions isn't just about checking boxes. Every school is looking for something different: not just students who qualify, but students who <span className="font-bold text-[#d61538]">FIT</span>. Each institution seeks out distinct values, voices, and potential. <span className="font-medium text-[#222]">So the essay that gets you into Harvard will not get you into Stanford.</span> From the tone of your essays to the activities you highlight, <span className="underline decoration-[#ff4d6d]">it all needs to be tailored with intention.</span>
              </p>

              <p className="text-2xl leading-relaxed">
                It's that strategy that ABC runs on. We help students craft stories that are not only <span className="font-semibold text-[#d61538]">authentic</span>, but also <span className="font-semibold text-[#d61538]">precisely aligned</span> with what each school is really looking for. <span className="font-medium text-[#222]">Her approach is deeply personalized, strategic, and results-driven.</span> The results? <span className="font-bold text-black bg-[#fa7d93] px-3 py-1 inline-block">100% success rate</span> helping students get into their dream schools.
              </p>

              <p className="text-2xl font-medium italic text-[#333]">
                Astha figured this out the hard way, and now, her students don't have to.
              </p>
            </div>
          </div>

          {/* Parents section */}
          <div className="relative mt-auto" style={{ height: '270px' }}>
          <div className="absolute bottom-0 right-0 w-full">
            <div className="container mx-auto px-4">
              <div className="flex justify-end items-end"> {/* Changed to items-end */}
                <div className="text-right mr-4 transform translate-y-2"> {/* Added translate-y-2 */}
                  <p className="text-black text-lg font-light mb-8">PROUD PARENTS</p> {/* Increased mb-8 */}
                  <img 
                    src="/lovable-uploads/665ac1e8-7ce9-453f-9238-05e6e9cb905b.png" 
                    alt="Arrow" 
                    className="w-48 h-auto -ml-8 translate-y-[-10px]" /* Adjusted position */
                  />
                </div>
                <img
                  src="/lovable-uploads/a01d1c46-6558-4a25-86e0-34e1e7e94aa6.png"
                  alt="Parents"
                  className="w-56 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer /> {/* Footer will now sit right below parents */}
    </div>
  );
};

export default About;