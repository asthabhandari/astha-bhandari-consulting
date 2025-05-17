
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const CollegeEssays = () => {
  const sections = [
    {
      title: "PERSONAL STATEMENT DEVELOPMENT",
      content: (
        <div className="space-y-6">
          <p>
            The personal statement is arguably the most important part of your college application—it's where your voice truly shines through. Our expert essay coaches guide students through a reflective discovery process to uncover unique stories and perspectives that make admissions officers take notice.
          </p>
          <p>
            We believe every student has compelling stories to tell. Our approach focuses on helping students identify pivotal moments and experiences that reveal character, values, and personal growth—the elements that admissions committees are looking for beyond academic achievements.
          </p>
          <p>
            Through a series of brainstorming sessions, outlining exercises, and drafting workshops, we help students craft essays that are authentic, engaging, and memorable, ensuring their applications rise to the top of the pile.
          </p>
        </div>
      ),
    },
    {
      title: "SUPPLEMENTAL ESSAY MASTERY",
      content: (
        <div className="space-y-6">
          <p>
            Many students underestimate the importance of supplemental essays, yet these school-specific questions often determine whether an application makes it to the "accept" pile. Our consultants have analyzed thousands of supplemental prompts and understand exactly what each institution is looking for.
          </p>
          <p>
            We guide students in crafting targeted responses that demonstrate genuine interest in each school while highlighting the specific qualities, experiences, and goals that make them an ideal fit for that particular institution.
          </p>
          <p>
            Our approach ensures coherence across all application materials, creating a compelling narrative that resonates with admissions committees and distinguishes the student from other qualified applicants.
          </p>
        </div>
      ),
    },
    {
      title: "EXPERT EDITING & REFINEMENT",
      content: (
        <div className="space-y-6">
          <p>
            Great essays require multiple rounds of revision to achieve their maximum impact. Our team of experienced editors—many former admissions officers themselves—provide detailed feedback on structure, content, tone, and language to polish each essay to perfection.
          </p>
          <p>
            We help students strike the perfect balance between sophisticated writing and authentic voice, ensuring that essays are both technically excellent and genuinely reflective of the student's personality and perspective.
          </p>
          <p>
            Our collaborative editing process respects the student's ownership of their work while providing the professional guidance needed to transform good writing into exceptional storytelling that captivates admissions readers.
          </p>
        </div>
      ),
    },
    {
      title: "TIMELINE MANAGEMENT",
      content: (
        <div className="space-y-6">
          <p>
            With dozens of essays to write across multiple applications, strategic planning is essential. We create customized essay development timelines that align with application deadlines while allowing ample time for brainstorming, drafting, feedback, and revision.
          </p>
          <p>
            Our structured approach prevents last-minute rushes and ensures that each essay receives the attention it deserves, maintaining quality across all application components regardless of submission date.
          </p>
          <p>
            Regular check-ins and progress milestones keep students accountable and on track, reducing stress and allowing time for the creative process to unfold naturally.
          </p>
        </div>
      ),
    },
  ];

  return <ServiceDetail title="COLLEGE ESSAYS" sections={sections} />;
};

export default CollegeEssays;
