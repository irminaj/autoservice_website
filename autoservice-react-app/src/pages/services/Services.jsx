import React from "react";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { CTA } from "../../components/cta/CTA";
import { ServicesHeader } from "../../components/servicesHeader/ServicesHeader";
import { ServicesSection } from "../../components/servicesSection/ServicesSection";
import { FirstHowSection } from "../../components/firstHowSection/FirstHowSection";
import { SecondHowSection } from "../../components/secondHowSection/SecondHowSection";

export const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <ServicesSection />
      <FirstHowSection />
      <SecondHowSection />
      <CTA />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
