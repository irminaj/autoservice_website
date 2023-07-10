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
`;

export const ProcessListContainerStyle = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-right: 160px;
`;

export const ProcessListItemStyle = styled.li`
  display: flex;
  padding-bottom: 15px;
`;

export const ProcessListTitlteContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CircleIconStyle = styled.img`
  width: 72px;
  height: 72px;
  padding-bottom: 10px;
`;

export const DottedLineIconStyle = styled.img`
  width: 71px;
  height: 72px;
`;

export const ProcessListDescriptionContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-top: 10px;
`;

export const ProcessTitleTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t1};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  margin: 0;
`;

export const ProcessDescriptionTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
