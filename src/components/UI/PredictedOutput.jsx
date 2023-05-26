import React from "react";
import PrimaryButton from "./PrimaryButton";

import { useTranslation } from "react-i18next";

const PredictedOutput = ({ predictedCrop, tryAgain }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center pl-4 h-[35rem]">
      <p className="text-green-700 text-2xl">
        According to the condition of Soil and Climate you provided, You should
        plant{" "}
        <span className="text-[2.5rem] capitalize text-yellow-600">
          {predictedCrop}
        </span>{" "}
        Crop for better production.
      </p>

      <PrimaryButton onClick={tryAgain}>{t("Try Again")}</PrimaryButton>
    </div>
  );
};

export default PredictedOutput;
