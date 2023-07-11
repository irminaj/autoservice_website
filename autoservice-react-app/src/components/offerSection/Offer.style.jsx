import { styled } from "styled-components";

export const OfferSectionWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.steelGrey};
`;

export const OfferSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const OfferSectionTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const OfferSectionHeadingStyle = styled.h2`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
`;

export const OfferSectionIconsContainerStyle = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1 fr;
  gap: 8px 8px;
`;

export const ArrowLinkContainerStyle = styled.div`
  align-self: flex-end;
`;
