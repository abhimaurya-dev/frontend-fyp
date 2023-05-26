import React from "react";
import { Link } from "react-router-dom";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex relative justify-between px-[200px] py-10 text-green-950 bg-green-100 ">
      <Link to={"/"}>
        <div className="absolute top-2 ">
          <img
            src="/assets/images/gogreen.png"
            height={"100px"}
            width={"100px"}
            alt=""
          />
        </div>
      </Link>
      <div className="display:none"></div>
      <ul className="flex items-center gap-12 text-xl">
        <li>
          <Link to="/">{t("Home")}</Link>
        </li>
        <li>
          <Link to="/services">{t("Services")}</Link>
        </li>
        <li>
          <Link to="/about-us">{t("About Us")}</Link>
        </li>
        <select
          className="select bg-green-100 max-w-xs text-lg font-medium"
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            if (e.target.value === "en") {
              sessionStorage.setItem("language", "en");
            } else if (e.target.value === "hi") {
              sessionStorage.setItem("language", "हिंदी");
            } else if (e.target.value === "ba") {
              sessionStorage.setItem("language", "বাংলা");
            } else if (e.target.value === "gj") {
              sessionStorage.setItem("language", "ગુજરાતી");
            } else if (e.target.value === "kan") {
              sessionStorage.setItem("language", "ಕನ್ನಡ");
            }
          }}
        >
          <option disabled selected>
            {sessionStorage.getItem("language")
              ? t(sessionStorage.getItem("language"))
              : t("Select Language")}
          </option>
          <option value={"en"}>{t("English")}</option>
          <option value={"hi"}>{t("Hindi")}</option>
          <option value={"ba"}>{t("Bangla")}</option>
          <option value={"gj"}>{t("Gujrati")}</option>
          <option value={"kan"}>{t("Kannada")}</option>
          {/* <option value={"tn"}>{t("Tamil")}</option> */}
        </select>
        {/* </li> */}
      </ul>
    </div>
  );
};

export default Header;
