
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
      
      {/* Impact statistics section with white background */}
      <section className="pt-32 pb-16 bg-black text-white">
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
          
          <div className="space-y-16 mb-16">
            {/* Original Testimonial screenshots - with white background */}
            <div className="bg-white text-black py-16">
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
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                  containScroll: false,
                }}
                className="w-full">
                <CarouselContent className="py-12">
                  {/* Student Story 1 - Ayush */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3 pl-8 pr-12">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="relative flex justify-center">
                          <img 
                            src="/lovable-uploads/526ad95e-20eb-4290-9dc3-52f0e3124b9d.png" 
                            alt="Ayush - Northeastern Student" 
                            className="h-[500px] w-auto"
                          />
                          <div className="absolute bottom-8 left-8 w-24 h-24">
                            <img 
                              src="/lovable-uploads/f8019a77-25c0-4e40-ad6a-b35d4502deeb.png" 
                              alt="Northeastern University Logo" 
                              className="w-full h-full object-contain"
                              style={{ objectPosition: "-270px 90px", objectFit: "none", transform: "scale(0.3)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Ayush came to us in 9th grade, feeling overwhelmed by high school.</p>
                        <p className="text-xl mb-6 font-['Garet']">Through the Long-Term Consulting package, we helped him launch a club, build an investment project, and run a social media page – all of which helped him earn admission to his dream school: Northeastern.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 2 - Neha */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3 pl-8 pr-12">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="relative flex justify-center">
                          <img 
                            src="/lovable-uploads/16ed3930-d7d3-48f5-8078-ae962c8d3558.png" 
                            alt="Neha - Duke Student" 
                            className="h-[500px] w-auto"
                          />
                          <div className="absolute bottom-8 right-8 w-24 h-24">
                            <img 
                              src="/lovable-uploads/f8019a77-25c0-4e40-ad6a-b35d4502deeb.png" 
                              alt="Duke University Logo" 
                              className="w-full h-full object-contain"
                              style={{ objectPosition: "-496px 90px", objectFit: "none", transform: "scale(0.3)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Neha had strong extracurriculars but struggled with writing.</p>
                        <p className="text-xl mb-6 font-['Garet']">We helped her transform her essays into a story that was authentic, personal, and unforgettable – earning her a spot at Duke.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 3 - Leon */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3 pl-8 pr-12">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="relative flex justify-center">
                          <img 
                            src="/lovable-uploads/c798137d-965b-47fe-977d-f56c1590897d.png" 
                            alt="Leon - UPenn Student" 
                            className="h-[500px] w-auto"
                          />
                          <div className="absolute bottom-8 left-8 w-24 h-24">
                            <img 
                              src="/lovable-uploads/f8019a77-25c0-4e40-ad6a-b35d4502deeb.png" 
                              alt="UPenn Logo" 
                              className="w-full h-full object-contain"
                              style={{ objectPosition: "-1220px 90px", objectFit: "none", transform: "scale(0.3)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Leon found ABC after searching for a college consultancy that actually cares about their clients.</p>
                        <p className="text-xl mb-6 font-['Garet']">We worked with him week after week on his essays, and even prepped him for interviews. He is now attending UPenn!</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 4 - Nicole */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3 pl-8 pr-12">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="relative flex justify-center">
                          <img 
                            src="/lovable-uploads/236a9790-a5a1-41cc-9c3a-141eff360897.png" 
                            alt="Nicole - Berkeley Student" 
                            className="h-[500px] w-auto"
                          />
                          <div className="absolute bottom-8 right-8 w-24 h-24">
                            <img 
                              src="/lovable-uploads/f8019a77-25c0-4e40-ad6a-b35d4502deeb.png" 
                              alt="UC Berkeley Logo" 
                              className="w-full h-full object-contain"
                              style={{ objectPosition: "-754px 90px", objectFit: "none", transform: "scale(0.3)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Nicole (not pictured) came to us through a referral with one clear goal: UC Berkeley.</p>
                        <p className="text-xl mb-6 font-['Garet']">Through mentorship, we helped her build a website to showcase her art. Then, through essay coaching, we helped her turn that passion into a story that was both captivating and true.</p>
                        <p className="text-xl font-['Garet']">Now she's exactly where she dreamed of being: UC Berkeley.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Student Story 5 - Kimberly */}
                  <CarouselItem className="md:basis-3/4 lg:basis-2/3 pl-8 pr-12">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="relative flex justify-center">
                          <img 
                            src="/lovable-uploads/e3984685-94ba-4747-ad7e-f2835dc02b44.png" 
                            alt="Kimberly - Stanford Student" 
                            className="h-[500px] w-auto"
                          />
                          <div className="absolute bottom-8 left-8 w-24 h-24">
                            <img 
                              src="/lovable-uploads/f8019a77-25c0-4e40-ad6a-b35d4502deeb.png" 
                              alt="Stanford University Logo" 
                              className="w-full h-full object-contain"
                              style={{ objectPosition: "-1010px 90px", objectFit: "none", transform: "scale(0.3)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-center max-w-2xl">
                        <p className="text-2xl mb-4 font-['Garet']">Kimberly and her family found us while working with another consultancy.</p>
                        <p className="text-xl mb-6 font-['Garet']">They came to ABC for someone who cares – and got it. We helped her revise her original application into something she loved. She's now an incoming Stanford student!</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                <div className="flex justify-center gap-6 mt-8">
                  <CarouselPrevious className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
                  <CarouselNext className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-14 w-14" />
                </div>
              </Carousel>
            </div>
          </ScrollArea>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-16">
            <Button asChild className="bg-[#4CA86B] hover:bg-[#4CA86B]/90 text-white text-lg px-8 py-6 h-auto">
              <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                BOOK A CALL NOW <ExternalLink size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
