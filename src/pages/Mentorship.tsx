
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const Mentorship = () => {
  const serviceSections = [
    {
      title: "Philosophy",
      content: (
        <div className="space-y-6">
          <p>
            Some students need help before they even think about college. We work with middle schoolers and early high school students to help them explore interests, tackle tough subjects, or simply feel more capable.
          </p>
          <p>
            We help students build portfolios while acing their math tests!
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
            <p>Academic tutoring</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Exploring passions through fun projects</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Study skills, time management & goal setting</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Weekly encouragement & check-ins</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Early leadership opportunities</p>
          </div>
        </div>
      )
    },
    {
      title: "Who It's For",
      content: (
        <div className="space-y-6">
          <p>
            Ideal for students in grades 6-10. Great for building confidence before college even becomes the goal.
          </p>
          <p>
            For example, we've helped a 6th grader build their design portfolio using Canva and Figma. And we've helped a 3rd grader start their first novel!
          </p>
          <p>
            The possibilities are endless!
          </p>
        </div>
      )
    }
  ];

  return <ServiceDetail title="MENTORSHIP OPPORTUNITIES" sections={serviceSections} />;
};

export default Mentorship;
