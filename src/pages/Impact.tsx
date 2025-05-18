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
import { ScrollArea } from '@/components/ui/scroll-area';

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
  <div className="flex flex-col items-center justify-center w-[280px] px-8">
    <div className="w-48 h-48 rounded-full bg-white p-1 flex items-center justify-center mb-4 overflow-hidden">
      {college.logo ? (
        <img
          src={college.logo}
          alt={`${college.name} logo`}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl font-bold bg-[#f89cb0] text-white">
          {college.name.charAt(0)}
        </div>
      )}
    </div>
    <span className="text-center font-['Garet'] text-white text-2xl">
      {college.name}
    </span>
  </div>
);

const Impact = () => (
  <div className="min-h-screen bg-black">
    <Navigation />

    {/* Impact statistics section with fluid typography and no overflow */}
<section className="pt-36 pb-16 bg-black text-black">
  <div className="container mx-auto px-4">
    <div className="flex items-center mb-16">
      {/* 1️⃣ Fixed-size left image */}
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/b1b392c0-c004-451b-b54b-61866b6d97b2.png"
          alt="Student names word cloud"
          className="h-[160px] w-auto"
        />
      </div>

      {/* 2️⃣ Stats wrapper: takes all remaining space, spreads items evenly */}
      <div className="flex flex-1 justify-between items-center px-4">
        {[
          { value: "100%", label: "success" },
          { value: "26",   label: "dream acceptances" },
          { value: "54",   label: "scholarships" },
          { value: "40",   label: "mentorships" },
        ].map(({ value, label }) => (
          <div key={label} className="text-[#f89cb0] text-center flex-shrink">
            {/* fluid number: clamped between 3rem and 7rem, grows with viewport */}
            <div className="font-['Garet'] text-[clamp(3rem,8vw,7rem)]">
              {value}
            </div>
            {/* fluid label: clamped between 1rem and 2rem */}
            <div className="font-light text-[clamp(1rem,2.5vw,2rem)]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* 3️⃣ Fixed-size right image */}
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/51e52982-8346-406b-8b87-acc33f9a42bb.png"
          alt="College names location pin"
          className="h-[160px] w-auto"
        />
      </div>
    </div>
  </div>
</section>

    {/* College Marquee Section */}
    <section className="py8 bg-black space-y-16">
      <Marquee speed={60} gradient={false} pauseOnHover loop={0}>
        {collegesList.map(c => (<CollegeBlock key={c.name} college={c} />))}
      </Marquee>
      <Marquee speed={60} gradient={false} pauseOnHover loop={0} direction="right">
        {collegesList.map(c => (<CollegeBlock key={`rev-${c.name}`} college={c} />))}
      </Marquee>
    </section>

    {/* Real People. Real Results. section */}
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-['Garet'] tracking-wider mb-8">
          REAL PEOPLE. REAL RESULTS.</h2>
        <ScrollArea className="w-full">
          <Carousel opts={{ align: "center", loop: true, containScroll: false }} className="w-full relative">
            <CarouselContent className="py-8">
              {/* Student Story 1 - Kimberly */}
              <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                 <div className="flex flex-col items-center text-center">
                  <div className="mb-6 w-full flex justify-center">
                    <img 
                      src="/lovable-uploads/2f7e0f7a-be5d-4ba2-b53d-9f9d44d4a63e.png" 
                      alt="Stanford Student" 
                      className="h-[500px] w-auto mx-auto"
                    />
                  </div>                    <div className="text-white text-center max-w-2xl">
                    <p className="text-[25px] mb-4 font-['Garet']">
                      Kimberly and her family first reached out while working with another consultancy.
                    </p>
                    <p className="text-[25px] mb-6 font-['Garet']">
                      They chose ABC because they wanted something personal, someone who cares. We wrote her entire application with care and intention. Today, she’s headed to Stanford as a confident and excited incoming student.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* Student Story 2 - Ayush */}
              <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 w-full flex justify-center">
                    <img
                      src="/lovable-uploads/ce68d2e8-17b6-4b92-8f81-bb131c07e312.png"
                      alt="Northeastern University Student"
                      className="h-[500px] w-auto mx-auto"
                    />
                  </div>
                  <div className="text-white text-center max-w-2xl">
                    <p className="text-[25px] mb-4 font-['Garet']">
                      Ayush came to us in 9th grade, unsure how to navigate the pressures of high school and college prep.
                    </p>
                    <p className="text-[25px] mb-6 font-['Garet']">
                      Through our Long-Term Consulting package, we helped him launch a club, develop an investment project, and grow a social media platform. His growth and persistence led to his dream school: Northeastern.
                    </p>

                  </div>
                </div>
              </CarouselItem>
                
                {/* Student Story 3 - Neha */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/images/DukeStudent.png" 
                        alt="Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[25px] mb-4 font-['Garet']">
                        Neha had built a strong resume of extracurriculars but felt unsure how to express her voice in writing.
                      </p>
                      <p className="text-[25px] mb-6 font-['Garet']">
                        We worked closely with her to shape essays that felt honest, layered, and compelling. The result? A story she was proud of and an acceptance letter from Duke University. *not pictured* 
                      </p>
                      </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 4 - Leon */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/lovable-uploads/04c7e99d-25ee-4239-bfd0-79fda79b66ce.png" 
                        alt="Student" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[25px] mb-4 font-['Garet']">Leon discovered ABC while searching for a college consultancy that truly prioritized students over profits.</p>
                      <p className="text-[25px] mb-6 font-['Garet']">From day one, we partnered closely with him, refining his essays line by line, and prepping him thoroughly for interviews. His dedication paid off, and today, he's proud to call UPenn home.</p>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* Student Story 5 - Nicole (using silhouette) */}
                <CarouselItem className="md:basis-3/4 lg:basis-2/3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 w-full flex justify-center">
                      <img 
                        src="/images/BerekleyStudent.png" 
                        alt="Student Silhouettes" 
                        className="h-[500px] w-auto mx-auto"
                      />
                    </div>
                    <div className="text-white text-center max-w-2xl">
                      <p className="text-[25px] mb-4 font-['Garet']">Nicole came to us through a referral with one clear goal: UC Berkeley.</p>
                      <p className="text-[25px] mb-6 font-['Garet']">Through mentorship, we helped her build a website to showcase her art. Then, through essay coaching, we helped her turn that passion into a story that was both captivating and true.</p>
                      <p className="text-[25px] font-['Garet']">Now she's exactly where she dreamed of being: UC Berkeley. *not pictured* </p>
                    </div>
                  </div>
                </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-4 relative">
              <CarouselPrevious
                className="
                  relative 
                  left-[-20px]     /* push 20px left */
                  bg-[#f89cb0] 
                  text-black 
                  hover:bg-[#f89cb0]/90 
                  h-14 w-14
                  flex items-center justify-center
                "
              />
              <CarouselNext
                className="
                  relative 
                  right-[-20px]    /* push 20px right */
                  bg-[#f89cb0] 
                  text-black 
                  hover:bg-[#f89cb0]/90 
                  h-14 w-14
                  flex items-center justify-center
                "
              />
            </div>
          </Carousel>
        </ScrollArea>
      </div>
    </section>

    {/* Testimonial Collage */}
    <section className="bg-white text-black m-0 p-0">
      <img
        src="/images/testimonials-banner.png"
        alt="Testimonials Collage"
        className="w-full h-auto"
      />
    </section>

    <Footer />
  </div>
);

export default Impact;
