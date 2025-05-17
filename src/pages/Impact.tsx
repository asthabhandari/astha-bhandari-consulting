import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// College Grid Component
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
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Impact statistics section with black background */}
      <section className="pt-32 pb-16 bg-white text-black">
        <div className="container mx-auto px-4">
          {/* Impact statistics in row at the top with bigger font */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mb-16">
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">100%</div>
              <div className="font-light text-xl">success</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">40</div>
              <div className="font-light text-xl">mentorships</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">26</div>
              <div className="font-light text-xl">dream acceptances</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">54</div>
              <div className="font-light text-xl">scholarships</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* College Grid Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-normal font-['Garet'] text-center mb-10">
            Where Our Students Got In
          </h2>
          
          <div className="bg-white rounded-lg p-8">
            <CollegeGrid colleges={collegesList} />
          </div>
        </div>
      </section>
      
      {/* Real People Real Results section - with black background and carousel */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-normal tracking-wider mb-8">REAL PEOPLE. REAL RESULTS.</h2>
          
          {/* Student Stories Carousel */}
          <ScrollArea className="w-full">
            <Carousel 
              opts={{
                align: "center",
                loop: true,
                containScroll: false,
              }}
              className="w-full relative"
            >
              <CarouselContent className="py-8">
                {/* Student Story 1 - Ayush */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png" 
                        alt="Northeastern University Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[20px] mb-4 font-['Garet']">Ayush came to us in 9th grade, feeling overwhelmed by high school.</p>
                      <p className="text-[20px] mb-6 font-['Garet']">Through the Long-Term Consulting package, we helped him launch a club, build an investment project, and run a social media page – all of which helped him earn admission to his dream school: Northeastern.</p>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 2 - Neha */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/330ef70d-710e-462c-bba4-6bc5c81515fa.png" 
                        alt="Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[20px] mb-4 font-['Garet']">Neha had strong extracurriculars but struggled with writing.</p>
                      <p className="text-[20px] mb-6 font-['Garet']">We helped her transform her essays into a story that was authentic, personal, and unforgettable – earning her a spot at Duke.</p>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 3 - Leon */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png" 
                        alt="Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[20px] mb-4 font-['Garet']">Leon found ABC after searching for a college consultancy that actually cares about their clients.</p>
                      <p className="text-[20px] mb-6 font-['Garet']">We worked with him week after week on his essays, and even prepped him for interviews. He is now attending UPenn!</p>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 4 - Nicole (using silhouette) */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/0029e411-c275-49de-98d0-9c8697ca8c56.png" 
                        alt="Student Silhouette" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[20px] mb-4 font-['Garet']">Nicole (not pictured) came to us through a referral with one clear goal: UC Berkeley.</p>
                      <p className="text-[20px] mb-6 font-['Garet']">Through mentorship, we helped her build a website to showcase her art. Then, through essay coaching, we helped her turn that passion into a story that was both captivating and true.</p>
                      <p className="text-[20px] font-['Garet']">Now she's exactly where she dreamed of being: UC Berkeley.</p>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 5 - Kimberly */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png" 
                        alt="Stanford Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[20px] mb-4 font-['Garet']">Kimberly and her family found us while working with another consultancy.</p>
                      <p className="text-[20px] mb-6 font-['Garet']">They came to ABC for someone who cares – and got it. We helped her revise her original application into something she loved. She's now an incoming Stanford student!</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="flex justify-center gap-6 mt-4">
                <CarouselPrevious className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
                <CarouselNext className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
              </div>
            </Carousel>
          </ScrollArea>
        </div>
      </section>
      
      {/* Original Testimonial screenshots - with white background */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4">
              <img 
                src="/lovable-uploads/c656b1a7-be74-40fd-a508-4800a084103c.png" 
                alt="Testimonial - UPenn acceptance" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-4">
              <img 
                src="/lovable-uploads/453a2b49-ef6c-4fc6-b104-8985064897a1.png" 
                alt="Testimonial - Thank you message" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-4">
              <img 
                src="/lovable-uploads/a95e298b-0d18-4888-bfce-3fce404cfc02.png" 
                alt="Testimonial - Northeastern acceptance" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-4">
              <img 
                src="/lovable-uploads/f410028a-8430-4493-a084-c1577e6aec63.png" 
                alt="Testimonial - Recommendation" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-4">
              <img 
                src="/lovable-uploads/7e31bb8d-7918-447f-a6d3-187d2531528c.png" 
                alt="Testimonial - Princeton acceptance" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-4">
              <img 
                src="/lovable-uploads/9208a2c6-c731-4776-9aa3-b25874611321.png" 
                alt="Testimonial - Multiple acceptances" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Button */}
      <section className="py-16 bg-black text-white">
        <div className="flex justify-center">
          <Button asChild className="bg-[#4CA86B] hover:bg-[#4CA86B]/90 text-white text-lg px-8 py-6 h-auto">
            <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              BOOK A CALL NOW <ExternalLink size={20} />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Impact;
