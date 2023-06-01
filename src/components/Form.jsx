import React, { useState } from "react";
import SecondaryButton from "./UI/SecondaryButton";
import PrimaryButton from "./UI/PrimaryButton";
import axios from "axios";
import { CircularProgress } from "@mui/material";

import { useTranslation } from "react-i18next";
import PredictedOutput from "./UI/PredictedOutput";

const Form = ({ isFormEnable, onCloseHandler }) => {
  const [nValue, setNValue] = useState(null);
  const [pValue, setPValue] = useState(null);
  const [kValue, setKValue] = useState(null);
  const [tempValue, setTempValue] = useState(null);
  const [humidityValue, setHumidityValue] = useState(null);
  const [rainfallValue, setRainfallValue] = useState(null);
  const [pHValue, setPHValue] = useState(null);
  const [ispredicting, setIsPredicting] = useState(false);
  const [isPredictValue, setIsPredictValue] = useState(false);
  const [predictedCrop, setPredictedCrop] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);

  const validateForm = () => {
    if (nValue < 1 || nValue > 99) {
      return alert("N Value must be in range 1 to 99");
    }
    if (pValue < 1 || pValue > 99) {
      return alert("P Value must be in range 1 to 99");
    }
    if (kValue < 1 || kValue > 99) {
      return alert("K Value must be in range 1 to 99");
    }
    if (tempValue < 1 || tempValue > 50) {
      return alert("Temprature Value must be in range 1 to 50");
    }
    if (humidityValue < 1 || humidityValue > 200) {
      return alert("Humidity Value must be in range 1 to 200");
    }
    if (rainfallValue < 1 || rainfallValue > 300) {
      return alert("Rainfall Value must be in range 1 to 300");
    }
    if (pHValue < 1 || pHValue > 14) {
      return alert("pH Value must be in range 1 to 14");
    }
    setIsFormValidated(true);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validateForm();
    if (!isFormValidated) {
      return;
    }
    setIsPredicting(true);
    const queryArray = [
      nValue,
      pValue,
      kValue,
      tempValue,
      humidityValue,
      pHValue,
      rainfallValue,
    ];
    try {
      const prediction = await axios.post(
        "https://fypbackend-flask.onrender.com/predict/",
        {
          query_array: queryArray,
        }
      );
      console.log("prediction complete");
      setIsPredicting(false);
      setIsPredictValue(true);
      setPredictedCrop(prediction.data["predicted_crop"]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const tryAgain = () => {
    setIsPredictValue(false);
    setPredictedCrop("");
    setIsPredicting(false);
    setIsFormValidated(false);
    setNValue(null);
    setPHValue(null);
    setKValue(null);
    setPValue(null);
    setRainfallValue(null);
    setTempValue(null);
    setHumidityValue(null);
  };

  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col ${
        isFormEnable ? "" : "absolute -right-[100rem]"
      } justify-between items-center border border-black h-[40rem] rounded-lg bg-white px-10 w-[40rem]`}
    >
      {!ispredicting && !isPredictValue ? (
        <>
          <div className="mt-8">
            <h1 className="text-3xl text-green-500">
              {t("Environment Details")}
            </h1>
          </div>
          <form className="grid grid-cols-2 p-12 gap-x-16">
            <div className="relative mb-6">
              <input
                className="border-b-2 min-w-full px-1 py-2 text-green-500 bg-transparent outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                name="nValue"
                min="1"
                pattern="[0-9]{2}"
                max="100"
                placeholder="N Value"
                required
                onChange={(e) => setNValue(e.target.value)}
              />
              <label
                htmlFor="nValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("N Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="pValue"
                placeholder="P Value"
                required
                min="1"
                pattern="[0-9]{2}"
                max="100"
                onChange={(e) => setPValue(e.target.value)}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="pValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("P Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="kValue"
                placeholder="K Value"
                required
                min="1"
                max="100"
                onChange={(e) => setKValue(e.target.value)}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="kValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t(" K Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="tempValue"
                placeholder="Temprature Value"
                required
                min="1"
                max="50"
                onChange={(e) => setTempValue(e.target.value)}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="tempValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Temperature Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="humidityValue"
                required
                min="1"
                onChange={(e) => setHumidityValue(e.target.value)}
                placeholder="Humidity Value"
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="humidityValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Humidity Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="rainValue"
                placeholder="Rainfall Value"
                required
                min="1"
                max="400"
                pattern="[0-9]{2}"
                onChange={(e) => setRainfallValue(e.target.value)}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="rainValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Rainfall Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                name="pHValue"
                placeholder="pH Value"
                required
                min="1"
                max="14"
                onChange={(e) => setPHValue(e.target.value)}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="pHValue"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("pH Value")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                name="region"
                placeholder="Region"
                required
                onChange={null}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="region"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Region")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                name="sowing season"
                placeholder="Sowing Season"
                required
                onChange={null}
                className="[appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="sowing season"
                className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Sowing Season")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                name="sowing season"
                placeholder="Sowing Season"
                required
                onChange={null}
                className=" opacity-0 [appearance:textfield] min-w-full bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
              />
              <label
                htmlFor="sowing season"
                className="opacity-0 absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
              >
                {t("Sowing Season")}
              </label>
            </div>

            <div className="flex flex-row justify-between gap-6 ">
              {/*  eslint-disable-next-line */}
              <SecondaryButton onClick={onCloseHandler} style={"ml-14"}>
                {t("Close")}
              </SecondaryButton>
              {/*  eslint-disable-next-line */}
              <PrimaryButton
                style={`ml-12 ${!isFormValidated && "disabled"}`}
                onClick={onSubmitHandler}
              >
                {t("Submit")}
              </PrimaryButton>
            </div>
          </form>
        </>
      ) : (
        <>
          {ispredicting ? (
            <div className="flex items-center justify-center text-[20rem] h-[35rem]">
              <CircularProgress color="success" />
            </div>
          ) : (
            <PredictedOutput
              predictedCrop={predictedCrop}
              tryAgain={tryAgain}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Form;
