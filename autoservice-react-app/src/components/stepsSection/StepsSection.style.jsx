import { styled } from "styled-components";
import { Process } from "../process/Process";

export const StepsSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
`;

export const StepsSectionLeftContainerStyle = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-right: 5%;
`;

export const StepsSectionHeadingStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0;
`;

export const StepsSectionDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  opacity: 60%;
`;

export const StepsProcessContainerStyle = styled(Process)`
  padding-right: 0px;
`;

export const StepsSectionRightContainerStyle = styled.div`
  width: 45%;
`;
