
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-black text-white relative">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-wide">
              GREAT<br />ESSAYS<br />DON'T WRITE<br />THEMSELVES.
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-normal">
              ABC DOES.
            </h2>

            <div className="max-w-xl space-y-6">
              <p className="text-base md:text-lg text-white font-light">
                With 7+ years of experience mentoring students – and 4 years guiding them into Stanford, IvyLeague, Duke, and other T20 schools – ABC helps high schoolers unlock their voice and shape unforgettable stories.
              </p>
              
              <p className="text-base md:text-lg text-white font-light">
                Because great stories open doors that SAT scores alone never could.
              </p>
            </div>

            <div className="pt-8">
              <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black rounded-none px-8 py-6 h-auto text-base flex items-center gap-2 font-normal tracking-wider">
                <Link to="/about" className="flex items-center gap-2">
                  LEARN MORE ABOUT US <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
            
            <p className="text-xs text-white/70 pt-4 font-light">
              TRUSTED BY FAMILIES IN SILICON VALLEY, NC, AND ABROAD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
