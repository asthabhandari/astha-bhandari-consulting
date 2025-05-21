import React from 'react';
import Marquee from 'react-fast-marquee';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';


// College Grid Component
type CollegeInfo = {
  name: string;
  description?: string;
  logo?: string;
};

const collegesList: CollegeInfo[] = [
  { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/500px-Seal_of_Leland_Stanford_Junior_University.svg.png" },
  { name: "Duke", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/360px-Duke_University_seal.svg.png" },
  { name: "Princeton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/320px-Princeton_seal.svg.png" },
  { name: "UNC Chapel Hill", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/360px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png" },
  { name: "NC State", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/North_Carolina_State_University_seal.svg/1200px-North_Carolina_State_University_seal.svg.png" },
  { name: "Northeastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NU_RGB_seal_R.png/640px-NU_RGB_seal_R.png" },
  { name: "Northwestern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Northwestern_University_seal.svg/1200px-Northwestern_University_seal.svg.png" },
  { name: "UPenn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/250px-UPenn_shield_with_banner.svg.png" },
  { name: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" },
  { name: "UCLA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png" },
  { name: "USC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Southern_California_%28USC%29_seal.svg/1200px-University_of_Southern_California_%28USC%29_seal.svg.png" },
  { name: "UC Davis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/The_University_of_California_Davis.svg/250px-The_University_of_California_Davis.svg.png" },
  { name: "NYU", logo: "https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg" },
  { name: "UMich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/360px-Seal_of_the_University_of_Michigan.svg.png" },
  { name: "Amherst", logo: "https://www.amherst.edu/system/files/media/Amherst-College-seal-purple-stomp-575px.png" },
  { name: "Howard", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Howard_Bison_logo.svg/1200px-Howard_Bison_logo.svg.png" },
  { name: "Georgia Tech", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Georgia_Tech%27s_Buzz_logo.svg/1200px-Georgia_Tech%27s_Buzz_logo.svg.png" },
  { name: "Davidson", logo: "https://www.davidson.edu/sites/default/files/styles/max_650x650/public/2023-08/Wildcat-Red.png?itok=fAlPn12n" },
  { name: "Dartmouth", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Dartmouth_College_shield.svg/800px-Dartmouth_College_shield.svg.png" },
  { name: "Wake Forest", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/1200px-Wake_Forest_University_Athletic_logo.svg.png" },
];

const CollegeBlock = ({ college }: { college: CollegeInfo }) => (
  <div className="flex flex-col items-center justify-center w-[120px] md:w-[280px] px-4 md:px-8">
    <div className="w-20 h-20 md:w-48 md:h-48 rounded-full bg-white p-1 flex items-center justify-center mb-2 md:mb-4 overflow-hidden">
      {college.logo ? (
        <img
          src={college.logo}
          alt={`${college.name} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-lg md:text-2xl font-bold bg-[#f89cb0] text-white">
          {college.name.charAt(0)}
        </div>
      )}
    </div>
    <span className="text-center font-['Garet'] text-white text-sm md:text-2xl">
      {college.name}
    </span>
  </div>
);

const Impact = () => {
  // Student stories data
  const studentStories = [
    {
      id: "kimberly",
      image: "/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png",
      alt: "Stanford Student",
      paragraphs: [
        "Kimberly and her family first reached out while working with another consultancy.",
        "They chose ABC because they were looking for a more personalized approach - someone who would truly listen, support, and guide.",
        "With careful mentorship, Kimberly was able to craft and refine an authentic story.",
        <span className="font-semibold italic text-[#ff4d6d]">Stanford University</span>,
      ]
    },
    {
      id: "ayush",
      image: "/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png",
      alt: "Northeastern University Student",
      paragraphs: [
        "Ayush came to us in 9th grade, unsure how to navigate the pressures of high school and college prep.",
        "Through our Long-Term Consulting package, we helped him launch a club, develop an investment project, and grow a social media platform. His growth and persistence led to his dream school.",
        <span className="font-semibold italic text-[#ff4d6d]">Northeastern University</span>,
      ]
    },
    {
      id: "neha",
      image: "/images/DukeStudent.png",
      alt: "Duke University Student",
      paragraphs: [
        "Neha had built a strong resume of extracurriculars but felt unsure how to express her voice in writing.",
        "We worked closely with her to shape essays that felt honest, layered, and compelling. The result? A story she was proud of and an acceptance letter from Duke University. *not pictured*",
        <span className="font-semibold italic text-[#ff4d6d]">Duke University</span>,
      ]
    },
    {
      id: "leon",
      image: "/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png",
      alt: "UPenn Student",
      paragraphs: [
        "Leon discovered ABC while searching for a college consultancy that truly prioritized students over profits.",
        "From day one, we partnered closely with him, refining his essays line by line, and prepping him thoroughly for interviews. His dedication paid off, and today, he's proud to call UPenn home.",
        <span className="font-semibold italic text-[#ff4d6d]">University of Pennsylvania</span>,
      ]
    },
    {
      id: "nicole",
      image: "/images/BerekleyStudent.png",
      alt: "UC Berkeley Student",
      paragraphs: [
        "Nicole came to us through a referral with one clear goal: UC Berkeley.",
        "Through mentorship, we helped her build a website to showcase her art. Then, through essay coaching, we helped her turn that passion into a story that was both captivating and true.",
        "Now she's exactly where she dreamed of being: UC Berkeley. *not pictured*",
        <span className="font-semibold italic text-[#ff4d6d]">University of Berkeley</span>,
        
      ]
    }
  ];

  
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Impact statistics - added mb-8 to create space between value and label */}
      <section className="pt-24 md:pt-36 pb-12 md:pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="hidden md:flex flex-shrink-0">
              <img
                src="/lovable-uploads/b1b392c0-c004-451b-b54b-61866b6d97b2.png"
                alt="Student names word cloud"
                className="h-[160px] w-auto"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col md:flex-row flex-1 justify-between items-center space-y-6 md:space-y-0 md:space-x-4 px-0 md:px-4">
              {[
                { value: "100%", label: "success" },
                { value: "26", label: "dream acceptances" },
                { value: "54", label: "scholarships" },
                { value: "40", label: "mentorships" },
              ].map(({ value, label }) => (
                <div key={label} className="text-[#f89cb0] text-center">
                  <div className="font-['Garet'] text-4xl md:text-[clamp(3rem,8vw,7rem)] mb-2 md:mb-4"> {/* Added mb-2 md:mb-4 */}
                    {value}
                  </div>
                  <div className="font-light text-lg md:text-[clamp(1rem,2.5vw,2rem)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-shrink-0">
              <img
                src="/lovable-uploads/51e52982-8346-406b-8b87-acc33f9a42bb.png"
                alt="College names location pin"
                className="h-[160px] w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* College Marquee - unchanged */}
      <section className="py-4 md:py-8 bg-black space-y-4 md:space-y-16">
        <Marquee speed={40} gradient={false} pauseOnHover loop={0}>
          {collegesList.slice(0, 8).map(c => <CollegeBlock key={c.name} college={c} />)}
        </Marquee>
        <Marquee speed={40} gradient={false} pauseOnHover loop={0} direction="right">
          {collegesList.slice(8, 16).map(c => <CollegeBlock key={`rev-${c.name}`} college={c} />)}
        </Marquee>
      </section>

      {/* Real People section - added mx-auto to center content */}
       <section className="py-8 md:py-12 bg-black text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-['Garet'] tracking-wider mb-6 md:mb-8 text-center">
      REAL PEOPLE. REAL RESULTS.
    </h2>
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="py-4 md:py-8">
        {studentStories.map((story) => (
          <CarouselItem key={story.id} className="basis-full">
            <div className="flex flex-col items-center mx-auto max-w-4xl px-4"> {/* Centered container with max-width */}
              <div className="mb-4 md:mb-6 w-full flex justify-center">
                <img 
                  src={story.image} 
                  alt={story.alt} 
                  className="h-[300px] md:h-[500px] w-auto"
                  loading="lazy"
                />
              </div>
              <div className="text-white text-center w-full">
                {story.paragraphs.map((text, i) => (
                  <p key={i} className="text-lg md:text-[25px] mb-3 md:mb-4 font-['Garet']">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-6 mt-4">
        <CarouselPrevious className="relative bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 h-10 w-10 md:h-14 md:w-14" />
        <CarouselNext className="relative bg-[#f89cb0] text-black hover:bg-[#f89cb0]/90 h-10 w-10 md:h-14 md:w-14" />
      </div>
    </Carousel>
  </div>
</section>
      {/* Testimonial Collage - unchanged */}
      <section className="bg-white text-black">
        <img
          src="/images/testimonials-banner.png"
          alt="Testimonials Collage"
          className="w-full h-auto"
          loading="lazy"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Impact;