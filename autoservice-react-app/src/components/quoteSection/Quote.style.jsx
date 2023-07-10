import { styled } from "styled-components";

export const QuoteSectionStyle = styled.div`
  background-color: ${(props) => props.theme.colors.steelGrey};
`;

export const QuoteWrapperStyle = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;

export const QuoteLeftContainerStyle = styled.div`
  width: 50%;
`;

export const QuoteHeaderStyle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
`;

export const ServiceListContainerStyle = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ServiceTitleContainerStyle = styled.div`
  display: flex;
`;

export const ServiceTitlteTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontSizes.semiBold};
  padding-left: 15px;
`;

export const ServiceDescriptionTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontSizes.semiBold};
  padding-left: 60px;
  margin-top: 0;
`;

export const LinkContainerStyle = styled.div`
  display: flex;
`;

export const LinkTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontSizes.semiBold};
  padding-left: 60px;
  padding-right: 30px;
`;

export const QuoteRightContainerStyle = styled.div`
  width: 50%;
`;
