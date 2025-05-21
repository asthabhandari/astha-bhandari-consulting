import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const ALaCarteServices = () => {
  const sections = [
    {
      title: "LAST-MINUTE ESSAY REVIEW & HOURLY SERVICES",
      content: (
        <div className="space-y-8 font-sans text-lg leading-relaxed max-w-4xl mx-auto">
          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden h-64 w-full mb-8">
            <img
              src="https://greatcollegeadvice.com/wp-content/uploads/2020/05/bigstock-Young-Desperate-Student-In-Str-288736867-scaled.jpg"
              alt="Student working on college applications"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/15">
      <p className="text-gray-300 mb-6">
        Designed for families who need urgent feedback or guidance but are not enrolled in one of our core consulting packages.
      </p>
      
      <div className="bg-white/10 p-4 rounded-lg mb-6">
        <p className="text-[#f89cb0] font-medium">
          Please note: These offerings are limited and priced to reflect time-sensitive availability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white font-['Garet'] mb-4">What This Service Is</h3>
          
          {/* Content Image */}
          <div className="relative rounded-lg overflow-hidden h-48 w-full mb-4">
            <img
              src="public/images/whatthisserviceis.png"
              alt="Student focusing on work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Best suited for:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                    <span>Students who want high-level editing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                    <span>Parents seeking reassurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                    <span>Applicants facing deadlines</span>
                  </li>
                </ul>
                
                <p className="text-gray-300 mt-4">
                  For ongoing support, we recommend our full consulting packages.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/15">
      <h3 className="text-2xl font-bold text-white font-['Garet'] mb-6">One-Time Essay Edits</h3>
      
      {/* Pricing Image */}
      <div className="relative rounded-lg overflow-hidden h-48 w-full mb-6">
        <img
          src="public/images/studentworkingwithlaptop.png"
          alt="Student reviewing essay"
          className="w-full h-full object-cover object-[center_90%]"
          loading="lazy"
        />
      </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-3 font-bold text-white">Essay Length</th>
                    <th className="pb-3 font-bold text-white">Price</th>
                    <th className="pb-3 font-bold text-white">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Up to 150 words", "$225", "48 hours"],
                    ["151–300 words", "$295", "72 hours"],
                    ["301–500 words", "$395", "72 hours"],
                    ["501–750 words", "$495", "3 - 4 days"],
                    ["750+ words", "$995", "3 - 5 days"]
                  ].map(([length, price, turnaround]) => (
                    <tr key={length} className="border-b border-white/10">
                      <td className="py-3 text-gray-300">{length}</td>
                      <td className="py-3 text-white font-medium">{price}</td>
                      <td className="py-3 text-gray-300">{turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-bold text-white mb-3">Service includes:</h4>
              <ul className="space-y-2 text-gray-300 pl-5">
                <li className="flex items-start">
                  <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                  <span>Comprehensive in-line revision suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                  <span>Tone alignment for competitive admissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f89cb0] mr-2 mt-1">•</span>
                  <span>Direct feedback from Astha</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 1:1 Meetings */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/15">
      <h3 className="text-2xl font-bold text-white font-['Garet'] mb-6">Private Consultations</h3>
      
      {/* Consultation Image */}
      <div className="relative rounded-lg overflow-hidden h-48 w-full mb-6">
        <img
          src="public/images/studentworkingonzoom.png"
          alt="Student in consultation"
          className="w-full h-full object-cover object-[center_75%]"
          loading="lazy"
        />
      </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                ["Strategy Session", "60 min", "$225"],
                ["Essay Review", "30 min", "$195"],
                ["Admissions Q&A", "45 min", "$200"]
              ].map(([type, duration, price]) => (
                <div key={type} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-white">{type}</h4>
                  <p className="text-gray-300 text-sm">{duration}</p>
                  <p className="text-[#f89cb0] font-medium mt-2">{price}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300">
              Conducted via Zoom with follow-up summary included.
            </p>
          </div>

          {/* Pricing Explanation */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/15">
            <h3 className="text-2xl font-bold text-white font-['Garet'] mb-6">Service Philosophy</h3>
            <p className="text-gray-300 mb-4">
              These services are priced to accommodate urgent requests while maintaining quality for our full-service clients.
            </p>
            
            {/* Philosophy Image Placeholder */}
            <div className="relative rounded-lg overflow-hidden h-48 w-full mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTZ9pqRqszxVVtyJDkkBRKQa0Xus5J4Vrrg&s"
          alt="Student in consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
            
            <p className="text-gray-300">
              For comprehensive support, we recommend exploring our full consulting packages.
            </p>
          </div>

          {/* Collapsible Disclaimers */}
          <details className="bg-white/5 p-4 rounded-lg border border-white/10 group">
            <summary className="cursor-pointer flex justify-between items-center">
              <span className="font-bold text-white">Important Disclaimers</span>
              <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-4 space-y-3 text-gray-300 text-sm">
              <p>• No refunds once editing has begun</p>
              <p>• Meetings require full payment at booking</p>
              <p>• Additional revisions incur separate charges</p>
              <p>• Availability is limited during peak seasons</p>
            </div>
          </details>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
  {/* Request Essay Review Button */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTJJnVtWqd8U5CTcAGdQvmi4AnH84a5egQL7J736gLZ5aGcw/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#f89cb0] hover:bg-[#f89cb0]/90 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
          >
            Request Essay Review
          </a>

          {/* Schedule Consultation Button */}
          <a 
            href="https://calendly.com/asthabhandari/quick-chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 border border-white rounded-lg transition-colors duration-300 text-center"
          >
            Schedule Consultation
          </a>
        </div>
                </div>
      )
    }
  ];

  return (
    <ServiceDetail 
      title={
        <h1 className="text-5xl md:text-6xl font-['Garet'] font-bold text-white tracking-tight mb-6 text-center">
          À LA CARTE SERVICES
        </h1>
      }
      subtitle={
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-4 text-center font-light">
          Last-minute support for urgent admissions needs
        </p>
      }
      sections={sections} 
    />
  );
};

export default ALaCarteServices;