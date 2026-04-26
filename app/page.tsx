"use client";
import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeaderSection,
  LearningSection,
  NavbarSection,
  ProjectSection,
  SkillsSection,
} from "@/src/features/home/sections";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <LearningSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}