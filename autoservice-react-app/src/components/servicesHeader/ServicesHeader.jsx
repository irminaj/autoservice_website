import React from "react";
import { ServicesHeaderTitleStyle, ServicesHeaderContainerStyle, ServicesHeaderTextStyle, ServicesHeaderDescriptionStyle, ServicesHeaderImgStyle } from "./ServicesHeader.style";
import ServicesHeaderImg from "../../assets/images/ServicesHeaderImg.jpg";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";

export const ServicesHeader = () => {
  return (
    <ServicesHeaderContainerStyle>
      <ServicesHeaderImgStyle src={ServicesHeaderImg} />
      <ServicesHeaderTextStyle>
        <ServicesHeaderTitleStyle>Our services</ServicesHeaderTitleStyle>
        <ServicesHeaderDescriptionStyle>
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does
        </ServicesHeaderDescriptionStyle>
        <PrimaryButton text={"Book a service"} />
      </ServicesHeaderTextStyle>
    </ServicesHeaderContainerStyle>
  );
};
