import React from "react";
import Header from "../components/Header";
import AboutCard from "../components/UI/AboutCard";

import { useTranslation } from "react-i18next";

const images = [
  "/assets/images/abhishek-maurya.jpeg",
  "/assets/images/abhishek-saini.jpeg",
];
const names = ["Abhishek Maurya", "Abhishek Saini"];
const rollNo = ["1901100100005", "1901100100006"];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[60rem]">
      <Header />
      {/* <div className="flex flex-col justify-center items-center">
        <img
          className="mt-10"
          height={"600px"}
          width={"600px"}
          src="/assets/images/construction.png"
          alt="page-under-construction"
        />
      </div> */}
      <div className="px-[200px] pt-14 pb-3 flex flex-col justify-center items-center">
        <div className="grid grid-cols-2">
          {images.map((imageUrl, index) => {
            return (
              <div className="mb-5 mr-12">
                <AboutCard
                  imageUrl={imageUrl}
                  name={names[index]}
                  rollNo={rollNo[index]}
                />
              </div>
            );
          })}
        </div>
        <AboutCard
          name={t("Shivaji Singh")}
          imageUrl={"/assets/images/shivaji-singh.webp"}
          rollNo={"1901100100056"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
