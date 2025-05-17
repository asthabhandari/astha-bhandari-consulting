
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Impact = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-normal">OUR IMPACT</h2>
          <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none">
            <Link to="/testimonials" className="flex items-center gap-2">
              REAL STORIES <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-7xl font-normal">40</h3>
              <p className="text-xl">mentorships</p>
            </div>
            
            <div className="flex items-center gap-4">
              <h3 className="text-7xl font-normal">100%</h3>
              <p className="text-xl">success</p>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/04be238a-88f1-40d8-a728-95645ac8fc09.png" 
              alt="Success stories" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            {/* This is for the testimonial messages image/content */}
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-7xl font-normal">26</h3>
              <p className="text-xl">dream acceptances</p>
            </div>
            
            <div className="flex items-center gap-4">
              <h3 className="text-7xl font-normal">54</h3>
              <p className="text-xl">scholarships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
