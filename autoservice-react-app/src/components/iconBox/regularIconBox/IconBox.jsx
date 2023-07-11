import React from "react";
import { IconBoxStyle, IconBoxTitleStyle } from "./IconBox.style";

export const IconBox = ({ source, imgDescription, title }) => {
  return (
    <IconBoxStyle>
      <img src={source} alt={imgDescription} />
      <IconBoxTitleStyle>{title}</IconBoxTitleStyle>
    </IconBoxStyle>
  );
};
