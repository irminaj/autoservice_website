import React from "react";
import { Header } from "../../components/header/Header";
import { Quote } from "../../components/quoteSection/Quote";
import { ProcessSection } from "../../components/processSection/ProcessSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <ProcessSection />
    </div>
  );
};
