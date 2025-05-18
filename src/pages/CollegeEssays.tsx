import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const CollegeEssays = () => {
  const sections = [
    {
      title: "IVY-LEVEL PERSONAL STATEMENT CRAFTING",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <p className="text-left text-gray-100">
            The personal statement is where <span className="font-medium text-white">elite applicants separate themselves</span> from the crowd. My 
            <span className="font-medium text-white"> signature storytelling framework</span> helps uncover those 
            <span className="font-medium text-white"> pivotal moments</span> admissions committees remember—whether it's founding a nonprofit at 15 or unique cultural perspectives.
          </p>
          
          <div className="border-l-2 border-[#f89cb0] pl-4 my-4 text-left">
          </div>
          
          <ul className="list-disc pl-6 space-y-3 marker:text-[#f89cb0] text-left text-gray-100">
            <li className="pl-2"><span className="font-medium text-white">5+ drafting sessions</span> to refine voice and structure</li>
            <li className="pl-2"><span className="font-medium text-white">Ivy+ reader insights</span> on what makes essays memorable</li>
            <li className="pl-2"><span className="font-medium text-white">Tone calibration</span> for authenticity and sophistication</li>
          </ul>
        </div>
      ),
    },
    {
      title: "STRATEGIC SUPPLEMENTAL ESSAY DEVELOPMENT",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <p className="text-left text-gray-100">
            Top schools use supplements as <span className="font-medium text-white">secret "fit tests"</span>. My decade of decoding reveals:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2 text-center">Institutional Nuances</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• How Yale's "Why Yale?" differs from Princeton's</li>
                <li>• Which STEM programs want humanities perspectives</li>
                <li>• When legacy mentions help vs. hurt</li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2 text-center">Recent Success</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 27 supplements → Harvard+Stanford acceptances</li>
                <li>• 92% reuse rate across applications</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "ADMISSIONS COMMITTEE-LEVEL EDITING",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <p className="text-left text-gray-100">
            While others fix grammar, I optimize <span className="font-medium text-white">admissibility</span> through:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 marker:text-[#f89cb0] text-left text-gray-100">
            <li className="pl-2">
              <span className="font-medium text-white">Psychological framing</span> - When vulnerability strengthens vs. undermines
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Lexical precision</span> - The ideal "big word" frequency per school
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Narrative threading</span> - Connecting all application materials
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-white/5 border border-[#f89cb0]/20 rounded-lg text-left">
            <p className="text-gray-300">
              <span className="font-medium text-white">Complete discretion</span> - No junior staff, no shared servers, just direct 1:1 collaboration.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "24/7 ESSAY EMERGENCY SUPPORT",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <div className="bg-[#f89cb0]/10 p-6 rounded-lg border border-[#f89cb0]/30">
            <p className="text-left text-gray-100">
              <span className="font-medium text-white">Direct phone access</span> for urgent essay crises—because deadlines wait for no one.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-[#f89cb0] text-gray-100">
              <li className="pl-2">11th-hour Common App crash? I'll review drafts until midnight</li>
              <li className="pl-2">Surprise supplemental prompt? Get same-day rewrites</li>
              <li className="pl-2">Interview tomorrow? Bullet-point strategy in 30 minutes</li>
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
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6 text-center">
          IVY-GRADE ESSAY MASTERY
        </h1>
      }
      subtitle={
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          Where compelling narratives meet admissions strategy
        </p>
      }
      sections={sections} 
    />
  );
};

export default CollegeEssays;