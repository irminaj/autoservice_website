import React from "react";
import { ServicesHeaderContainerStyle, ServicesHeaderImgStyle, ServicesHeaderTextStyle, ServicesHeaderTitleStyle, ServicesHeaderDescriptionStyle } from "./Header.style";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";

export const Header = ({ imgSrc, headerText, headerDescriptionText, buttonText }) => {
  return (
    <div>
      <ServicesHeaderContainerStyle>
        <ServicesHeaderImgStyle src={imgSrc} />
        <ServicesHeaderTextStyle>
          <ServicesHeaderTitleStyle>{headerText}</ServicesHeaderTitleStyle>
          <ServicesHeaderDescriptionStyle>{headerDescriptionText}</ServicesHeaderDescriptionStyle>
          <PrimaryButton text={buttonText} />
        </ServicesHeaderTextStyle>
      </ServicesHeaderContainerStyle>
    </div>
  );
};
