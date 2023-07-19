import React from "react";
import { AboutHeader } from "../../components/aboutHeader/AboutHeader";
import { CTA } from "../../components/cta/CTA";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { StepsSection } from "../../components/stepsSection/StepsSection";
import { ColorSection } from "../../components/colorSection/ColorSection";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <StepsSection />
      <ColorSection />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
