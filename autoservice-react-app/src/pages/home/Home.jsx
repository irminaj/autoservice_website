import React from "react";
import { Quote } from "../../components/quoteSection/Quote";
import { ProcessSection } from "../../components/processSection/ProcessSection";
import { Offer } from "../../components/offerSection/Offer";
import { CTA } from "../../components/cta/CTA";
import { Experience } from "../../components/experienceSection/Experience";
import { Brands } from "../../components/brandsSection/Brands";
import { Testimonials } from "../../components/testimonialsSection/Testimonials";
import { FAQ } from "../../components/faqSection/FAQ";
import { FooterHero } from "../../components/footer/footerHero/FooterHero";
import { BottomNavbar } from "../../components/footer/bottomNavbar/BottomNavbar";
import { HomeHeader } from "../../components/homeHeader/HomeHeader";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Quote />
      <ProcessSection />
      <Offer />
      <CTA />
      <Experience />
      <Brands />
      <Testimonials />
      <FAQ />
      <FooterHero />
      <BottomNavbar />
    </div>
  );
};
