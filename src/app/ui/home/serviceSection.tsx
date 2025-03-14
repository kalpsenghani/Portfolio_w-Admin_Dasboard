import Link from "next/link";
import React from "react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-start bg-glassmorphism bg-no-repeat
        py-16 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl mb-6">
          Professional Certifications
        </h2>
        <p className="my-4 text-lightColor max-w-3xl mx-auto">
          Showcasing my technical expertise and professional achievements through industry-recognized certifications.
        </p>
      </div>

      <div className="max-w-screen-2xl w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">IBM Data Science Professional Certificate</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Demonstrates foundational understanding of AWS Cloud concepts, services, and terminology. 
              Validated knowledge of AWS Cloud architecture, security, and pricing models.
            </p>
            <a
              href="https://www.credly.com/badges/6366a28e-790a-4f83-9825-308fd4b1ed07/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Google Data Analytics Professional Certificate</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Verified expertise in cloud concepts, Azure services, Azure workloads, security, privacy, 
              pricing, and support.
            </p>
            <a
              href="https://coursera.org/share/78df71ebb72a9bd8164067f3d98a8dd4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">CompTIA Security+</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Certified in cybersecurity fundamentals, network security, compliance, threats, 
              and security infrastructure.
            </p>
            <a
              href="https://www.credly.com/your-security-plus-badge-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
