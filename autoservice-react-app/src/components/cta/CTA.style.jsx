import { styled } from "styled-components";

export const CTAWrapperStyle = styled.div`
  display: flex;
  height: 405px;
`;

export const ImagesContainerStyle = styled.div`
  max-width: 100%;
  display: flex;
  position: relative;
`;

export const WhiteCarImageStyle = styled.img`
  width: 50%;
`;
export const CarWiresImageStyle = styled.img`
  width: 50%;
`;

export const TextContainerStyle = styled.div`
  width: 550px;
  height: 405px;
  margin-left: 250px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TextContainerItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const TextContainerHeadingStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
`;
