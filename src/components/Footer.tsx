
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ivy<span className="text-pink-500">Edge</span></h3>
            <p className="text-gray-300 mb-4">
              Premier college consulting services with a 100% success rate. We help students get into their dream schools.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} IvyEdge. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Long-Term Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  College Essays
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>San Francisco Bay Area</p>
              <p>California, USA</p>
              <p>contact@ivyedge.com</p>
              <p>(555) 123-4567</p>
            </address>
            <div className="mt-4">
              <Link to="/contact" className="text-pink-400 hover:underline font-medium">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
