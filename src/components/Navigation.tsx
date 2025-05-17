
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with conditional styling for About page */}
          <Link to="/" className="flex flex-col items-start">
            <h1 className={`text-xl font-light tracking-wider ${isAboutPage ? 'text-black' : 'text-[#f89cb0]'}`}>A B C</h1>
            <span className={`text-xs ${isAboutPage ? 'text-black' : 'text-white/70'} font-light`}>Astha Bhandari Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#f89cb0] transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-[#f89cb0] transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-[#f89cb0] transition-colors">
              About Us
            </Link>
            <Link to="/testimonials" className="text-white hover:text-[#f89cb0] transition-colors">
              Our Impact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black">
              <a href="https://calendly.com/asthabhandari/quick-chat" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${isAboutPage ? 'text-black' : 'text-white'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Impact
            </Link>
            <a
              href="https://calendly.com/asthabhandari/quick-chat"
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#f89cb0] text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
