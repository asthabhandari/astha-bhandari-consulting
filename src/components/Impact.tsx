
import React from "react";

const Impact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal text-[#f89cb0] font-['Garet']">100%</h3>
              <p className="text-xl">success</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal text-[#f89cb0] font-['Garet']">40</h3>
              <p className="text-xl">mentorships</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-full">
              <img 
                src="/lovable-uploads/20c41b2c-2df0-4058-a0cf-3eeae07cec63.png" 
                alt="Graduate student names word cloud" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-full">
              <img 
                src="/lovable-uploads/a4d37063-0be1-42db-9d11-5b2839c7d780.png" 
                alt="College names word cloud" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal text-[#f89cb0] font-['Garet']">26</h3>
              <p className="text-xl">dream acceptances</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-7xl font-normal text-[#f89cb0] font-['Garet']">54</h3>
              <p className="text-xl">scholarships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
