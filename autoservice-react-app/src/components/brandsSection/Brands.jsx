import React from "react";
import { BrandsSectionHeadingStyle } from "./Brands.style";
import { BrandsContainer } from "../brandsContainer/BrandsContainer";

export const Brands = () => {
  return (
    <div>
      <BrandsSectionHeadingStyle>Brands we Serve</BrandsSectionHeadingStyle>
      <BrandsContainer />
      <BrandsContainer />
    </div>
  );
};
