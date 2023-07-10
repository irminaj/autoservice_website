import React from "react";
import { PrimaryButton } from "../../components/buttons/primaryButton/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/secondaryButton/SecondaryButton";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PrimaryButton text={"Button"} />
      <SecondaryButton text={"Button"} />
    </div>
  );
};
