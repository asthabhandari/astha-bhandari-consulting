
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// College Grid Component
type CollegeInfo = {
  name: string;
  description?: string;
  logo?: string;
};

const collegesList: CollegeInfo[] = [
  { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png" },
  { name: "Duke", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/1200px-Duke_Athletics_logo.svg.png" },
  { name: "Princeton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Princeton_shield.svg/1200px-Princeton_shield.svg.png" },
  { name: "UNC Chapel Hill", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/North_Carolina_Tar_Heels_logo.svg/1200px-North_Carolina_Tar_Heels_logo.svg.png" },
  { name: "NC State", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/1200px-North_Carolina_State_University_Athletic_logo.svg.png" },
  { name: "Northeastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Northeastern_University_seal.svg/1200px-Northeastern_University_seal.svg.png" },
  { name: "Northwestern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/1200px-Northwestern_Wildcats_logo.svg.png" },
  { name: "UPenn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png" },
  { name: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" },
  { name: "UCLA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_UCLA_Script.svg/1200px-The_UCLA_Script.svg.png" },
  { name: "USC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1200px-USC_Trojans_logo.svg.png" },
  { name: "UC Davis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/University_of_California%2C_Davis_seal.svg/1200px-University_of_California%2C_Davis_seal.svg.png" },
  { name: "NYU", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png" },
  { name: "UMich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Michigan_Wolverines_Logo.svg/1200px-Michigan_Wolverines_Logo.svg.png" },
  { name: "Amherst", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Amherst_College_seal.svg/1200px-Amherst_College_seal.svg.png" },
  { name: "Howard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Howard_University_seal.svg/1200px-Howard_University_seal.svg.png" },
  { name: "Georgia Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png" },
  { name: "Davidson", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Davidson_College_seal.svg/1200px-Davidson_College_seal.svg.png" },
  { name: "Dartmouth", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Dartmouth_College_shield.svg/1200px-Dartmouth_College_shield.svg.png" },
  { name: "Wake Forest", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/1200px-Wake_Forest_University_Athletic_logo.svg.png" },
];

// Create a scrolling marquee component for the colleges
const CollegeMarquee = ({ colleges }: { colleges: CollegeInfo[] }) => {
  // Duplicate the colleges list multiple times to create a seamless infinite loop effect
  const extendedColleges = [...colleges, ...colleges, ...colleges];
  
  return (
    <div className="w-full overflow-hidden bg-black py-8">
      <div className="animate-marquee flex">
        {extendedColleges.map((college, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center px-8 min-w-[180px]"
          >
            {/* College Logo */}
            <div className="w-16 h-16 rounded-full bg-white p-1 flex items-center justify-center mb-3 overflow-hidden">
              {college.logo ? (
                <img 
                  src={college.logo} 
                  alt={`${college.name} logo`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTJDMTQuNzYxNCAxMiAxNyA5Ljc2MTQyIDE3IDdDMTcgNC4yMzg1OCAxNC43NjE0IDIgMTIgMkM5LjIzODU4IDIgNyA0LjIzODU4IDcgN0M3IDkuNzYxNDIgOS4yMzg1OCAxMiAxMiAxMloiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTE5LjkzMjMgMjAuOTIzN0MyMC40MjAyIDIxLjgzNjEgMjEuNTE5MyAyMi4xNzggMjIuMzQwOSAyMS42MTgzQzIzLjE3ODggMjEuMDQ4NCAyMy40NTA0IDE5Ljg5NzkgMjIuOTM2NSAxOS4wMDQzQzIxLjUzOTMgMTYuNjA1NSAxOS4yODMxIDE0Ljc0MSAxNi42MTczIDE0Ljg1NjJDMTUuODYzMiAxNC44OTU2IDE1LjI0ODUgMTUuNjI0NiAxNS4zNzg5IDE2LjM3MjNDMTUuODIzMiAxOC41NDU0IDE3LjM5MTYgMjAuMDc1MiAxOS4xMDg1IDIwLjk3MDlDMTkuNDIxOCAyMS4xMjE3IDE5LjY5MTkgMjEuMDY2OCAxOS45MzIzIDIwLjkyMzdaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTcuMzgyNjkgMjAuOTIzN0M2Ljg5NDgzIDIxLjgzNjEgNS43OTU2NiAyMi4xNzggNC45NzQxIDIxLjYxODNDNC4xMzYxNSAyMS4wNDg0IDMuODY0NTkgMTkuODk3OSA0LjM3ODUgMTkuMDA0M0M1Ljc3NTcxIDE2LjYwNTUgOC4wMzE4OCAxNC43NDEgMTAuNjk3NyAxNC44NTYyQzExLjQ1MTggMTQuODk1NiAxMi4wNjY1IDE1LjYyNDYgMTEuOTM2MSAxNi4zNzIzQzExLjQ5MTggMTguNTQ1NCA5LjkyMzM3IDIwLjA3NTIgOC4yMDY1MSAyMC45NzA5QzcuODkzMjIgMjEuMTIxNyA3LjYyMzA2IDIxLjA2NjggNy4zODI2OSAyMC45MjM3WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl font-bold bg-[#f89cb0] text-white">
                  {college.name.charAt(0)}
                </div>
              )}
            </div>
            <span className="text-center font-['Garet'] text-white">{college.name}</span>
          </div>
        ))}
      </div>
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
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-16">
            {/* Left side word cloud image */}
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/b1b392c0-c004-451b-b54b-61866b6d97b2.png" 
                alt="Student names word cloud" 
                className="h-[200px] w-auto"
              />
            </div>
            
            {/* Reordered statistics as requested */}
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">100%</div>
              <div className="font-light text-xl">success</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">26</div>
              <div className="font-light text-xl">dream acceptances</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">54</div>
              <div className="font-light text-xl">scholarships</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">40</div>
              <div className="font-light text-xl">mentorships</div>
            </div>
            
            {/* Right side pin image */}
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/51e52982-8346-406b-8b87-acc33f9a42bb.png" 
                alt="College names location pin" 
                className="h-[200px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* College Marquee Section */}
      <section className="py-12 bg-black text-white">
        <div className="w-full px-0">
          <h2 className="text-4xl md:text-5xl font-normal font-['Garet'] text-center mb-10">
            Where Our Students Got In
          </h2>
          
          <CollegeMarquee colleges={collegesList} />
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
      
      <Footer />
    </div>
  );
};

export default Impact;
