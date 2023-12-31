import React from "react";
import { useTranslation } from "react-i18next";
import "./translations/translations.jsx";
import { Navbar } from "./components/navigation/Navbar.jsx";
import { MainContainerStyles } from "./globalStyles/globalStyles.style.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Services } from "./pages/services/Services.jsx";
import { Service } from "./pages/service/Service.jsx";
import { About } from "./pages/about/About.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Blog } from "./pages/blog/Blog.jsx";
import { Post } from "./pages/post/Post.jsx";
import { Theme } from "./theme.js";

const App = () => {
  const { t } = useTranslation();
  return (
    <Theme>
      {/* <GlobalStyle> */}
      <MainContainerStyles>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </MainContainerStyles>
      {/* </GlobalStyle> */}
    </Theme>
  );
};

export default App;
