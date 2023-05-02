import React from "react";
import Header from "../components/Header";
import AboutCard from "../components/UI/AboutCard";

const images = [
  "/assets/images/abhishek-maurya.jpeg",
  "/assets/images/abhishek-saini.jpeg",
  "/assets/images/khushvinder-singh.JPG",
  "/assets/images/shivaji-singh.webp",
];
const names = [
  "Abhishek Maurya",
  "Abhishek Saini",
  "Khushvinder Singh",
  "Shivaji Singh",
];
const rollNo = [
  "1901100100005",
  "1901100100006",
  "1901100100037",
  "1901100100056",
];

const AboutUs = () => {
  return (
    <div>
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
      <div className="px-[200px] pt-2 flex flex-col justify-center items-center">
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
          name={"Ankita Pandey"}
          imageUrl={"/assets/images/ankita-pandey.jpeg"}
          rollNo={"1901100100017"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
