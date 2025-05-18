import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  image: string;
  link: string;
  badge?: string;
}

const ServiceCard = ({ title, description, color, image, link, badge }: ServiceCardProps) => {
  return (
    <div className="border-2 border-white rounded-lg p-6 hover:border-[#f89cb0] transition-all duration-300 hover:shadow-lg hover:shadow-[#f89cb0]/20 flex flex-col justify-between h-full relative group">
      {/* Premium badge */}
      {badge && (
        <div className="absolute -top-3 -right-3 bg-[#f89cb0] text-black text-sm font-bold px-3 py-1 rounded-full z-10">
          {badge}
        </div>
      )}
      
      <div className="flex flex-col h-full">
        {/* Image container - now with larger image */}
        <div className="w-full h-48 md:h-56 mb-6 overflow-hidden rounded-md flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 min-w-full min-h-full"
            style={{ maxHeight: 'none' }} // Remove any height restrictions
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-3xl font-bold text-center mb-4 text-white">
            {title.toUpperCase()}
          </h3>
          
          <p className="text-white/80 text-lg text-center font-light leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          
          <Link 
            to={link} 
            className="mt-auto flex items-center justify-center gap-2 text-[#f89cb0] hover:text-white transition-colors font-medium group"
          >
            DISCOVER OUR PROCESS
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;