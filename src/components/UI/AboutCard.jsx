import React from "react";

import { useTranslation } from "react-i18next";

const AboutCard = ({ imageUrl, name, rollNo }) => {
  const { t } = useTranslation();
  return (
    <div className=" w-[35rem] border border-green-600 shadow-sm rounded-[1rem] p-8 flex flex-row">
      <div className="">
        <div className="flex flex-row gap-10 ">
          <img
            className="h-[200px] shadow-sm border border-green-600 w-[200px] rounded-full"
            // height={"150px"}
            // width={"150px"}
            src={imageUrl}
            alt=""
          />
          <div className=" mt-6 flex flex-col">
            <p className=" text-3xl mb-[0.3rem] text-green-700">{name}</p>
            <p className=" text-[1.2rem] text-gray-700">
              {t("Bachelor of Techhnology")}
            </p>
            <p className="text-[1.2rem] text-gray-700">
              {t("Computer Science & Engg.")}
            </p>
            <p className="text-[1.2rem] text-gray-700">
              {t("4<sup>th</sup>")} {t("Year")} - {rollNo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
