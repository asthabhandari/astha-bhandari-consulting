
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-black/60 z-0">
        <img 
          src="/lovable-uploads/e1270ef2-ae21-400e-9a4a-0aada45ba12d.png" 
          alt="Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-70"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-wide text-white">
              GREAT<br />ESSAYS<br />DON'T WRITE<br />THEMSELVES.
            </h1>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white">
              ABC DOES.
            </h2>

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
          
          <div className="lg:w-1/2 space-y-6 text-white">
            <p className="text-xl md:text-2xl lg:text-3xl font-light">
              With 7+ years of experience mentoring students – and 4 years guiding them into Stanford, IvyLeague, Duke, and other T20 schools – ABC helps high schoolers unlock their voice and shape unforgettable stories.
            </p>
              
            <p className="text-xl md:text-2xl lg:text-3xl font-light">
              Because great stories open doors that SAT scores alone never could.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
