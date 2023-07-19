import React from "react";
import { AboutHeader } from "../../components/aboutHeader/AboutHeader";
import { CTA } from "../../components/cta/CTA";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
