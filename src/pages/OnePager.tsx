
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

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
        "Admissions guidance",
        "Waitlist support",
        "Financial aid review",
        "Letter of continued interest",
        "Post-acceptance advising"
      ]
    }
  ];

  const studentStories = [
    {
      name: "Kimberly",
      college: "Stanford University",
      image: "/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png",
      review: "ABC helped me craft an authentic story that truly represented who I am."
    },
    {
      name: "Leon",
      college: "University of Pennsylvania",
      image: "/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png",
      review: "From day one, we partnered closely, refining essays line by line."
    },
    {
      name: "Ayush",
      college: "Northeastern University",
      image: "/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png",
      review: "Through Long-Term Consulting, I launched a club and developed investment projects."
    }
  ];

  const colleges = [
    {
      name: "Stanford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/500px-Seal_of_Leland_Stanford_Junior_University.svg.png"
    },
    {
      name: "Duke",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/360px-Duke_University_seal.svg.png"
    },
    {
      name: "Princeton",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/320px-Princeton_seal.svg.png"
    },
    {
      name: "UPenn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/250px-UPenn_shield_with_banner.svg.png"
    },
    {
      name: "UC Berkeley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png"
    },
    {
      name: "UCLA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png"
    },
    {
      name: "Northwestern",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Northwestern_University_seal.svg/1200px-Northwestern_University_seal.svg.png"
    },
    {
      name: "UMich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/360px-Seal_of_the_University_of_Michigan.svg.png"
    },
    {
      name: "NYU",
      logo: "https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg"
    },
    {
      name: "USC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Southern_California_%28USC%29_seal.svg/1200px-University_of_Southern_California_%28USC%29_seal.svg.png"
    },
    {
      name: "Amherst",
      logo: "https://www.amherst.edu/system/files/media/Amherst-College-seal-purple-stomp-575px.png"
    },
    {
      name: "Georgia Tech",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Georgia_Tech%27s_Buzz_logo.svg/1200px-Georgia_Tech%27s_Buzz_logo.svg.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-25 to-pink-100 text-black p-8 max-w-[8.5in] mx-auto print:p-4 relative"
         style={{
           backgroundImage: `
             radial-gradient(circle at 20% 30%, rgba(248, 156, 176, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 70%, rgba(248, 156, 176, 0.08) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(248, 156, 176, 0.06) 0%, transparent 50%),
             radial-gradient(circle at 90% 20%, rgba(248, 156, 176, 0.04) 0%, transparent 50%)
           `
         }}>
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <h1 className="text-6xl font-bold">
            <span className="text-black">AB</span><span className="text-[#f89cb0]">C</span>
          </h1>
          <GraduationCap size={48} className="text-[#f89cb0]" />
        </div>
        <p className="text-2xl font-medium text-gray-700 mb-6">
          Great Essays Don't Write Themselves. ABC Does.
        </p>
        <div className="flex justify-center items-center gap-8 text-base font-medium">
          <span className="bg-[#f89cb0] text-white px-4 py-2 rounded">100% Acceptance Rate</span>
          <span className="text-gray-600">7+ Years Experience</span>
          <span className="text-gray-600">Stanford, Ivy League, Duke & T20 Schools</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-10 text-center">
        <div>
          <div className="text-4xl font-bold text-[#f89cb0]">100%</div>
          <div className="text-base text-gray-600">Acceptance Rate</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f89cb0]">26</div>
          <div className="text-base text-gray-600">Dream Acceptances</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f89cb0]">54</div>
          <div className="text-base text-gray-600">Scholarships</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f89cb0]">40</div>
          <div className="text-base text-gray-600">Mentorships</div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-4 text-[#f89cb0]">WHO WE ARE</h2>
          <p className="text-base leading-relaxed mb-4">
            <strong> Astha Bhandari Consulting </strong>  was founded by Astha Bhandari— the proud daughter of immigrants who 
            <strong> cracked the code of elite college admissions</strong> with no legacy status, 
            no private consultants, and no family blueprint to follow.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Astha discovered that college admissions isn't just about checking boxes. Every school is looking 
            for something different: students who <strong>FIT</strong>. Each institution seeks distinct values, 
            voices, and potential.
          </p>
          <div className="bg-[#f89cb0]/10 p-4 rounded border-l-4 border-[#f89cb0]">
            <p className="text-base italic">
              "My favorite part of this is watching students realize how amazing their story can be if written correctly."
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="/lovable-uploads/e0be2613-5b22-4b88-a2a2-c54da891d7d1.png" 
            alt="Astha at Stanford" 
            className="w-36 h-44 object-cover rounded shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#f89cb0] text-center">OUR SERVICES</h2>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 bg-white/50">
              <h3 className="font-bold text-xl mb-3">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4 italic">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start">
                    <span className="text-[#f89cb0] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Page Break for Print */}
      <div className="print:break-before-page"></div>

      {/* Success Stories */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold mb-8 text-[#f89cb0] text-center">REAL PEOPLE, REAL RESULTS</h3>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {studentStories.map((student, index) => (
            <div key={index} className="text-center">
              <img 
                src={student.image} 
                alt={`${student.name} at ${student.college}`} 
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="font-bold text-xl">{student.name}</h4>
              <p className="text-base text-[#f89cb0] font-medium mb-3">{student.college}</p>
              <p className="text-sm text-gray-600 italic">"{student.review}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* College Logos */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-6 text-[#f89cb0] text-center">COLLEGE ACCEPTANCES</h3>
        <div className="grid grid-cols-6 gap-4">
          {colleges.map((college, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white p-2 rounded-full shadow-sm flex items-center justify-center">
                <img 
                  src={college.logo} 
                  alt={`${college.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-center mt-2 font-medium">{college.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="bg-[#f89cb0]/10 p-8 rounded-lg mb-10 text-center">
        <p className="text-lg italic mb-4 font-medium">
          "When our internet connection went down at 10pm the night of the Duke ED deadline, 
          Astha answered my text within 15 minutes and submitted the application for us."
        </p>
        <p className="text-base font-bold">— The Subedi Family</p>
        <p className="text-sm text-gray-600">Duke University Early Decision Acceptance</p>
      </div>

      {/* Additional Student Reviews */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-50/70 p-5 rounded">
          <p className="text-base italic mb-3">"ABC helped me discover my authentic voice and turn my passion into a compelling story."</p>
          <p className="text-sm font-medium">— Student, UC Berkeley</p>
        </div>
        <div className="bg-gray-50/70 p-5 rounded">
          <p className="text-base italic mb-3">"The personalized approach made all the difference. I felt supported every step of the way."</p>
          <p className="text-sm font-medium">— Student, Northwestern</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center border-t pt-8">
        <h3 className="text-2xl font-bold mb-4 text-[#f89cb0]">READY TO GET STARTED?</h3>
        <p className="text-base mb-6">
          Trusted by families in Silicon Valley, North Carolina, and abroad
        </p>
        <div className="flex justify-center items-center gap-12">
          <div className="text-base flex flex-col items-center">
            <p className="font-medium mb-2">Book a Free Consultation</p>
            <p className="text-gray-600 mb-4">calendly.com/asthabhandari/quick-chat</p>
            {/* QR Code */}
            <div className="w-24 h-24 bg-white p-2 rounded border border-gray-200">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://calendly.com/asthabhandari/quick-chat"
                alt="QR Code for Calendly booking"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text-base">
            <p className="font-medium">Location</p>
            <p className="text-gray-600">San Francisco Bay Area, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
