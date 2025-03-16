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
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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

        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col items-start space-y-8 pt-8 md:pt-0">
              <div className="space-y-4">
              <h2 className="text-5xl font-bold text-lightColor font-[YourDesiredFont]">
                I'm
              </h2>
              <h1 className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 bg-clip-text text-6xl 
                font-bold text-transparent font-[YourDesiredFont]">
                Kalp
              </h1>
              <h2 className="text-5xl font-bold text-lightColor font-[YourDesiredFont]">
                Senghani
              </h2>

                <div className="flex items-center space-x-2 pt-4">
                  <p className="text-2xl ml-1">A Passionate</p>
                  <TypeAnimation
                    sequence={[
                      'BACKEND DEVELOPER',
                      2000,
                      'DevOps ENGINEER',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-2xl font-bold text-secondaryColor"
                  />
                </div>
              </div>
              

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
  {/* LinkedIn Link */}
  <a
    href="https://www.linkedin.com/in/kalp-senghani-899958233/"
    target="_blank"
    rel="noopener noreferrer"
    className="duration-300 hover:text-purple-600"
  >
    <FaLinkedin
      size={45}
      className="text-purple-500 hover:text-purple-600 transition-all duration-300"
    />
  </a>

  {/* GitHub Link */}
  <a
    href={user.github_link} // Assuming user.github_link is properly passed
    target="_blank"
    rel="noopener noreferrer"
    className="duration-300 hover:text-purple-600"
  >
    <FaGithub
      size={45}
      className="text-purple-500 hover:text-purple-600 transition-all duration-300"
    />
  </a>
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

                <a
                  className="inline-flex items-center rounded-full border-2 border-secondaryColor px-8 py-3 
                    text-base font-medium text-lightColor hover:bg-secondaryColor hover:text-darkColor 
                    transition-all duration-300"
                    href="/#projects"
                    onClick={() => navIsOpen && handleMobileMenu()}
                >
                  See My Work
                </a>
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
<section id="about" className="relative py-20 bg-darkColor">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="relative inline-flex items-center justify-center w-full min-w-[200px]">
          <Image
            src={profilPicture}
            alt="Kalp Senghani"
            width={300}
            height={300}
            className="relative rounded-full border-4 border-secondaryColor"
          />
        </div>
      </div>

      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibold text-secondaryColor mb-2">
            About Me
          </h3>
          {/* Glowing Text for "Turning Ideas into Scalable Applications" */}
          <div className="flex items-center space-x-2 pt-4">
            <p className="text-2xl ml-1">Turning Ideas into</p>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse">
              Scalable Applications
            </span>
          </div>
          <h4 className="text-xl font-bold text-lightColor mb-4">
            Full Stack Developer & DevOps Engineer
          </h4>
          <p className="text-lg leading-relaxed text-gray-300">
            As a Full Stack Developer and DevOps enthusiast, I bring a unique blend of development
            and operational expertise to every project. With a strong foundation in both frontend
            and backend technologies, I specialize in creating efficient, scalable solutions that
            deliver exceptional user experiences.
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-gray-300">
                  Expertise in modern web technologies and frameworks
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-gray-300">
                  Strong background in DevOps practices and tools
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div className="bg-secondaryColor rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-darkColor" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-gray-300">
                  Passionate about creating efficient, scalable solutions
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
