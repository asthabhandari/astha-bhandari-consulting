import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const Mentorship = () => {
  const sections = [
    {
      title: "ONE-ON-ONE LEARNING ADVENTURES",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <p className="text-left text-gray-100">
            Whether your child is <span className="font-medium text-white">struggling with multiplication tables</span> or 
            <span className="font-medium text-white"> launching a nonprofit</span>, my personalized mentorship adapts to their 
            exact needs—no canned programs, just authentic learning.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 text-left">
            <div className="bg-white/10 p-5 rounded-lg border border-[#f89cb0]/20">
              <h4 className="font-medium text-white mb-3 text-center text-lg">Academic Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Elementary reading/writing foundations</li>
                <li>• Middle school STEM project coaching</li>
                <li>• High school AP/IB subject mastery</li>
                <li>• And more! Just ask :)</li>
              </ul>
            </div>
            <div className="bg-white/10 p-5 rounded-lg border border-[#f89cb0]/20">
              <h4 className="font-medium text-white mb-3 text-center text-lg">Passion Projects</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Science fair prep & competition strategy</li>
                <li>• Creative writing portfolio development</li>
                <li>• Social impact initiative planning</li>
                <li>• And more! Just ask :)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "HOW IT WORKS",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <ol className="list-decimal pl-6 space-y-4 marker:font-medium marker:text-[#f89cb0] text-left text-gray-100">
            <li className="pl-3">
              <span className="font-medium text-white">Discovery Call</span> – We identify your child’s goals (30 min)
            </li>
            <li className="pl-3">
              <span className="font-medium text-white">Custom Plan</span> – I design a learning journey matching their age + interests
            </li>
            <li className="pl-3">
              <span className="font-medium text-white">Flexible Sessions</span> – Meet weekly or as-needed (via Zoom/in-person)
            </li>
          </ol>
          
          <div className="border-l-2 border-[#f89cb0] pl-4 mt-6 text-left">
            <p className="italic text-gray-300">
              "Astha made geometry click for my 8th grader and helped my 5th grader publish his comic book all in the same month!"
              <span className="block mt-2 not-italic text-white">— The Cecil Family</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "24/7 MENTOR ACCESS",
      content: (
        <div className="space-y-6 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          <div className="bg-[#f89cb0]/10 p-6 rounded-lg border border-[#f89cb0]/30">
            <p className="text-left text-gray-100">
              <span className="font-medium text-white">My personal number</span> goes to families for:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-[#f89cb0] text-gray-100">
              <li className="pl-2">Last-minute science project crises</li>
              <li className="pl-2">Essay drafts needing urgent feedback</li>
              <li className="pl-2">"How do I...?" questions about passions</li>
            </ul>
            <p className="mt-4 text-left text-sm text-gray-400">
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
          PERSONALIZED MENTORSHIP
        </h1>
      }
      subtitle={
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          For curious minds aged 6–18: mastering schoolwork <span className="text-[#f89cb0]">+</span> fueling passions
        </p>
      }
      sections={sections} 
    />
  );
};

export default Mentorship;