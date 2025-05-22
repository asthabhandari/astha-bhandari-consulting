import React, { useState } from "react";
import ServiceDetail from "../components/ServiceDetail";

const CollegeBundles: React.FC = () => {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const toggleService = (serviceName: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  // Service descriptions remain identical
  const SERVICE_DESCRIPTIONS = {
    "Self-Discovery & Academic Framing": "Define the student's unique strengths, passions, and long-term academic goals to create a foundation for all application materials.",
    "Personal Branding & Story": "Develop a cohesive narrative thread that ties essays, activities, and recommendations together into a compelling personal brand.",
    "Activities & Honors Strategy": "Optimize and edit extracurricular and awards entries to highlight leadership, depth, and impact within character limits.",
    "School List Curation": "Research and assemble a balanced list of reach, match, and safety schools aligned with the student's interests and goals.",
    "Application Calendar": "Create a detailed timeline mapping out essay drafts, test dates, recommendation deadlines, and submission windows.",
    "Common App Essay": "Guide brainstorming, structure, and revision of the primary personal statement to reflect authentic voice and narrative.",
    "Supplemental Essays": "Assist in crafting school-specific essays that clearly articulate fit, interest, and individual story for each application.",
    "Recommendation Strategy": "Advise on selecting recommenders and preparing custom brag sheets to ensure strong, narrative-aligned endorsements.",
    "Mock Interviews": "Conduct practice interviews to build confidence, refine delivery, and prepare for alumni or scholarship interview formats.",
    "Submission Support": "Provide final review of all application components and technical guidance on submission platforms to avoid errors.",
    "Offer Analysis & Decision": "Compare acceptance offers side-by-side and coach students and families to make informed, confident enrollment decisions.",
    "Financial Aid Review": "Interpret financial aid and scholarship awards, and guide appeals or negotiations to maximize affordability.",
    "Undergrad Match-Ups": "Connect admitted students with current undergraduates for honest insights into campus life and culture.",
    "Waitlist Strategy": "Advise on crafting effective Letters of Continued Interest and follow-up plans for waitlisted applications.",
    "Transition Prep": "Offer guidance on housing, orientation, and early networking to ensure a smooth transition to college life."
  };

  // Phases structure remains identical
  const APPLICATION_PHASES = [
    {
      title: "Pre-Application",
      services: [
        { name: "Self-Discovery & Academic Framing", lite: false, core: false, premium: true },
        { name: "Personal Branding & Story", lite: false, core: false, premium: true },
        { name: "Activities & Honors Strategy", lite: true, core: true, premium: true },
        { name: "School List Curation", lite: false, core: true, premium: true },
        { name: "Application Calendar", lite: false, core: true, premium: true }
      ]
    },
    {
      title: "Application Execution",
      services: [
        { name: "Common App Essay", lite: true, core: true, premium: true },
        { name: "Supplemental Essays", lite: true, core: true, premium: true },
        { name: "Recommendation Strategy", lite: false, core: true, premium: true },
        { name: "Mock Interviews", lite: false, core: false, premium: true },
        { name: "Submission Support", lite: false, core: true, premium: true }
      ]
    },
    {
      title: "Post-Acceptance",
      services: [
        { name: "Offer Analysis & Decision", lite: false, core: false, premium: true },
        { name: "Financial Aid Review", lite: false, core: false, premium: true },
        { name: "Undergrad Match-Ups", lite: false, core: false, premium: true },
        { name: "Waitlist Strategy", lite: false, core: false, premium: true },
        { name: "Transition Prep", lite: false, core: false, premium: true }
      ]
    }
  ];

const PACKAGES = [
    {
      name: "Lite Package",
      price: "$2,500",
      bestFor: "Self-motivated students applying ED to a dream school",
      features: [
        "2 strategy meetings",
        "Common App essay (2 rounds)",
        "3 supplemental essays (2 rounds each)",
        "Activities list editing"
      ],
      highlight: false
    },
    {
      name: "Core Package",
      price: "$6,950",
      note: "($6,200 w/ friend)",
      bestFor: "Students needing a comprehensive plan for multiple applications",
      features: [
        "6 strategy meetings",
        "Common App essay (6 rounds)",
        "7+ supplemental essays (6 rounds each)",
        "Activities + awards editing",
        "Brag sheet & recommenders"
      ],
      highlight: false
    },
    {
      name: "Premium Package",
      price: "$11,500",
      bestFor: "Families wanting 24/7 expert access and end-to-end support",
      features: [
        "10+ strategy meetings + direct access",
        "Unlimited essay revisions",
        "Live co-writing sessions",
        "Complete activities & awards editing",
        "Personal branding framework",
        "School list strategy",
        "Mock interviews",
        "Scholarship & merit aid strategy",
        "Post-acceptance advising"
      ],
      highlight: true
    }
  ];

  const sections = [
    {
      title: "COLLEGE ESSAY PACKAGES - UPDATED",
      content: (
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.name}
              className={`p-8 rounded-2xl border-2 transition-all ${
                pkg.highlight 
                  ? "bg-gradient-to-br from-[#f89cb0]/10 to-[#f89cb0]/5 border-[#f89cb0]/40 shadow-lg"
                  : "bg-gradient-to-b from-white/5 to-transparent border-white/20 hover:border-[#f89cb0]/40"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-3 font-sans">{pkg.name}</h3>
              <p className={`text-2xl font-semibold mb-4 ${pkg.highlight ? "text-[#f89cb0]" : "text-[#f89cb0]"} font-sans`}>
                {pkg.price}
                {pkg.note && <span className="block text-gray-400 text-sm mt-1 font-sans">{pkg.note}</span>}
              </p>
              <p className="text-sm text-gray-400 italic mb-4 font-sans">Best for: {pkg.bestFor}</p>
              <ul className="space-y-3 text-gray-300 font-sans">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    ...APPLICATION_PHASES.map(phase => ({
      title: phase.title.toUpperCase(),
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#f89cb0]/20 to-[#f89cb0]/10">
                  <th className="px-6 py-4 font-bold text-white font-sans text-lg">Service</th>
                  <th className="px-6 py-4 font-bold text-white font-sans text-lg text-center">Lite</th>
                  <th className="px-6 py-4 font-bold text-white font-sans text-lg text-center">Core</th>
                  <th className="px-6 py-4 font-bold text-white font-sans text-lg text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                {phase.services.map(service => (
                  <React.Fragment key={service.name}>
                    <tr 
                      className="border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors"
                      onClick={() => toggleService(service.name)}
                    >
                      <td className="px-6 py-5 font-medium text-[#f89cb0] font-sans">{service.name}</td>
                      <td className="px-6 py-5 text-center font-sans">{service.lite ? '✓' : ''}</td>
                      <td className="px-6 py-5 text-center font-sans">{service.core ? '✓' : ''}</td>
                      <td className="px-6 py-5 text-center font-sans">{service.premium ? '✓' : ''}</td>
                    </tr>
                    {expandedServices[service.name] && (
                      <tr className="bg-white/5">
                        <td colSpan={4} className="px-6 py-4">
                          <p className="text-gray-300 text-sm animate-fadeIn font-sans">
                            {SERVICE_DESCRIPTIONS[service.name]}
                          </p>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }))
  ];

  return (
    <ServiceDetail
      title={<h1 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6 text-center">Our College Essay Services</h1>}
      subtitle="Expert guidance for crafting authentic, impactful essays that stand out."
      sections={sections}
    />
  );
};

export default CollegeBundles;