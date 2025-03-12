import Link from "next/link";
import React from "react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-no-repeat
        py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div
        className="max-w-screen-2xl flex flex-col gap-4 lg:gap-0 lg:flex-row p-4 md:p-8 lg:p-12 lg:py-16 lg:grid-cols-2
          lg:items-center lg:gap-x-16"
      >
        <div className="w-full text-center lg:order-2 lg:text-left mb-14">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Development of custom applications and websites
          </h2>

          <p className="my-4 text-lightColor">
          The services I offer as benefits, from traditional development for more flexibility to new
          code with Webflow for more simplicity/speed through natural referencing (SEO).
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor
              transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
              focus:ring-yellow-400 xl:text-base"
          >
            Start your project now
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold  text-center">Website or web application development</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
            Development from a given graphic model or that I can create with you to convert it
            in a web project, I pay particular attention to the
              <strong>
                <abbr title="Expérience Utilisateur">UX</abbr>
              </strong>
              , optimization and web accessibility. I develop landing pages, blogs, portfolios, showcase sites and
              applications web (<abbr title="Software as a Service">SaaS</abbr>...) .
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Google SEO</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
            Optimization of your website/web application for natural (organic) SEO on Google and
            other search engines, the{" "}
              <strong>
                <abbr title="Search Engine Optimization">SEO</abbr>
              </strong>
              .
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Web Design</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
            Creation of your design and branding on Figma, with wireframe phase, mockup or directly
            on Webflow.
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Accessibility</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
            Audit and improvement of the<strong>Accessibility</strong>of your website, following the standards
              <abbr title="Web Content Accessibility Guidelines"> WCAG</abbr>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
