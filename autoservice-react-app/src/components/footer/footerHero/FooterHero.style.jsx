import { styled } from "styled-components";

export const FooterHeroWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  padding: 80px 0;
`;

export const FooterHeroContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const LeftFooterStyle = styled.div`
  width: 45%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightFooterStyle = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LeftFooterHeadingStyle = styled.h3`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const IconsContainerStyle = styled.div`
  display: flex;
  gap: 20px;
`;

export const RightFooterInformationStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightFooterTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.white};
`;

export const RightFooterTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.white};
  margin: 0;
`;
