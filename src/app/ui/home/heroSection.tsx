"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { User } from "@/lib/definitions";
import logoLinkedin from "../images/linkedin.png";
import logoGithub from "../images/logo-github.png";
import profilPicture from "../images/prprofil.png";

// Dynamically import Lottie component with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-gray-800/50 rounded-lg" />
});

// Import animation data as a dynamic import
const AnimationWrapper = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    import('@/components/lottiefiles/animation.json')
      .then((data) => setAnimationData(data.default));
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="w-full h-full"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    />
  );
};

export default function HeroSection({ user = {} }: { user?: Partial<User> }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setNavIsOpen(!navIsOpen);
    if (typeof window != "undefined" && !navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    console.log('Scrolling to:', sectionId, 'Element found:', element); // Debug log
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust 100 based on your navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative mx-auto min-h-screen w-full px-4 py-16 md:px-8"
      >
        {/* Background Squares */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 right-40 h-8 w-8 border border-purple-500/30 rotate-12"></div>
          <div className="animate-float-delayed absolute top-40 right-60 h-8 w-8 border border-purple-500/30 -rotate-12"></div>
          <div className="animate-float absolute bottom-40 right-32 h-8 w-8 border border-purple-500/30 rotate-45"></div>
        </div>

        <div className="mx-auto max-w-7xl h-screen flex items-center">
          <div className="grid min-h-[calc(100vh-16rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col items-start space-y-8 pt-8 md:pt-0 pl-4 md:pl-8 lg:pl-12">
              <div className="space-y-4">
              <h2 className="text-5xl font-bold text-lightColor font-[YourDesiredFont] ml-1">
                I'm
              </h2>
              <h1 className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 bg-clip-text text-6xl 
                font-bold text-transparent font-[YourDesiredFont] ml-1">
                Kalp
              </h1>
              <h2 className="text-5xl font-bold text-lightColor font-[YourDesiredFont] ml-1">
                Senghani
              </h2>

                <div className="flex items-center space-x-2 pt-4">
                  <p className="text-2xl ml-1">A Passionate</p>
                  <TypeAnimation
                    sequence={[
                      'BACKEND DEVELOPER       ',
                      2000,
                      'DevOps ENGINEER       ',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-2xl font-bold text-secondaryColor whitespace-pre"
                  />
                </div>
              </div>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4 ml-1">
                <div className="group relative">
                  <a
                    href="/Kalp Full Stack.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border-2 border-secondaryColor px-8 py-3 
                      text-base font-medium text-lightColor hover:bg-secondaryColor hover:text-darkColor 
                      transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                      <span>View Resume</span>
                    </span>
                  </a>
                </div>

                <div className="group relative">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-full border-2 border-secondaryColor px-8 py-3 
                      text-base font-medium text-lightColor hover:bg-secondaryColor hover:text-darkColor 
                      transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2">
                      <span>See My Work</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Lottie Animation */}
            <div className="relative h-full w-full min-h-[400px]">
              <Suspense fallback={
                <div className="h-[400px] w-full animate-pulse bg-gray-800/50 rounded-lg" />
              }>
                <AnimationWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
<section id="about" className="relative py-16 bg-darkColor">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-start">
      <div className="w-full md:w-4/12 px-4">
        <div className="relative flex items-center justify-center h-full min-w-[220px] mt-12 md:mt-16">
          <div 
            className="absolute w-[220px] h-[220px] rounded-full 
            bg-gradient-to-r from-purple-700/70 to-blue-700/70 
            blur-xl"
            style={{
              transform: 'scale(1.15)',
            }}
          ></div>
          <Image
            src={profilPicture}
            alt="Kalp Senghani"
            width={220}
            height={220}
            className="relative rounded-full border-4 border-secondaryColor z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="w-full md:w-8/12 px-4">
        <div className="md:pr-12">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-semibold text-secondaryColor">
              About Me
            </h3>
            {/* Quote Section */}
            <div className="pl-4 border-l-2 border-purple-500 ml-4">
              <p className="text-base italic text-gray-300">
                "The only way to do great work is to love what you do."
              </p>
              <p className="text-xs text-gray-400 mt-1">– Steve Jobs</p>
            </div>
          </div>

          {/* Glowing Text for "Turning Ideas into Scalable Applications" */}
          <div className="flex items-center space-x-2 mb-4">
            <p className="text-xl">Turning Ideas into</p>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse">
              Scalable Applications
            </span>
          </div>
          <h4 className="text-lg font-bold text-lightColor mb-4">
            Full Stack Developer & DevOps Engineer
          </h4>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-gray-300">
              As a Full Stack Developer, I thrive on transforming complex problems into elegant, efficient, and user-centric solutions. 
              My journey began with a passion for understanding how technology works, evolving into a drive to build scalable applications 
              that enhance digital experiences. I believe development is more than just writing code—it's about innovation, collaboration, 
              and continuous learning.
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              With expertise in both frontend and backend technologies, I am committed to creating seamless, high-performance systems 
              while staying at the forefront of emerging trends. My goal is to contribute to impactful projects, mentor aspiring developers, 
              and continuously refine my craft in the ever-evolving tech landscape.
            </p>
          </div>
          <ul className="list-none mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="py-1">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-2">
                  <svg className="w-3 h-3 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  Expertise in modern web technologies
                </div>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-2">
                  <svg className="w-3 h-3 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  Strong DevOps background
                </div>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-2">
                  <svg className="w-3 h-3 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  Efficient, scalable solutions
                </div>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-2">
                  <svg className="w-3 h-3 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  End-to-end development expertise
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
