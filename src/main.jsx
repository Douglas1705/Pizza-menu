import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalStyle/globalStyle.js";
import MainHtml from "./layoutPage/htmlMain/mainHtml.jsx"
import Header from "./layoutPage/header/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainHtml>
    <Header />
    <GlobalStyle />
    </MainHtml>
  </StrictMode>
);
