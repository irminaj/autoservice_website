import React from "react";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { CTA } from "../../components/cta/CTA";
import { ServicesHeader } from "../../components/servicesHeader/ServicesHeader";

export const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
