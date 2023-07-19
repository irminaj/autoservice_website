import React from "react";
import { ColorContainerHeadingStyle, ColorContainerDescriptionStyle } from "./ColorContainer.style";

export const ColorContainer = ({ headingText, descriptionText }) => {
  return (
    <>
      <ColorContainerHeadingStyle>{headingText}</ColorContainerHeadingStyle>
      <ColorContainerDescriptionStyle>{descriptionText}</ColorContainerDescriptionStyle>
    </>
  );
};
