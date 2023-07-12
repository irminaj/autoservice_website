import React from "react";
import { Header } from "../../components/header/Header";
import { Quote } from "../../components/quoteSection/Quote";
import { ProcessSection } from "../../components/processSection/ProcessSection";
import { Offer } from "../../components/offerSection/Offer";
import { CTA } from "../../components/cta/CTA";

export const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <ProcessSection />
      <Offer />
      <CTA />
    </div>
  );
};
