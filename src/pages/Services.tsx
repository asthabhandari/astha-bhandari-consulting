
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Impact from "../components/Impact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "LONG TERM COLLEGE CONSULTING",
      description: "Not sure how to make high school count?",
      color: "#f89cb0", // Pink color
      image: "/lovable-uploads/ca70cf13-69da-4478-bd4b-acdff09d9db7.png" // Mentoring icon
    },
    {
      title: "COLLEGE ESSAYS",
      description: "What if your child's story could change everything?",
      color: "#cefa86", // Using the lime green color from existing design
      image: "/lovable-uploads/26f11a20-76bf-427c-a667-19e313568527.png" // Book/essay icon
    },
    {
      title: "MENTORSHIP OPPORTUNITIES",
      description: "Not thinking of college yet?",
      color: "#cefa86", // Using the lime green color from existing design
      image: "/lovable-uploads/8009a80e-0b42-4a68-a05e-d609a1fde3fd.png" // Accepted student icon
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-normal mb-16 tracking-wide">HOW WE CAN HELP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                color={service.color}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Impact />
      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8">Ready to take the next step?</h2>
          <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black rounded-none px-8 py-6 h-auto text-base font-normal tracking-wider">
            <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              BOOK A CALL <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
