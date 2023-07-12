import React from "react";
import { ExperienceBoxStyle, ExperienceBoxHeadingStyle, ExperienceBoxTitleStyle } from "./ExperienceBox.style";

export const ExperienceBox = ({ headingText, titleText }) => {
  return (
    <ExperienceBoxStyle>
      <ExperienceBoxHeadingStyle>{headingText}</ExperienceBoxHeadingStyle>
      <ExperienceBoxTitleStyle>{titleText}</ExperienceBoxTitleStyle>
    </ExperienceBoxStyle>
  );
};
