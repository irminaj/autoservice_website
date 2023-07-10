import { styled } from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: #5b5b5b;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  border-radius: 5px;
  border: none;
  margin-bottom: 5px;
  padding: 30px 0 30px 30px;
`;
