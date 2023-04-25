import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <img
          className="mt-10"
          height={"600px"}
          width={"600px"}
          src="/assets/images/construction.png"
          alt="page-under-construction"
        />
      </div>
    </div>
  );
};

export default AboutUs;
