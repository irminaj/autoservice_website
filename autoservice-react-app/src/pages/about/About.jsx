import React from "react";
import { AboutHeader } from "../../components/aboutHeader/AboutHeader";
import { CTA } from "../../components/cta/CTA";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { StepsSection } from "../../components/stepsSection/StepsSection";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <StepsSection />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
