import React, { useState } from "react";
import PrimaryButton from "./UI/PrimaryButton";
import Form from "./Form";

import { useTranslation } from "react-i18next";

const Description = ({ titleFirst, titleLast, question, description }) => {
  const [tryNow, setTryNow] = useState(false);

  const tryNowHandler = () => {
    setTryNow(true);
  };

  const onTryNowCloseHandler = () => {
    setTryNow(false);
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-row h-[86vh] px-[200px] py-14">
      <div className="">
        <div>
          <h1
            className={`text-green-700 ${
              tryNow ? "text-3xl" : "text-4xl"
            }  py-4`}
          >
            {titleFirst} <span className="text-yellow-600 ">{titleLast}</span>
          </h1>
        </div>
        <div className="flex flex-row justify-start mt-10">
          <img
            className="border border-green-800 rounded-3xl mr-8"
            src="/assets/images/thinking2.jpg"
            height={tryNow ? "200" : "400px"}
            width={tryNow ? "200" : "400px"}
            alt="thinking about crop"
          />
          <div className="pt-4">
            <h2
              className={`${
                tryNow ? "text-2xl" : "text-3xl"
              } text-green-950 pb-4`}
            >
              {question} ?
            </h2>
            <p className={`text-gray-900 ${tryNow ? "text-md" : "text-xl"}`}>
              {description}
            </p>
            {!tryNow && (
              <PrimaryButton
                onClick={tryNowHandler}
                // eslint-disable-next-line
                style={"flex flex-row items-center"}
              >
                {t("Try Now")}
                <span className="material-symbols-outlined ml-2 text-2xl">
                  arrow_right_alt
                </span>
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
      <div className="transition-all delay-300">
        {tryNow && (
          <div className="ml-8 mt-[7rem]">
            <Form isFormEnable={tryNow} onCloseHandler={onTryNowCloseHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
