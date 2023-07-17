import { styled } from "styled-components";

export const HeaderWrapperStyle = styled.div`
  width: 80%;
  height: 632px;
  display: flex;
  margin: 0 auto;
`;

export const HeaderTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 452px;
  justify-content: space-between;
  padding-right: 30px;
`;

export const HeaderTextStyle = styled.h1`
  margin-bottom: 0;
  font-size: ${(props) => props.theme.fontSizes.h1};
`;

export const WorkingHoursContainerStyle = styled.div`
  display: flex;
`;

export const WorkingHoursIconStyle = styled.img`
  margin-right: 10px;
`;

export const WorkingHoursTextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WorkingHoursTopTextStyle = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: #5b5b5b;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const WorkingHoursLowerTextStyle = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const HeaderImageContainerStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderImageStyle = styled.img`
  width: 700px;
`;
