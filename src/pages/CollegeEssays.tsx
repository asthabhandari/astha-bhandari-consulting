
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const CollegeEssays = () => {
  const serviceSections = [
    {
      title: "Be Memorable",
      content: (
        <div className="space-y-6">
          <p>
            At the most selective schools, the essay is the tie-breaker. We help students craft unforgettable narratives – rooted in authenticity, voice, and clarity – that admissions officers remember.
          </p>
          <p>
            And that's the key: being so good, they can't forget you.
          </p>
        </div>
      )
    },
    {
      title: "Here's What We Help With",
      content: (
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Topic brainstorming</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Story structure and voice coaching</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>1:1 feedback on every single draft</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Supplemental essays by school & theme</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Personalized timeline</p>
          </div>
        </div>
      )
    },
    {
      title: "We've Seen It Work",
      content: (
        <div className="space-y-6">
          <p>
            When Emily came to us, she was overwhelmed and unsure if her life was "interesting enough." We helped her uncover a story about growing up in a multilingual home – and that essay got her into Duke.
          </p>
          <p>
            We would love to help uncover your child's story next.
          </p>
        </div>
      )
    }
  ];

  return <ServiceDetail title="COLLEGE ESSAYS" sections={serviceSections} />;
};

export default CollegeEssays;
