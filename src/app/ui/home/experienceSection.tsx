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
          <h2 className="text-center text-3xl font-bold md:text-4xl">Education Journey</h2>
          <p className="mt-4 text-center leading-8 text-gray-300">
            My academic path that shaped my professional journey in technology and development
          </p>
        </hgroup>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primaryColor/40 to-primaryColor">
            <div className="animate-pulse-slow absolute top-0 h-full w-full bg-gradient-to-b from-primaryColor to-transparent opacity-50"></div>
          </div>

          {/* Education blocks */}
          <div className="relative space-y-24">
            {/* Block 1 */}
            <div className="flex items-center justify-end">
              <div className="w-5/12 pr-16">
                <div className="flex min-h-40 items-start justify-start gap-4 rounded-lg border border-lightColor
                    bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md transition-transform hover:scale-105 md:min-h-48">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primaryColor">Master in Computer Science</h3>
                      <span className="text-sm text-gray-400">2022 - 2024</span>
                    </div>
                    <p className="text-md font-semibold text-gray-200">Stanford University</p>
                    <p className="text-sm text-gray-400">Palo Alto, California</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      Specialized in Artificial Intelligence and Machine Learning
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-primaryColor bg-darkColor">
                <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
              </div>
              <div className="w-5/12 pl-4">
                <span className="text-7xl animate-float-slow"></span>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex items-center justify-start">
              <div className="w-5/12 pr-4">
                <span className="text-7xl animate-float-delayed"></span>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-primaryColor bg-darkColor">
                <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
              </div>
              <div className="w-5/12 pl-16">
                <div className="flex min-h-40 items-start justify-start gap-4 rounded-lg border border-lightColor
                    bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md transition-transform hover:scale-105 md:min-h-48">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primaryColor">Bachelor in Computer Science</h3>
                      <span className="text-sm text-gray-400">2019 - 2022</span>
                    </div>
                    <p className="text-md font-semibold text-gray-200">MIT</p>
                    <p className="text-sm text-gray-400">Cambridge, Massachusetts</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      Focus on Software Engineering and Web Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex items-center justify-end">
              <div className="w-5/12 pr-16">
                <div className="flex min-h-40 items-start justify-start gap-4 rounded-lg border border-lightColor
                    bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md transition-transform hover:scale-105 md:min-h-48">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primaryColor">High School Diploma</h3>
                      <span className="text-sm text-gray-400">2014 - 2018</span>
                    </div>
                    <p className="text-md font-semibold text-gray-200">Tech High School</p>
                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      Advanced placement in Computer Science and Mathematics
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-primaryColor bg-darkColor">
                <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
              </div>
              <div className="w-5/12 pl-4">
                <span className="text-7xl animate-float"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
