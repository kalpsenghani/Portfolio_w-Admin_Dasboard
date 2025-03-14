import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Person, WithContext } from "schema-dts";
import "./globals.css";
import ogImage from "../../public/opengraph-image.png";
import twitterImage from "../../public/twitter-image.png";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { SanityLive } from "../../sanity/client";
import Providers from "./providers";

const personStructuredData: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kalp Senghani",
  url: "https://www.kalpsenghani.com/",
  image: "https://www.kalpsenghani.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprprofil.1419460a.png&w=640&q=75",
  sameAs: [
    "https://www.linkedin.com/in/kalp-senghani-899958233/",
    "https://github.com/kalpsenghani/",
    "https://www.agencenocode.com/",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "",
  },
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalp Senghani - Full Stack Developer",
  description: "Full Stack Developer",
  metadataBase: new URL("https://www.kalpsenghani.com/"),
  keywords: [
    "Full Sstack Developer",
    "Next.js",
    "React",
    "Web Applications",
    "Node.js",
    "Docker",
    "Freelance",
    "Developer",
  ],
  alternates: {
    canonical: `/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.kalpsenghani.com/",
    title: "Kalp Senghani - Full Stack Developer",
    description:
      "As a Next.js web and Full Stack application developer, I am a freelance and independent developer, passionate about creating SaaS and other applications.",
    images: [
      {
        url: `https://www.kalpsenghani.com${ogImage.src}`,
        width: 800,
        height: 600,
        alt: "Portfolio of Kalp",
      },
    ],
    siteName: "kalpsenghani",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kalpsenghani",
    title: "Kalp Senghani - Full Stack Developer",
    description:
      "Next.js web and Full Stack application developer, freelance and independent developer, I passionately create Saas and other applications",
    images: `https://www.kalpsenghani.com${twitterImage.src}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-darkColor text-lightColor`}>
        <Providers>
          <EdgeStoreProvider>
            {children}
            <SanityLive />
          </EdgeStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
