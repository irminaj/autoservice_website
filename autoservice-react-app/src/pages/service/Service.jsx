import React from "react";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { CTA } from "../../components/cta/CTA";
import { ServiceSection } from "../../components/serviceSection/ServiceSection";

export const Service = () => {
  return (
    <div>
      <ServiceSection />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
