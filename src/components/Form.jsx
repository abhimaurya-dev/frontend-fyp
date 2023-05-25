import React, { useState } from "react";
import SecondaryButton from "./UI/SecondaryButton";
import PrimaryButton from "./UI/PrimaryButton";
import axios from "axios";

const Form = ({ isFormEnable, onCloseHandler }) => {
  const [nValue, setNValue] = useState(null);
  const [pValue, setPValue] = useState(null);
  const [kValue, setKValue] = useState(null);
  const [tempValue, setTempValue] = useState(null);
  const [humidityValue, setHumidityValue] = useState(null);
  const [rainfallValue, setRainfallValue] = useState(null);
  const [pHValue, setPHValue] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
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
        "https://backendapi-1-g3070263.deta.app/predict/",
        {
          query_array: queryArray,
        }
      );
      console.log(prediction.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`flex flex-col ${
        isFormEnable ? "" : "absolute -right-[100rem]"
      } justify-between items-center border border-black rounded-lg bg-white px-10 w-[40rem]`}
    >
      <div className="mt-8">
        <h1 className="text-3xl text-green-500">Environment Details</h1>
      </div>
      <form className="grid grid-cols-2 p-12 gap-x-16">
        <div className="relative mb-6">
          <input
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            name="nValue"
            min="1"
            placeholder="N Value"
            required
            onChange={(e) => setNValue(e.target.value)}
          />
          <label
            htmlFor="nValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            N Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="pValue"
            placeholder="P Value"
            required
            min="1"
            onChange={(e) => setPValue(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="pValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            P Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="kValue"
            placeholder="K Value"
            required
            min="1"
            onChange={(e) => setKValue(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="kValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            K Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="tempValue"
            placeholder="Temprature Value"
            required
            min="1"
            onChange={(e) => setTempValue(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="tempValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            Temprature Value
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
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="humidityValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            Humidity Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="rainValue"
            placeholder="Rainfall Value"
            required
            min="1"
            onChange={(e) => setRainfallValue(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="rainValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            Rainfall Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="pHValue"
            placeholder="pH Value"
            required
            min="1"
            onChange={(e) => setPHValue(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="rainValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            pH Value
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            name="rainValue"
            placeholder="Rainfall Value"
            required
            min="1"
            onChange={(e) => setRainfallValue(e.target.value)}
            className=" opacity-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="rainValue"
            className="opacity-0 absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            Rainfall Value
          </label>
        </div>
        <div className="flex flex-row justify-between gap-6 ">
          {/*  eslint-disable-next-line */}
          <SecondaryButton onClick={onCloseHandler} style={"ml-14"}>
            Close
          </SecondaryButton>
          {/*  eslint-disable-next-line */}
          <PrimaryButton style={"ml-12"} onClick={onSubmitHandler}>
            Submit
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
