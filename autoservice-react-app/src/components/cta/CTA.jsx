import React from "react";
import { SecondaryButton } from "../buttons/secondaryButton/SecondaryButton";
import { CTAWrapperStyle, CarWiresImageStyle, ImagesContainerStyle, WhiteCarImageStyle, TextContainerStyle, TextContainerHeadingStyle, TextContainerItemsStyle } from "./CTA.style";
import WhiteCar from "../../assets/images/WhiteCar.jpg";
import CarWires from "../../assets/images/CarWires.jpg";

export const CTA = () => {
  return (
    <CTAWrapperStyle>
      <ImagesContainerStyle>
        <WhiteCarImageStyle src={WhiteCar} alt="White car" />
        <CarWiresImageStyle src={CarWires} alt="Car wires" />
      </ImagesContainerStyle>
      <TextContainerStyle>
        <TextContainerItemsStyle>
          <TextContainerHeadingStyle>Get in touch with us for your service related query</TextContainerHeadingStyle>
          <SecondaryButton text={"Contact Us"} />
        </TextContainerItemsStyle>
      </TextContainerStyle>
    </CTAWrapperStyle>
  );
};
