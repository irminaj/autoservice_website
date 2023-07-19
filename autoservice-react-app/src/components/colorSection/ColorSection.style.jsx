import { styled } from "styled-components";
import OrangeImage from "../../assets/images/OrangeImage.png";
import BlackImage from "../../assets/images/BlackImage.png";

export const ColorSectionContainer = styled.div`
  margin-bottom: 0px;
  display: flex;
`;

export const FirstColorContainerStyle = styled.div`
  background-image: url(${OrangeImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OrangeContainer = styled.div`
  background-color: #f85b29e5;
  padding: 60px 20px;
`;

export const SecondColorContainerStyle = styled(FirstColorContainerStyle)`
  background-image: url(${BlackImage});
`;

export const BlackContainer = styled.div`
  background-color: #000000e5;
  padding: 60px 20px;
`;

export const ThirdColorContainerStyle = styled(FirstColorContainerStyle)`
  background-image: url(${BlackImage});
`;

export const PurpleContainer = styled.div`
  background-color: #7443cae5;
  padding: 60px 20px;
`;
