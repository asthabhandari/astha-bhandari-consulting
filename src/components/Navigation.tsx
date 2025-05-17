
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Ivy<span className="text-pink-500">Edge</span></h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-pink-500 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-pink-500 transition-colors">
              About Us
            </Link>
            <Link to="/testimonials" className="text-gray-800 hover:text-pink-500 transition-colors">
              Success Stories
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-pink-500 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
