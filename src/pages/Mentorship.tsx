
import React from "react";
import ServiceDetail from "../components/ServiceDetail";

const Mentorship = () => {
  const sections = [
    {
      title: "PERSONALIZED GUIDANCE",
      content: (
        <div className="space-y-6">
          <p>
            Our mentorship program pairs students with current undergraduates or recent graduates from top universities who share similar academic interests, career aspirations, and personal backgrounds. These connections provide invaluable insights and guidance that goes beyond what admissions websites or campus tours can offer.
          </p>
          <p>
            Through regular one-on-one sessions, students receive personalized advice from someone who has recently navigated the complex college admissions process and succeeded at their dream school. This near-peer relationship creates a comfortable space for honest questions and authentic conversations.
          </p>
          <p>
            Mentors serve as role models, coaches, and champions for their mentees, offering encouragement during challenging times and celebrating victories along the way to college acceptance.
          </p>
        </div>
      ),
    },
    {
      title: "INSIDER KNOWLEDGE",
      content: (
        <div className="space-y-6">
          <p>
            What's it really like to study engineering at MIT? How competitive is the pre-med track at Johns Hopkins? What unwritten social rules govern campus life at Princeton? Our mentors provide the unfiltered truth about academic rigor, campus culture, and student life at elite institutions.
          </p>
          <p>
            Beyond general campus information, mentors offer specific insights about professors, classes, research opportunities, and extracurricular organizations that aren't available in any guidebook or on university websites.
          </p>
          <p>
            This insider knowledge helps students make more informed decisions about where to apply and ultimately attend, increasing the likelihood of finding a genuine college fit where they'll thrive academically and personally.
          </p>
        </div>
      ),
    },
    {
      title: "MAJOR & CAREER EXPLORATION",
      content: (
        <div className="space-y-6">
          <p>
            Many high school students feel pressure to commit to a major or career path before they've had meaningful exposure to their options. Our mentors help students explore academic disciplines and professional pathways based on firsthand experience.
          </p>
          <p>
            Through guided conversations, recommended resources, and sometimes virtual shadowing opportunities, mentors help students develop a deeper understanding of various fields and how their interests and strengths might translate to fulfilling college majors and eventual careers.
          </p>
          <p>
            This exploration process not only helps with college applications but also equips students with the self-knowledge to make more confident decisions throughout their academic journey.
          </p>
        </div>
      ),
    },
    {
      title: "PREPARATION FOR COLLEGE SUCCESS",
      content: (
        <div className="space-y-6">
          <p>
            The transition from high school to college involves much more than academic adjustments. Our mentors prepare students for the independence, time management challenges, and social dynamics they'll encounter on campus.
          </p>
          <p>
            From practical advice about course selection, study strategies, and professor relationships to guidance on navigating roommate situations, campus organizations, and work-life balance, our mentors help students develop the soft skills essential for college success.
          </p>
          <p>
            By addressing potential challenges before they arise, we help ensure that students not only get into their dream schools but arrive prepared to make the most of their college experience from day one.
          </p>
        </div>
      ),
    },
  ];

  return <ServiceDetail title="MENTORSHIP OPPORTUNITIES" sections={sections} />;
};

export default Mentorship;
