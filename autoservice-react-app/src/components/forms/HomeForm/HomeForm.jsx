import React from "react";
import { Input } from "../../input/Input";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { FormStyle, FormHeadingStyle } from "./HomeForm.style";

export const HomeForm = () => {
  return (
    <>
      <FormHeadingStyle>Get a quote for the car service</FormHeadingStyle>
      <FormStyle>
        <Input text={"Enter your location"} />
        <Input text={"Enter your location"} />
        <Input text={"Enter your location"} />
        <Input text={"Your phone number"} />
      </FormStyle>
      <PrimaryButton text={"Get your quote"} />
    </>
  );
};
