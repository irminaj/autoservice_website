import React from "react";
import { PrimaryButton } from "../../components/buttons/primaryButton/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/secondaryButton/SecondaryButton";
import { Header } from "../../components/header/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <PrimaryButton text={"Button"} />
      <SecondaryButton text={"Button"} />
    </div>
  );
};
