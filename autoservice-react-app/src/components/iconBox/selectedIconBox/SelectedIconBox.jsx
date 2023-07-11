import React from "react";
import { SelectedIconBoxStyle, SelectedIconBoxTitleStyle } from "./SelectedIconBox.style";

export const SelectedIconBox = ({ source, imgDescription, title }) => {
  return (
    <SelectedIconBoxStyle>
      <img src={source} alt={imgDescription} />
      <SelectedIconBoxTitleStyle>{title}</SelectedIconBoxTitleStyle>
    </SelectedIconBoxStyle>
  );
};
