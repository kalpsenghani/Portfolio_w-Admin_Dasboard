import React from "react";
import logo from "./images/logoLight.png";
import Image from "next/image";
import { User } from "../../lib/definitions";
import logoLinkedin from "./images/linkedin.png";
import logoGithub from "./images/logo-github.png";

export default function Footer({ user = {} }: { user?: Partial<User> }) {
  return (
    <footer className="w-full">
      <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-24 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-secondaryColor p-2 text-darkColor shadow transition duration-300
              hover:bg-secondaryLight hover:text-primaryLight sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300
              dark:hover:bg-gray-600"
            href="#hero"
          >
            <span className="sr-only">Back to top</span>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start lg:ml-8">
              <Image
                src={logo}
                alt="logo FranckWebPro"
                className="~h-16/20 ~w-16/20"
                width={80}
                height={80}
                sizes="(max-width: 768px) 4rem, (max-width: 1200px) 5rem, 6rem"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start lg:ml-8">
              <p className="text-center leading-relaxed lg:text-left dark:text-gray-400">
                Web development at the service of your business
              </p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-10 lg:pr-8">
            <li>
              <a className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight" href="#services">
                Certifications
              </a>
            </li>
            <li>
              <a className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight" href="#experience">
                Education
              </a>
            </li>
            <li>
              <a
                className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight"
                href="#technos"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight"
                href="#capstone"
              >
                Capstone
              </a>
            </li>
            <li>
              <a
                className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="p-1.5 text-sm transition duration-300 text-lightColor/80 hover:text-primaryLight"
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right lg:pr-8 dark:text-gray-400">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
