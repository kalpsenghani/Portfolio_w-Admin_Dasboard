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
          <h2 className="text-center text-3xl font-bold md:text-4xl">Mon expérience</h2>

          <p className="mt-4 text-center leading-8 text-gray-300">
          A former paratrooper with a passion for the web and entrepreneurship, I became a freelance web developer. 
          I also develop my own software, including LinkerFlow, my current project.
          </p>
        </hgroup>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4 place-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">LinkerFlow, SaaS Webflow tool</h3>

              <p className="mt-1 text-sm leading-6 text-gray-300">
                J'ai développé{" "}
                <Link
                  href="https://www.linkerflow.io"
                  target="_blank"
                  className="text-primaryColor duration-300 hover:text-primaryLight"
                  rel="noreferrer"
                >
                  Linkerflow
                </Link>
                , a Webflow tool to automate internal linking, a time-consuming method that is nevertheless essential for
                <strong>SEO</strong> of websites.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">Formation développeur JS, Wild Code School</h3>

              <p className="mt-1 text-sm leading-6 text-gray-300">
              I completed an intensive 5-month web developer training program (February to July 2024) where I was able to learn React / Express / Node.js / MySQL / Git and Github technologies, as well as skills in
              <strong>web accessibility</strong>, Agile methods such as Scrum and especially teamwork
              on several projects.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">No Code Agency, my Webflow agency</h3>

              <p className="mt-1 text-sm leading-6 text-gray-300">
              From late 2023 to 2024, I worked hard to find clients as a freelance developer.
              Webflow, I wanted to put my SEO skills into practice.
                <abbr title="Search Engine Optimization"> (SEO) </abbr>
                in order to build my own Webflow Agency site ({" "}
                <Link
                  href="https://www.agencenocode.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primaryColor duration-300 hover:text-primaryLight"
                >
                  Agency No Code
                </Link>{" "}
                ) , on which I am now working with partners as a freelancer.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">Spylead, Tech Product Listing Site</h3>

              <p className="mt-1 text-sm leading-6 text-gray-300">
              We developed on Webflow with an associate,
                <Link
                  href="https://www.spylead.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primaryColor duration-300 hover:text-primaryLight"
                >
                  {" "}
                  Spylead{" "}
                </Link>
                , a tech product listing site, such as Google Maps scrapers, IP address providers, etc.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">Freelance Webflow Developer</h3>

              <p className="mt-1 text-sm leading-6 text-gray-300">
              When my contract ended, I wanted to retrain in the web, for this I trained in
              self-taught on Webflow and I was able to offer my services as a developer{" "}
              <strong>Webflow</strong> freelance.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56"
          >
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
              </svg>
            </span>

            <div>
              <h3 className="mb-4 text-lg font-bold">Parachute Rifleman, Air Force</h3>
              <p className="mt-1 text-sm leading-6 text-gray-300">
              After more than a year in the reserve, I joined the Air Force as a student pilot in 2017...
              Wanting more action and physical work, I changed my specialty to join the fusiliers.
              parachutists and I have completed numerous training courses over the course of more than 6 years of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
