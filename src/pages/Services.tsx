import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "EARLY COLLEGE ROADMAPPING",
      description: "For families who understand: Top-tier admissions requires multi-year strategy, with the right consultant.",
      color: "#f89cb0",
      image: "/images/LongTerm.png", 
      link: "/consulting",
      badge: "MOST EXCLUSIVE"
    },
    {
      title: "COLLEGE ESSAY CONSULTING",
      description: "Transform your child's story into an admissions advantage with our incredible writers who can create a story out of anything.",
      color: "#f89cb0",
      image: "/images/Essays.png", 
      link: "/essays",
      badge: "LIMITED SPOTS"
    },
    {
      title: "A LA CARTE RUSHED EDITING",
      description: "For families who need a last-minute review of their essays, or a second opinion on their application.",
      color: "#f89cb0",
      image: "/images/Mentorship.png", 
      link: "/mentorship",
      badge: "LAST MINUTE"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
              STRATEGIC ADMISSIONS SUPPORT
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discreet, personalized guidance for families pursuing exceptional outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                color={service.color}
                image={service.image}
                link={service.link}
                badge={service.badge}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl services-font mb-4">
            The difference between <span className="text-[#f89cb0]">good</span> and <span className="text-[#f89cb0]">unforgettable</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our students have a 100% acceptance rate at top-20 institutions. And a 100% acceptance rate at their dream school.
          </p>
          <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black rounded-none px-8 py-6 h-auto text-base font-normal tracking-wider transition-transform hover:scale-105">
            <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              SECURE YOUR CONSULTATION <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;