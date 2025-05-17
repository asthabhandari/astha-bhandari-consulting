
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-2">
              7+ Years of Success
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              GREAT ESSAYS<br />DON'T WRITE<br />THEMSELVES.
            </h1>
            
            <h2 className="text-3xl font-bold text-pink-500">
              IVY EDGE DOES.
            </h2>

            <p className="text-lg text-gray-300 max-w-lg">
              With 7+ years of experience mentoring students and guiding them into Stanford,
              IvyLeague, Duke, and other T20 schools — we help high schoolers unlock their voice
              and shape unforgettable stories.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
                <Link to="/contact" className="flex items-center gap-2">
                  Book a Call Now <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="text-white border-white">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4">What Our Students Achieve:</h3>
              
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="bg-pink-500/20 text-pink-400 p-1 rounded mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Admission to Stanford, Harvard, MIT, and other elite colleges</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="bg-pink-500/20 text-pink-400 p-1 rounded mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Unforgettable essays that stand out from thousands</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="bg-pink-500/20 text-pink-400 p-1 rounded mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Strong, cohesive applications that tell compelling stories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
