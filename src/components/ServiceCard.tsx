
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, color, image, link }: ServiceCardProps) => {
  return (
    <div className="border-2 border-white rounded-lg p-6 hover:border-[#f89cb0] transition-colors flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-center mb-8">
          <img src={image} alt={title} className="h-24 w-24" />
        </div>
        
        <h3 className="text-2xl font-light text-center mb-4 text-white">
          {title}
        </h3>
        
        <p className="text-white/70 text-center">
          {description}
        </p>
      </div>
      
      <Link 
        to={link} 
        className="mt-6 flex items-center justify-center gap-2 text-[#f89cb0] hover:text-white transition-colors group"
      >
        Learn More <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
