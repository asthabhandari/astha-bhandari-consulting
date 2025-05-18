import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const LongTermConsulting = () => {
  const sections = [
    {
      title: "EARLY COMPREHENSIVE PLANNING",
      content: (
        <div className="space-y-6 font-sans text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          <p className="text-left">
            I work one-on-one with your child starting as early as 8th grade to build a 
            <span className="font-medium text-white"> multi-year admissions strategy</span>—because 
            elite applicants aren't made in a single year. Unlike generic advisors, I focus on 
            cultivating an authentic, standout profile that evolves with your child's strengths.
          </p>
          
          <div className="border-l-2 border-[#f89cb0] pl-4 my-4 text-left">
            <p className="italic text-gray-300">
              "The most successful applicants begin their journey years before applications are due." 
            </p>
          </div>
          
          <p className="text-left">
            Through <span className="font-medium text-white">exclusive, personalized guidance</span>, 
            I'll help craft an academic trajectory and extracurricular portfolio that signals both 
            intellectual vitality and leadership—exactly what Ivy+ committees look for.
          </p>
        </div>
      ),
    },
    {
      title: "ACADEMIC PROFILE OPTIMIZATION",
      content: (
        <div className="space-y-6 font-sans text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          <p className="text-left">
            I strategically plan every course selection—not just for GPA maximization, but to create a 
            <span className="font-medium text-white"> cohesive intellectual narrative</span> that aligns 
            with your child's target schools' expectations.
          </p>
          
          <ul className="list-disc pl-6 space-y-3 marker:text-[#f89cb0] text-left">
            <li>
              <span className="font-medium text-white">Early intervention system</span> monitors 
              academic performance
            </li>
            <li>
              Access to <span className="font-medium text-white">elite tutors</span> and 
              enrichment programs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "EXTRA-CURRICULAR ARCHITECTURE",
      content: (
        <div className="space-y-6 font-sans text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          <p className="text-left">
            Top schools want <span className="font-medium text-white">spikes, not checkboxes</span>. 
            I help students cultivate 2-3 <span className="font-medium text-white">high-impact passions</span>:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2 text-center">Exclusive Opportunities</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• University research partnerships</li>
                <li>• Founder-level initiatives</li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2 text-center">Narrative Development</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Impact measurement strategies</li>
                <li>• Compelling storytelling frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "COLLEGE MATCHING STRATEGY",
      content: (
        <div className="space-y-6 font-sans text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          <p className="text-left">
            My <span className="font-medium text-white">proprietary matching system</span> identifies 
            schools where your child will:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3 marker:font-medium marker:text-[#f89cb0] text-left">
            <li>Gain admission based on institutional priorities</li>
            <li>Thrive socially and academically</li>
          </ol>
          
          <div className="mt-6 p-4 bg-white/5 border border-[#f89cb0]/20 rounded-lg text-left">
            <p>
              Includes strategic ED/RD planning and 
              <span className="font-medium text-white"> yield protection</span> techniques.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "24/7 DIRECT ACCESS",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <div className="bg-[#f89cb0]/10 p-6 rounded-lg border border-[#f89cb0]/30">
            <p className="text-left text-gray-100">
              <span className="font-medium text-white">Premium clients receive my personal phone number</span> for 
              urgent questions or guidance between our scheduled meetings.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-[#f89cb0] text-gray-100">
              <li className="pl-2">Text me anytime about application updates or decisions</li>
              <li className="pl-2">Immediate support before important interviews</li>
              <li className="pl-2">Last-minute essay reviews during crunch time</li>
            </ul>
            
            <p className="mt-6 text-left italic text-gray-300">
              "When our internent connection went down at 10pm the night of the Duke ED deadline, Astha
              answered my text within 15 minutes and submitted the application for us."
              <span className="block mt-2 not-italic text-white">— The Subedi Family</span>
            </p>
          </div>
        </div>
      ),
    }
  ];

  return (
    <ServiceDetail 
      title={
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-pink tracking-tight mb-6 text-center">
          LONG TERM COLLEGE CONSULTING
        </h1>
      }
      subtitle={
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          Multi-year strategic planning for elite university admissions
        </p>
      }
      sections={sections} 
    />
  );
};

export default LongTermConsulting;