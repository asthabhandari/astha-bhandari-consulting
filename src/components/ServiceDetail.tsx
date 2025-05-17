
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ServiceSection {
  title: string;
  content: React.ReactNode;
}

interface ServiceDetailProps {
  title: string;
  sections: ServiceSection[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, sections }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <h1 className="text-5xl md:text-7xl font-normal tracking-wide">{title}</h1>
            <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black rounded-none px-8 py-6 h-auto text-lg md:text-xl font-normal tracking-wider">
              <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                BOOK A CALL NOW <ArrowRight size={24} />
              </a>
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {sections.map((section, index) => (
                <CarouselItem key={index} className="md:basis-full px-4">
                  <div className="p-6">
                    <h2 className="text-4xl md:text-5xl font-normal mb-10">{section.title}</h2>
                    <div className="text-xl md:text-2xl leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-12 w-12" />
              <CarouselNext className="relative inset-auto bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 hover:text-black h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </section>
      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-10">Ready to take the next step?</h2>
          <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black rounded-none px-10 py-8 h-auto text-lg md:text-xl font-normal tracking-wider">
            <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              BOOK A CALL <ArrowRight size={24} />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
