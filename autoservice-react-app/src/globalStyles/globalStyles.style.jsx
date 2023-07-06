import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
}`;

export const MainContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
