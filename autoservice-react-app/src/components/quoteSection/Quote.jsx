import React from "react";
import {
  QuoteLeftContainerStyle,
  QuoteRightContainerStyle,
  QuoteSectionStyle,
  QuoteWrapperStyle,
  QuoteHeaderStyle,
  ServiceListContainerStyle,
  ServiceTitleContainerStyle,
  ServiceTitlteTextStyle,
  ServiceDescriptionTextStyle,
} from "./Quote.style";
import ServiceIcon from "../../assets/ServiceIcon.svg";
import ExpertIcon from "../../assets/ExpertIcon.svg";
import PriceIcon from "../../assets/PriceIcon.svg";
import { HomeForm } from "../forms/HomeForm/HomeForm";
import { ArrowLink } from "../arrowLink/ArrowLink";

export const Quote = () => {
  return (
    <QuoteSectionStyle>
      <QuoteWrapperStyle>
        <QuoteLeftContainerStyle>
          <QuoteHeaderStyle>We are taking car servicing seriously</QuoteHeaderStyle>
          <ServiceListContainerStyle>
            <li>
              <ServiceTitleContainerStyle>
                <img src={ServiceIcon} alt="service icon" />
                <ServiceTitlteTextStyle>Convenient service</ServiceTitlteTextStyle>
              </ServiceTitleContainerStyle>
              <ServiceDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every him.</ServiceDescriptionTextStyle>
            </li>
            <li>
              <ServiceTitleContainerStyle>
                <img src={ExpertIcon} alt="experts icon" />
                <ServiceTitlteTextStyle>Expert mechanics</ServiceTitlteTextStyle>
              </ServiceTitleContainerStyle>
              <ServiceDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every him.</ServiceDescriptionTextStyle>
            </li>
            <li>
              <ServiceTitleContainerStyle>
                <img src={PriceIcon} alt="price icon" />
                <ServiceTitlteTextStyle>Transparent pricing</ServiceTitlteTextStyle>
              </ServiceTitleContainerStyle>
              <ServiceDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every him.</ServiceDescriptionTextStyle>
            </li>
          </ServiceListContainerStyle>
          <ArrowLink text={"Know more about us"} />
        </QuoteLeftContainerStyle>
        <QuoteRightContainerStyle>
          <HomeForm />
        </QuoteRightContainerStyle>
      </QuoteWrapperStyle>
    </QuoteSectionStyle>
  );
};
