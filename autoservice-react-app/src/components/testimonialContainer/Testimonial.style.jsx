import { styled } from "styled-components";

export const TestimonialWrapperStyle = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 60px;
`;

export const PersonContainerStyle = styled.div`
  display: flex;
`;

export const PersonNameContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const PersonNameStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin: 0;
`;

export const PersonCityStyle = styled.div`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const PersonDescriptionStyle = styled.div`
  margin-top: 20px;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
