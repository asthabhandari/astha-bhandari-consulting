
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, color, image, link }) => {
  return (
    <div className="flex flex-col items-center space-y-6 text-center">
      <div className="h-40 flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
          className="w-32 h-auto object-contain"
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-normal underline" style={{ color }}>
        {title}
      </h3>
      <p className="text-xl md:text-2xl font-normal text-white">
        {description}
      </p>
      <Button asChild variant="link" className="text-[#f89cb0] p-0 hover:text-[#f89cb0]/80">
        <Link to={link} className="flex items-center gap-2 text-lg">
          Learn More <ArrowRight size={20} />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
