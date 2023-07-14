import React from "react";
import { TestimonialWrapperStyle, PersonContainerStyle, PersonNameContainerStyle, PersonNameStyle, PersonDescriptionStyle, PersonCityStyle } from "./Testimonial.style";

export const Testimonial = ({ imgSrc, imgDescription, personName, city, personDescription }) => {
  return (
    <TestimonialWrapperStyle>
      <PersonContainerStyle>
        <img src={imgSrc} alt={imgDescription} />
        <PersonNameContainerStyle>
          <PersonNameStyle>{personName}</PersonNameStyle>
          <PersonCityStyle>{city}</PersonCityStyle>
        </PersonNameContainerStyle>
      </PersonContainerStyle>
      <PersonDescriptionStyle>{personDescription}</PersonDescriptionStyle>
    </TestimonialWrapperStyle>
  );
};
