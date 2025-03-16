import Link from "next/link";
import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-center
        bg-no-repeat py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="w-full max-w-screen-2xl p-4 py-8 sm:py-12 md:p-8 lg:p-12 lg:py-16">
        <hgroup className="mx-auto mb-8 max-w-xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Education & Achievements</h2>
          <p className="mt-4 text-center leading-8 text-gray-300">
            My academic journey and coding accomplishments
          </p>
        </hgroup>

        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Education Timeline - Left Side */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-primaryColor mb-8">Educational Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-primaryColor/40 to-primaryColor">
                <div className="animate-pulse-slow absolute top-0 h-full w-full bg-gradient-to-b from-primaryColor to-transparent opacity-50"></div>
              </div>

              {/* Education blocks */}
              <div className="relative space-y-8 pl-12">
                {/* Block 1 */}
                <div className="relative">
                  <div className="absolute left-[-2.45rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-primaryColor bg-darkColor">
                    <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
                  </div>
                  <div className="flex min-h-40 flex-col gap-4 rounded-lg border border-lightColor
                    bg-gray-50/[0.04] p-6 backdrop-blur-md transition-transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-primaryColor">Advanced Diploma <p> Computer Programming and Analysis</p></h4>
                      <span className="text-sm text-gray-400">202 - 2025</span>
                    </div>
                    <p className="text-md font-semibold text-gray-200">George Brown College</p>
                    <p className="text-sm text-gray-400">Toronto, Canada</p>
                    <p className="text-sm leading-6 text-gray-300">
                      Specializing in Full Stack Development and Data Science
                    </p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="relative">
                  <div className="absolute left-[-2.45rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-primaryColor bg-darkColor">
                    <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
                  </div>
                  <div className="flex min-h-40 flex-col gap-4 rounded-lg border border-lightColor
                    bg-gray-50/[0.04] p-6 backdrop-blur-md transition-transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-primaryColor">Higher Secondary Education</h4>
                      <span className="text-sm text-gray-400">2019 - 2021</span>
                    </div>
                    <p className="text-md font-semibold text-gray-200">New Leap Junior Science College</p>
                    <p className="text-sm text-gray-400">Modasa, Gujarat</p>
                    <p className="text-sm leading-6 text-gray-300">
                      Science Stream with Computer Science and Adv. Mathematics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coding Profiles - Right Side */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-primaryColor mb-8">Coding Profiles</h3>
            <div className="space-y-6">
              {/* LeetCode Profile */}
              <div className="group rounded-lg border border-lightColor bg-gray-50/[0.04] p-6 backdrop-blur-md 
                transition-all duration-300 hover:border-primaryColor">
                <Link href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#FFA116] p-4">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-primaryColor">LeetCode</h4>
                    <p className="text-sm text-gray-400">100+ Problems Solved</p>
                    <p className="text-sm text-gray-400">Max Rating: 800</p>
                  </div>
                </Link>
              </div>

              {/* HackerRank Profile */}
              <div className="group rounded-lg border border-lightColor bg-gray-50/[0.04] p-6 backdrop-blur-md 
                transition-all duration-300 hover:border-primaryColor">
                <Link href="https://www.hackerrank.com/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#2EC866] p-4">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.279.033-.402.099v.006l-3.46 2.001-3.461-2.001v-.006c-.123-.066-.261-.099-.401-.099-.143 0-.284.035-.409.103l-1.891 1.092v5.209c0 .163.081.315.217.405l5.944 3.432c.123.065.259.099.402.099.14 0 .276-.034.399-.099l5.944-3.432c.136-.09.217-.242.217-.405V7.994l-1.891-1.092c-.125-.068-.266-.103-.408-.103z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-primaryColor">HackerRank</h4>
                    <p className="text-sm text-gray-400">4⭐ in Problem Solving</p>
                    <p className="text-sm text-gray-400">Silver Level Badge</p>
                  </div>
                </Link>
              </div>

              {/* Add more coding profiles if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
