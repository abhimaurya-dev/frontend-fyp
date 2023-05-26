import React from "react";
import Card from "./UI/Card";

import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-row justify-center text-4xl pb-10">
        <h1 className="text-green-950 underline underline-offset-8">
          {t("Services")}
        </h1>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:px-[27rem] ">
        <Card
          title={t("Crop Recommendation")}
          imageUrl={"/assets/images/thinking2.jpg"}
          readMoreLink={"/crop-recommendation"}
        />
        <Card
          title={t("Crop Yeild Prediction")}
          imageUrl={"/assets/images/farming.jpg"}
          readMoreLink={"/yeild-prediction"}
        />
      </div>
    </div>
  );
};

export default Content;
