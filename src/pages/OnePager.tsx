
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OnePager = () => {
  const services = [
    {
      name: "Lite Package",
      description: "Self-motivated students applying ED to a dream school",
      features: [
        "2 strategy meetings",
        "Common App essay (2 rounds)",
        "3 supplemental essays (2 rounds each)",
        "Activities list editing"
      ]
    },
    {
      name: "Core Package", 
      description: "Students needing a comprehensive plan for multiple applications",
      features: [
        "6 strategy meetings",
        "Common App essay (6 rounds)",
        "7+ supplemental essays (6 rounds each)",
        "Activities + awards editing",
        "Brag sheet & recommenders"
      ]
    },
    {
      name: "Premium Package",
      description: "Families wanting 24/7 expert access and end-to-end support",
      features: [
        "10+ strategy meetings + direct access",
        "Unlimited essay revisions",
        "Live co-writing sessions",
        "Complete activities & awards editing",
        "Personal branding framework",
        "School list strategy",
        "Mock interviews",
        "Post-acceptance advising"
      ]
    }
  ];

  const colleges = [
    "Stanford", "Duke", "Princeton", "UPenn", "UC Berkeley", "UCLA", "Northwestern", 
    "UMich", "Dartmouth", "NYU", "USC", "Amherst", "Georgia Tech"
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 max-w-[8.5in] mx-auto print:p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          A<span className="text-[#f89cb0]">B</span>C
        </h1>
        <p className="text-xl font-medium text-gray-700 mb-4">
          Great Essays Don't Write Themselves. ABC Does.
        </p>
        <div className="flex justify-center items-center gap-8 text-sm font-medium">
          <span className="bg-[#f89cb0] text-white px-3 py-1 rounded">100% Success Rate</span>
          <span className="text-gray-600">7+ Years Experience</span>
          <span className="text-gray-600">Stanford, Ivy League, Duke & T20 Schools</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-8 text-center">
        <div>
          <div className="text-3xl font-bold text-[#f89cb0]">100%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#f89cb0]">26</div>
          <div className="text-sm text-gray-600">Dream Acceptances</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#f89cb0]">54</div>
          <div className="text-sm text-gray-600">Scholarships</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#f89cb0]">40</div>
          <div className="text-sm text-gray-600">Mentorships</div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-3 text-[#f89cb0]">WHO WE ARE</h2>
          <p className="text-sm leading-relaxed mb-3">
            <strong>ABC was founded by Astha Bhandari</strong> — the proud daughter of immigrants who 
            <strong> cracked the code of elite college admissions</strong> with no legacy status, 
            no private consultants, and no family blueprint to follow.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Astha discovered that college admissions isn't just about checking boxes. Every school is looking 
            for something different: students who <strong>FIT</strong>. Each institution seeks distinct values, 
            voices, and potential.
          </p>
          <div className="bg-[#f89cb0]/10 p-3 rounded border-l-4 border-[#f89cb0]">
            <p className="text-sm italic">
              "My favorite part of this is watching students realize how amazing their story can be if written correctly."
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="/lovable-uploads/e0be2613-5b22-4b88-a2a2-c54da891d7d1.png" 
            alt="Astha at Stanford" 
            className="w-32 h-40 object-cover rounded shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#f89cb0] text-center">OUR SERVICES</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">{service.name}</h3>
              <p className="text-xs text-gray-600 mb-3 italic">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs flex items-start">
                    <span className="text-[#f89cb0] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories & Colleges */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#f89cb0]">REAL PEOPLE, REAL RESULTS</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png" 
                alt="Stanford Student" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">Kimberly</p>
                <p className="text-xs text-[#f89cb0]">Stanford University</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png" 
                alt="UPenn Student" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">Leon</p>
                <p className="text-xs text-[#f89cb0]">University of Pennsylvania</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png" 
                alt="Northeastern Student" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">Ayush</p>
                <p className="text-xs text-[#f89cb0]">Northeastern University</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#f89cb0]">COLLEGE ACCEPTANCES</h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {colleges.map((college, index) => (
              <div key={index} className="bg-gray-100 px-2 py-1 rounded text-center">
                {college}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Quote */}
      <div className="bg-[#f89cb0]/10 p-4 rounded-lg mb-6 text-center">
        <p className="text-sm italic mb-2">
          "When our internet connection went down at 10pm the night of the Duke ED deadline, 
          Astha answered my text within 15 minutes and submitted the application for us."
        </p>
        <p className="text-xs font-medium">— The Subedi Family</p>
      </div>

      {/* Contact Section */}
      <div className="text-center border-t pt-6">
        <h3 className="text-xl font-bold mb-3 text-[#f89cb0]">READY TO GET STARTED?</h3>
        <p className="text-sm mb-4">
          Trusted by families in Silicon Valley, North Carolina, and abroad
        </p>
        <div className="flex justify-center items-center gap-6">
          <div className="text-sm">
            <p className="font-medium">Book a Free Consultation</p>
            <p className="text-gray-600">calendly.com/asthabhandari/quick-chat</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">Location</p>
            <p className="text-gray-600">San Francisco Bay Area, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
