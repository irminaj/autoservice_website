import React from "react";
import { Header } from "../header/Header";
import AboutHeaderImg from "../../assets/images/AboutHeaderImg.jpg";

export const AboutHeader = () => {
  return (
    <Header
      imgSrc={AboutHeaderImg}
      headerText={"About us"}
      headerDescriptionText={
        "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does"
      }
      buttonText={"Book a service"}
    />
  );
};
