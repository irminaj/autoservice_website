import React from "react";
import ServiceImage from "../../../assets/images/ServiceImage.jpg";
import { FirstContentHeadingStyle, ContentTextStyle, ContentParagraphStyle, ContentTitleStyle, ContentContainerStyle, LastParagraphContainerStyle } from "./Content.style";
import HorizontalLine from "../../../assets/HorizontalLine.svg";

export const Content = () => {
  return (
    <ContentContainerStyle>
      <img src={ServiceImage} />
      <FirstContentHeadingStyle>The warning lights on your dashboard are the most obvious starting point.</FirstContentHeadingStyle>
      <ContentTextStyle>
        <ContentParagraphStyle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit.
          Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
          posuere metus convallis.
        </ContentParagraphStyle>
        <ContentParagraphStyle>
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero
          finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi
          bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
        </ContentParagraphStyle>
      </ContentTextStyle>
      <ContentTitleStyle>Delaying a diagnosis and repair could lead to even bigger problems down the road.</ContentTitleStyle>
      <ContentTextStyle>
        <ContentParagraphStyle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit.
          Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
          posuere metus convallis.
        </ContentParagraphStyle>
        <LastParagraphContainerStyle>
          <img src={HorizontalLine} />
          <ContentParagraphStyle>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum
            libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante.
          </ContentParagraphStyle>
        </LastParagraphContainerStyle>
      </ContentTextStyle>
    </ContentContainerStyle>
  );
};
