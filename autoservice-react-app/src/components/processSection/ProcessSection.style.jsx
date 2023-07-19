import { styled } from "styled-components";

export const ProcessSectionWrapperStyle = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 80px 0;
`;

export const ProcessSectionLeftContainerStyle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ProcessSectionHeadingStyle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  margin-bottom: 0;
  margin-top: 0;
`;

export const ProcessSectionDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding: 20px 150px 20px 0;
`;

export const ProcessSectionRightContainerStyle = styled.div`
  width: 50%;
  padding-left: 80px;
  padding-right: 160px;
`;
