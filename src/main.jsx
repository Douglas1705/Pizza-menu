import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalStyle/globalStyle.js";
import MainHtml from "./components/htmlMain/MainHtml.jsx"
import Header from "./components/header/header.jsx";
import Menu from "./components/menu/menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainHtml>
    <Header />
    <Menu />
    <GlobalStyle />
    </MainHtml>
  </StrictMode>
);
