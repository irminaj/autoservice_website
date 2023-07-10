import React from "react";
import { InputStyle } from "./Input.style";

export const Input = ({ text, inputType, inputId, inputName }) => {
  return <InputStyle placeholder={text} type={inputType} inputId={inputId} name={inputName}></InputStyle>;
};
