import React from "react";
import SecondaryButton from "./UI/SecondaryButton";
import PrimaryButton from "./UI/PrimaryButton";

const Form = ({ isFormEnable, onCloseHandler }) => {
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
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
            type="text"
            name="nValue"
            placeholder="N Value"
            required
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
            type="text"
            name="pValue"
            placeholder="P Value"
            required
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
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
            type="text"
            name="kValue"
            placeholder="K Value"
            required
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
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
            type="text"
            name="tempValue"
            placeholder="Temprature Value"
            required
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
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
            type="text"
            name="humidityValue"
            required
            placeholder="Humidity Value"
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
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
            type="text"
            name="rainValue"
            placeholder="Rainfall Value"
            required
            className="border-b-2 px-1 py-2 text-green-500 outline-none border-gray-600 focus:border-green-500 placeholder-transparent peer"
          />
          <label
            htmlFor="rainValue"
            className="absolute -top-4 left-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-1 peer-focus:-top-4 peer-focus:text-green-500"
          >
            Rainfall Value
          </label>
        </div>
        <div className="flex flex-row justify-between gap-10">
          {/*  eslint-disable-next-line */}
          <SecondaryButton onClick={onCloseHandler} style={"ml-12"}>
            Close
          </SecondaryButton>
          {/*  eslint-disable-next-line */}
          <PrimaryButton style={"ml-12"}>Submit</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
