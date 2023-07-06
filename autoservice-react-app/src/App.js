import React from "react";
import { useTranslation } from "react-i18next";
import "./translations/translations.jsx";
import { Navbar } from "./components/navigation/Navbar.jsx";
import { GlobalStyle, MainContainerStyles } from "./globalStyles/globalStyles.style.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Services } from "./pages/services/Services.jsx";
import { Service } from "./pages/service/Service.jsx";
import { About } from "./pages/about/About.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Blog } from "./pages/blog/Blog.jsx";
import { Post } from "./pages/post/Post.jsx";

const App = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      <GlobalStyle>
        <MainContainerStyles>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Services />} />
          <Route path="/" element={<Service />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Blog />} />
          <Route path="/" element={<Post />} />
          {/* <h1>{t("hello")}</h1> */}
          <Navbar />
        </MainContainerStyles>
      </GlobalStyle>
    </Routes>
  );
};

export default App;
