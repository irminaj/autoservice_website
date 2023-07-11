import React from "react";
import { Header } from "../../components/header/Header";
import { Quote } from "../../components/quoteSection/Quote";
import { ProcessSection } from "../../components/processSection/ProcessSection";
import { Offer } from "../../components/offerSection/Offer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <ProcessSection />
      <Offer />
    </div>
  );
};
