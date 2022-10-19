import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Antalpha Labs-Web3 developers community" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Antalpha Labs" />
        <InterestsSection sectionId="roles" heading="Community Roles" />
        <ProjectsSection sectionId="projects" heading="Open Source Projects" />
        {/* <ContactSection sectionId="github" heading="Want to talk with us?" /> */}
      </Page>
    </>
  );
}
