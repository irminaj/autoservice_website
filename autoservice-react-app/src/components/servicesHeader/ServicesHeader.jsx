import React from "react";
import ServicesHeaderImg from "../../assets/images/ServicesHeaderImg.jpg";
import { Header } from "../header/Header";

export const ServicesHeader = () => {
  return (
    <Header
      imgSrc={ServicesHeaderImg}
      headerText={"Our services"}
      headerDescriptionText={
        "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does"
      }
      buttonText={"Book a service"}
    />
  );
};
