import React from "react";
import { useTranslation } from "react-i18next";
import "./translations/translations.jsx";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t("hello")}</h1>
    </div>
  );
};

export default App;
