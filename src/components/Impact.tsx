
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
                src="/lovable-uploads/a2462042-053f-4f2d-9109-0950021114ba.png" 
                alt="Graduate names" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-full">
              <img 
                src="/lovable-uploads/a41a2dfb-c0c4-4ee9-97d0-f5d858bc9685.png" 
                alt="College names" 
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
