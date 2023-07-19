import React from "react";
import { ColorContainer } from "../colorContainer/ColorContainer";
import {
  BlackContainer,
  ColorSectionContainer,
  FirstColorContainerStyle,
  OrangeContainer,
  PurpleContainer,
  SecondColorContainerStyle,
  ThirdColorContainerStyle,
} from "./ColorSection.style";

export const ColorSection = () => {
  return (
    <ColorSectionContainer>
      <FirstColorContainerStyle>
        <OrangeContainer>
          <ColorContainer
            headingText={"Serve our customers and always deliver the customer service"}
            descriptionText={"We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes"}
          />
        </OrangeContainer>
      </FirstColorContainerStyle>
      <SecondColorContainerStyle>
        <BlackContainer>
          <ColorContainer
            headingText={"To be the world’s most eader in automotive business solutions."}
            descriptionText={"We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes"}
          />
        </BlackContainer>
      </SecondColorContainerStyle>
      <ThirdColorContainerStyle>
        <PurpleContainer>
          <ColorContainer
            headingText={"We value the service we provide and our loyal returning customers"}
            descriptionText={"We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes"}
          />
        </PurpleContainer>
      </ThirdColorContainerStyle>
    </ColorSectionContainer>
  );
};
