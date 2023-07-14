import React from "react";
import { Header } from "../../components/header/Header";
import { Quote } from "../../components/quoteSection/Quote";
import { ProcessSection } from "../../components/processSection/ProcessSection";
import { Offer } from "../../components/offerSection/Offer";
import { CTA } from "../../components/cta/CTA";
import { Experience } from "../../components/experienceSection/Experience";
import { Brands } from "../../components/brandsSection/Brands";
import { Testimonials } from "../../components/testimonialsSection/Testimonials";

export const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <ProcessSection />
      <Offer />
      <CTA />
      <Experience />
      <Brands />
      <Testimonials />
    </div>
  );
};
