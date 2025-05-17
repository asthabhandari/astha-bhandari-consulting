
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
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal">40</h3>
              <p className="text-xl">mentorships</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal">100%</h3>
              <p className="text-xl">success</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-full">
              <img 
                src="/lovable-uploads/44261243-3412-4efb-a7f2-1f43b6c080e6.png" 
                alt="Success messages" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <img 
                src="/lovable-uploads/a03198cc-7596-4022-9a5c-14ab4cd80ff4.png" 
                alt="Graduate names" 
                className="w-auto h-64"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal">26</h3>
              <p className="text-xl">dream acceptances</p>
            </div>
            
            <div className="flex flex-col">
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
