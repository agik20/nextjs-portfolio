"use client";

import {
  HeroSection,
  MarqueeSection,
  AboutNewSection,
  SkillsNewSection,
  ProjectsSection,
  ContactSection,
  FooterSection,
} from "@/src/features/home/sections";
import ChapterNav from "@/app/components/ChapterNav";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutNewSection />
      <SkillsNewSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
      <ChapterNav />
    </>
  );
}
