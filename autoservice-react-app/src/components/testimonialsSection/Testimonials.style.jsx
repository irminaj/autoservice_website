import { styled } from "styled-components";

export const TestimonialsWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 80px 0;
`;

export const TestimonialsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const TestimonialsHeadingStyle = styled.h3`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const TestimonialsDescriptionContainerStyle = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinesIconStyle = styled.img`
  width: 15%;
  align-self: center;
  margin-top: 30px;
`;

export const SlidersContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 15px;
`;
