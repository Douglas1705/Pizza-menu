import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalStyle/globalStyle.js";
import MainHtml from "./components/htmlMain/MainHtml.jsx"
import Header from "./components/header/header.jsx";
import Menu from "./components/menu/menu.jsx";
import Order from "./components/footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainHtml>
    <Header />
    <Menu />
    <Order />
    <GlobalStyle />
    </MainHtml>
  </StrictMode>
);
