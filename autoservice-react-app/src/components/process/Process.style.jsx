import { styled } from "styled-components";

export const ProcessListContainerStyle = styled.ul`
  list-style: none;
  padding-left: 0;
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
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin: 0;
`;

export const ProcessDescriptionTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
