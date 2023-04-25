import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Card = ({ title, imageUrl }) => {
  return (
    <div className="flex justify-center items-center m-5 ">
      <div className="border border-green-700 rounded-[1rem] w-[25rem] md:w-[30rem] flex flex-col justify-center items-center shadow-lg bg-white p-10">
        <div className="m-3 text-2xl md:text-3xl text-green-800 mb-8">
          {title}
        </div>
        <img
          className="block rounded-full border border-green-700"
          src={imageUrl}
          width={"300px"}
          height={"300px"}
          alt="farmer"
        />
        <div className="flex flex-row justify-between">
          {/* eslint-disable-next-line */}
          <SecondaryButton style={"mr-4"}>Read More</SecondaryButton>
          <PrimaryButton>Try for Free</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
