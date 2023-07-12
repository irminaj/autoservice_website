import React from "react";
import { ExperienceBox } from "../experienceBox/ExperienceBox";
import { ExperienceSectionContainerStyle, ExperienceSectionWrapperStyle } from "./Experience.style";

export const Experience = () => {
  return (
    <ExperienceSectionWrapperStyle>
      <ExperienceSectionContainerStyle>
        <ExperienceBox headingText={"20+"} titleText={"Proffesional"} />
        <ExperienceBox headingText={"10+"} titleText={"Years Experience"} />
        <ExperienceBox headingText={"12K+"} titleText={"Service Closed"} />
        <ExperienceBox headingText={"100%"} titleText={"Customer Satisfaction"} />
      </ExperienceSectionContainerStyle>
    </ExperienceSectionWrapperStyle>
  );
};
