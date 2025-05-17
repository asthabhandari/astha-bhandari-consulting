
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">What We Offer</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Comprehensive support for every step of your child's educational journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Long Term College Consulting */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 mb-4 text-pink-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5V4.5C4 3.4 4.9 2.5 6 2.5H18C19.1 2.5 20 3.4 20 4.5V19.5C20 20.6 19.1 21.5 18 21.5H6C4.9 21.5 4 20.6 4 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle>Long Term College Consulting</CardTitle>
              <CardDescription>
                Not sure how to make high school count? We guide students from 8th grade on to build strategic, standout applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">→</span>
                  <span>Course selection and academic planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">→</span>
                  <span>Leadership and passion project guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">→</span>
                  <span>Summer program & extracurricular strategy</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/services" className="text-pink-500 hover:underline flex items-center gap-1 font-medium">
                Learn more <ArrowRight size={16} />
              </Link>
            </CardFooter>
          </Card>

          {/* College Essays */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 mb-4 text-blue-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2808 19.3922L12 18.4144L12.7192 19.3922C12.3025 19.7389 11.6975 19.7389 11.2808 19.3922Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 21V11.8086M5 11.8086V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle>College Essays</CardTitle>
              <CardDescription>
                Our expert editors help craft compelling, unique essays that stand out to admission officers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Personal statement development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Supplemental essay coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Expert editing and refinement</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/services" className="text-blue-500 hover:underline flex items-center gap-1 font-medium">
                Learn more <ArrowRight size={16} />
              </Link>
            </CardFooter>
          </Card>

          {/* Mentorship */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 mb-4 text-green-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle>Mentorship Program</CardTitle>
              <CardDescription>
                Connect your student with top university mentors who provide guidance and support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>One-on-one mentorship with current students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Major and career exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>College life preparation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/services" className="text-green-500 hover:underline flex items-center gap-1 font-medium">
                Learn more <ArrowRight size={16} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
