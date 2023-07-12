import React from "react";
import FirstLogo from "../../assets/logos/FirstLogo.png";
import SecondLogo from "../../assets/logos/SecondLogo.png";
import ThirdLogo from "../../assets/logos/ThirdLogo.png";
import FourthLogo from "../../assets/logos/FourthLogo.png";
import FifthLogo from "../../assets/logos/FifthLogo.png";
import { BrandsContainerStyle } from "./BrandsContainer.style";

export const BrandsContainer = () => {
  return (
    <BrandsContainerStyle>
      <img src={FirstLogo} alt="First Logo" />
      <img src={SecondLogo} alt="Second Logo" />
      <img src={ThirdLogo} alt="Third Logo" />
      <img src={FourthLogo} alt="Fourth Logo" />
      <img src={FifthLogo} alt="Fifth Logo" />
    </BrandsContainerStyle>
  );
};
