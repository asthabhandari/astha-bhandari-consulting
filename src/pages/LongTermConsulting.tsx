
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const LongTermConsulting = () => {
  const sections = [
    {
      title: "COMPREHENSIVE GUIDANCE",
      content: (
        <div className="space-y-6">
          <p>
            Our long-term college consulting program begins as early as 8th grade, providing students with a strategic roadmap tailored to their unique strengths, interests, and aspirations. We believe in building a foundation for success over time, not just cramming for applications in senior year.
          </p>
          <p>
            Through personalized guidance, we help students craft their academic journey, select challenging but appropriate courses, and develop extracurricular activities that showcase their passions and leadership abilities.
          </p>
          <p>
            Our consultants have decades of experience navigating the ever-changing landscape of college admissions, ensuring that your child's application stands out in an increasingly competitive environment.
          </p>
        </div>
      ),
    },
    {
      title: "ACADEMIC EXCELLENCE",
      content: (
        <div className="space-y-6">
          <p>
            We meticulously plan each student's academic trajectory, recommending specific courses that align with their college goals while also maximizing their GPA and class rank. This includes strategic AP, IB, or honors course selection based on the student's strengths and target colleges.
          </p>
          <p>
            Our team monitors academic performance throughout high school, addressing any concerns before they become obstacles to college acceptance. We provide resources for academic support when needed and recommend enrichment opportunities that go beyond the classroom.
          </p>
          <p>
            Regular check-ins ensure that students stay on track with their academic goals, adjusting strategies as needed to maintain excellence while avoiding burnout.
          </p>
        </div>
      ),
    },
    {
      title: "EXTRACURRICULAR DEVELOPMENT",
      content: (
        <div className="space-y-6">
          <p>
            The most successful applicants demonstrate depth, not just breadth, in their activities. We help students identify and cultivate their authentic interests, guiding them to meaningful opportunities that showcase their initiative and impact.
          </p>
          <p>
            From summer programs and internships to research opportunities and community service, we connect students with experiences that both enrich their high school years and strengthen their applications.
          </p>
          <p>
            We emphasize leadership development, helping students create or expand passion projects that demonstrate their ability to effect change and take initiative—qualities highly valued by admissions committees.
          </p>
        </div>
      ),
    },
    {
      title: "COLLEGE SELECTION STRATEGY",
      content: (
        <div className="space-y-6">
          <p>
            Finding the right college fit goes beyond rankings and reputation. Our consultants conduct thorough assessments of each student's preferences, learning style, career aspirations, and personality to develop a customized list of target schools.
          </p>
          <p>
            We employ sophisticated matching algorithms combined with decades of institutional knowledge to identify colleges where students will not only gain admission but also thrive academically, socially, and personally.
          </p>
          <p>
            Our guidance includes strategically categorizing schools into reach, target, and likely options, ensuring that students apply to a balanced list that maximizes their opportunities for acceptance and financial aid.
          </p>
        </div>
      ),
    },
  ];

  return <ServiceDetail title="LONG TERM COLLEGE CONSULTING" sections={sections} />;
};

export default LongTermConsulting;
