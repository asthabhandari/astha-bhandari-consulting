
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light mb-4">A<span className="text-[#f89cb0]">B</span>C</h3>
            <p className="text-gray-300 mb-4">
              Premier college consulting services with a 100% success rate. We help students get into their dream schools.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} ABC. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/consulting" className="text-gray-300 hover:text-[#f89cb0] transition-colors">
                  Long-Term Consulting
                </Link>
              </li>
              <li>
                <Link to="/essays" className="text-gray-300 hover:text-[#f89cb0] transition-colors">
                  College Essays
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-[#f89cb0] transition-colors">
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-light mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#f89cb0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-[#f89cb0] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/asthabhandari/quick-chat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#f89cb0] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-light mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>San Francisco Bay Area</p>
              <p>California, USA</p>
            </address>
            <div className="mt-4">
              <a 
                href="https://calendly.com/asthabhandari/quick-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f89cb0] hover:underline font-light"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
