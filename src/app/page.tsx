import React from "react";
import Header from "./ui/header";
import HeroSection from "./ui/home/heroSection";
import StackSection from "./ui/home/stackSection";
import ExperienceSection from "./ui/home/experienceSection";
import ProjectSection from "./ui/home/projectSection";
import { ProjectWithStacks, Stack } from "../lib/definitions";
import ContactForm from "./ui/home/contactForm";
import Footer from "./ui/footer";
import { browseProjectsWithStacks, fetchStacks } from "../lib/data";
import ServiceSection from "./ui/home/serviceSection";
import CapstoneSection from '@/app/ui/home/capstoneSection';
import SocialBar from './ui/socialBar';

export default async function Home() {
  const projects: Array<ProjectWithStacks> = await browseProjectsWithStacks();
  const stacks: Array<Stack> = await fetchStacks();

  return (
    <>
      <Header />
      <SocialBar />
      <main className="w-full bg-darkColor text-lightColor lg:pl-24">
        <HeroSection />
        <ServiceSection />
        <ExperienceSection />
        <StackSection stacks={stacks} />
        <CapstoneSection />
        <ProjectSection projects={projects} />
        <ContactForm />
      </main>
      <Footer />
    </>

  );
}
