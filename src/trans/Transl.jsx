import React from "react";
import { useTranslation } from "react-i18next";

function Transl() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("service")}</h1>
    </>
  );
}

export default Transl;
