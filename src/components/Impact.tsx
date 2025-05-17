
import React from "react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type CollegeInfo = {
  name: string;
  description?: string;
};

const collegesList: CollegeInfo[] = [
  { name: "Stanford", description: "Class of 2025" },
  { name: "Duke", description: "Full scholarship" },
  { name: "Princeton", description: "Class of 2024" },
  { name: "UNC Chapel Hill", description: "Class of 2025" },
  { name: "NC State", description: "Class of 2023" },
  { name: "Northeastern", description: "Merit scholarship" },
  { name: "Northwestern", description: "Class of 2024" },
  { name: "UPenn", description: "Class of 2023" },
  { name: "UC Berkeley", description: "Class of 2025" },
  { name: "UCLA", description: "Full scholarship" },
  { name: "USC", description: "Class of 2024" },
  { name: "UC Davis", description: "Merit scholarship" },
  { name: "NYU", description: "Class of 2025" },
  { name: "UMich", description: "Class of 2023" },
  { name: "Amherst", description: "Class of 2024" },
  { name: "Howard", description: "Full scholarship" },
  { name: "Georgia Tech", description: "Class of 2025" },
  { name: "Davidson", description: "Merit scholarship" },
  { name: "Dartmouth", description: "Class of 2024" },
  { name: "Wake Forest", description: "Class of 2023" },
];

const CollegeGrid = ({ colleges }: { colleges: CollegeInfo[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {colleges.map((college, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className={cn(
                  "bg-white text-black rounded-lg p-4 flex items-center justify-center",
                  "transition-all duration-200 hover:scale-105 hover:shadow-lg hover:text-[#f89cb0]",
                  "min-h-20 cursor-pointer font-['Garet']",
                )}
              >
                <span className="text-center">{college.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#f89cb0] text-white border-none">
              <p>{college.description || "ABC Student"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

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
        
        {/* New College Collage Section */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-normal font-['Garet'] text-center mb-10">
            Where Our Students Got In
          </h2>
          
          <div className="bg-white rounded-lg p-8">
            <CollegeGrid colleges={collegesList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
