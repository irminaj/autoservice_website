import React from "react";
import Arrow from "../../assets/Arrow.svg";
import { LinkContainerStyle } from "./ArrowLink.style";
import { LinkTextStyle } from "./ArrowLink.style";

export const ArrowLink = ({ text }) => {
  return (
    <>
      <LinkContainerStyle>
        <LinkTextStyle>{text}</LinkTextStyle>
        <img src={Arrow} alt="arrow" />
      </LinkContainerStyle>
    </>
  );
};
