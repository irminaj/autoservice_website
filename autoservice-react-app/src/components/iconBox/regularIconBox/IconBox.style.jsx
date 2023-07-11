import { styled } from "styled-components";

export const IconBoxStyle = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconBoxTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
