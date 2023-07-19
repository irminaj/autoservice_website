import { styled } from "styled-components";

export const ServicesHeaderContainerStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
`;

export const ServicesHeaderImgStyle = styled.img``;

export const ServicesHeaderTextStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  position: absolute;
  width: 37%;
  height: 530px;
  padding: 10px 60px;
  margin-left: 35%;
`;

export const ServicesHeaderTitleStyle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h1};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  color: ${(props) => props.theme.colors.lightGrey};
  margin: 0;
`;

export const ServicesHeaderDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.lightGrey};
  margin: 0;
`;
