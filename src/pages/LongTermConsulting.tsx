
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const LongTermConsulting = () => {
  const serviceSections = [
    {
      title: "Start Early. Stand Out.",
      content: (
        <div className="space-y-6">
          <p>
            We work with students starting as early as 8th or 9th grade – building a thoughtful, strategic, and authentic profile every step of the way.
          </p>
          <p>
            From summer programs to leadership opportunities, we help students make choices now that pay off later.
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
            <p>Course selection and academic planning</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Leadership and passion project guidance</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Summer program & extracurricular strategy</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Essay prep warmups starting junior year</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-bold">→</span>
            <p>Personalized timeline + check-ins every semester</p>
          </div>
        </div>
      )
    },
    {
      title: "We've Seen It Work",
      content: (
        <div className="space-y-6">
          <p>
            Ayush's parents came to us with fear and excitement about high school.
          </p>
          <p>
            We worked with him from 9th grade – helping him grow from a quiet student into a confident leader.
          </p>
          <p>
            He got into Northeastern, his dream school, after launching a coding curriculum abroad with our guidance.
          </p>
        </div>
      )
    }
  ];

  return <ServiceDetail title="LONG TERM COLLEGE CONSULTING" sections={serviceSections} />;
};

export default LongTermConsulting;
