import { styled } from "styled-components";
import { IconBoxStyle, IconBoxTitleStyle } from "../regularIconBox/IconBox.style";

export const SelectedIconBoxStyle = styled(IconBoxStyle)`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SelectedIconBoxTitleStyle = styled(IconBoxTitleStyle)`
  color: white;
`;
