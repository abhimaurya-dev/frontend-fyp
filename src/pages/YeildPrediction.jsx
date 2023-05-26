import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";

import { useTranslation } from "react-i18next";

const description =
  "Crop yield prediction is one of the challenging tasks in agriculture. It plays an essential role in decision making at global, regional, and field levels. The prediction of crop yield is based on soil, meteorological, environmental, and crop parameters. Crop yield prediction involves predicting the yield of crops from available historic data like weather parameters, soil parameters and historic crop yield. Currently this Service is only for people in Maharastra. We are working towards making it available in each and every part of India.";

const YeildPrediction = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Description
        titleFirst={t("Crop Yeild")}
        titleLast={t("Prediction")}
        question={t("What is Crop Yeild Prediction")}
        description={t(description)}
      />
    </>
  );
};

export default YeildPrediction;
