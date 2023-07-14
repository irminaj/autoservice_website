import React from "react";
import { Testimonial } from "../testimonialContainer/Testimonial";
import {
  LinesIconStyle,
  SlidersContainer,
  TestimonialsContainerStyle,
  TestimonialsDescriptionContainerStyle,
  TestimonialsHeadingStyle,
  TestimonialsWrapperStyle,
} from "./Testimonials.style";
import JonathanIcon from "../../assets/icons/JonathanIcon.svg";
import SmithIcon from "../../assets/icons/SmithIcon.svg";
import Lines from "../../assets/icons/Lines.svg";
import LeftSlider from "../../assets/icons/LeftSlider.svg";
import RightSlider from "../../assets/icons/RightSlider.svg";

export const Testimonials = () => {
  return (
    <TestimonialsWrapperStyle>
      <TestimonialsContainerStyle>
        <TestimonialsHeadingStyle>Our customers say the nicest things about our service</TestimonialsHeadingStyle>
        <TestimonialsDescriptionContainerStyle>
          <Testimonial
            imgSrc={JonathanIcon}
            imgDescription={"Jonathan picture"}
            personName={"Jonathan Vallem"}
            city={"New york"}
            personDescription={
              "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
            }
          />
          <Testimonial
            imgSrc={SmithIcon}
            imgDescription={"Smith picture"}
            personName={"Smith Johnson"}
            city={"New york"}
            personDescription={
              "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
            }
          />
        </TestimonialsDescriptionContainerStyle>
        <LinesIconStyle src={Lines} alt="lines icon" />
        <SlidersContainer>
          <img src={LeftSlider} alt={"left slider"} />
          <img src={RightSlider} alt={"right slider"} />
        </SlidersContainer>
      </TestimonialsContainerStyle>
    </TestimonialsWrapperStyle>
  );
};
