import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "./locales/en/english.json";
import tHi from "./locales/hi/hindi.json";
import tBa from "./locales/ba/bangla.json";
import tGj from "./locales/gj/gujrati.json";
import tKan from "./locales/kan/kannada.json";
import tTn from "./locales/tn/tamil.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: tEn,
      },
      hi: {
        translation: tHi,
      },
      ba: {
        translation: tBa,
      },
      gj: {
        translation: tGj,
      },
      kan: {
        translation: tKan,
      },
      tn: {
        translation: tTn,
      },
    },
    lng: "hi", // if you're using a language detector, do not define the lng option
    fallbackLng: "hi",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
