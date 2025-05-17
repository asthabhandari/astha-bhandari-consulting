
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

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Impact statistics section with black background */}
      <section className="pt-32 pb-16 bg-white text-black">
        <div className="container mx-auto px-4">
          {/* Impact statistics in row at the top with bigger font */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mb-16">
            <div className="flex items-center gap-6">
              <img 
                src="/lovable-uploads/eeaa0327-ad1b-4b8d-8605-1e91dd0adfba.png" 
                alt="Silhouette" 
                className="w-32 h-auto hidden md:block"
              />
              <div className="text-[#f89cb0] text-center">
                <div className="text-5xl md:text-7xl font-['Garet']">100%</div>
                <div className="font-light text-xl">success</div>
              </div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">40</div>
              <div className="font-light text-xl">mentorships</div>
            </div>
            
            <div className="text-[#f89cb0] text-center">
              <div className="text-5xl md:text-7xl font-['Garet']">26</div>
              <div className="font-light text-xl">dream acceptances</div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-[#f89cb0] text-center">
                <div className="text-5xl md:text-7xl font-['Garet']">54</div>
                <div className="font-light text-xl">scholarships</div>
              </div>
              <img 
                src="/lovable-uploads/665ac1e8-7ce9-453f-9238-05e6e9cb905b.png" 
                alt="Arrow" 
                className="w-32 h-auto hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Real People Real Results section - with black background and carousel */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-normal tracking-wider mb-12">REAL PEOPLE. REAL RESULTS.</h2>
          
          {/* Student Stories Carousel */}
          <ScrollArea className="w-full">
            <div className="relative">
              <div className="flex justify-center gap-6 mb-8">
                <CarouselPrevious className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
                <CarouselNext className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
              </div>
              
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                  containScroll: false,
                }}
                className="w-full">
                <CarouselContent className="py-12">
                  {/* Student Story 1 - Ayush */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-10 w-full flex justify-center">
                        <img 
                          src="/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png" 
                          alt="Northeastern University Student" 
                          className="h-[600px] w-auto mx-auto"
                        />
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Ayush came to us in 9th grade, feeling overwhelmed by high school.</p>
                        <p className="text-xl mb-6 font-['Garet']">Through the Long-Term Consulting package, we helped him launch a club, build an investment project, and run a social media page – all of which helped him earn admission to his dream school: Northeastern.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 2 - Neha */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-10 w-full flex justify-center">
                        <img 
                          src="/lovable-uploads/330ef70d-710e-462c-bba4-6bc5c81515fa.png" 
                          alt="Student" 
                          className="h-[600px] w-auto mx-auto"
                        />
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Neha had strong extracurriculars but struggled with writing.</p>
                        <p className="text-xl mb-6 font-['Garet']">We helped her transform her essays into a story that was authentic, personal, and unforgettable – earning her a spot at Duke.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 3 - Leon */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-10 w-full flex justify-center">
                        <img 
                          src="/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png" 
                          alt="Student" 
                          className="h-[600px] w-auto mx-auto"
                        />
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Leon found ABC after searching for a college consultancy that actually cares about their clients.</p>
                        <p className="text-xl mb-6 font-['Garet']">We worked with him week after week on his essays, and even prepped him for interviews. He is now attending UPenn!</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 4 - Nicole (using silhouette) */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-10 w-full flex justify-center">
                        <img 
                          src="/lovable-uploads/eeaa0327-ad1b-4b8d-8605-1e91dd0adfba.png" 
                          alt="Student Silhouette" 
                          className="h-[600px] w-auto mx-auto"
                        />
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Nicole (not pictured) came to us through a referral with one clear goal: UC Berkeley.</p>
                        <p className="text-xl mb-6 font-['Garet']">Through mentorship, we helped her build a website to showcase her art. Then, through essay coaching, we helped her turn that passion into a story that was both captivating and true.</p>
                        <p className="text-xl font-['Garet']">Now she's exactly where she dreamed of being: UC Berkeley.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 5 - Kimberly */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-10 w-full flex justify-center">
                        <img 
                          src="/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png" 
                          alt="Stanford Student" 
                          className="h-[600px] w-auto mx-auto"
                        />
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Kimberly and her family found us while working with another consultancy.</p>
                        <p className="text-xl mb-6 font-['Garet']">They came to ABC for someone who cares – and got it. We helped her revise her original application into something she loved. She's now an incoming Stanford student!</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
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

export default Testimonials;
