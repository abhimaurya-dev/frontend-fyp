import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <div className="flex relative flex-col mx-12 justify-end items-start h-[50rem] z-[100]">
          {/* <img
          className="mt-10"
          height={"600px"}
          width={"600px"}
          src="/assets/images/construction.png"
          alt="page-under-construction"
        /> */}
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <defs>
              {" "}
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                {" "}
                <stop
                  id="stop1"
                  stop-color="rgba(34, 197, 94, 1)"
                  offset="0%"
                ></stop>{" "}
                <stop
                  id="stop2"
                  stop-color="rgba(220, 252, 231, 1)"
                  offset="100%"
                ></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <path
              fill="url(#sw-gradient)"
              d="M26.2,-32.2C33.3,-25.3,37.7,-16.4,40,-6.6C42.3,3.2,42.3,13.8,37.6,21.3C32.8,28.8,23.3,33.2,13.6,36.3C3.9,39.3,-5.8,41.1,-15.2,38.9C-24.6,36.8,-33.7,30.7,-37.9,22.4C-42.1,14.1,-41.4,3.4,-38.8,-6C-36.1,-15.4,-31.4,-23.6,-24.6,-30.5C-17.8,-37.4,-8.9,-42.9,0.3,-43.4C9.6,-43.8,19.2,-39,26.2,-32.2Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            ></path>{" "}
          </svg>
          <img
            src="/assets/images/farmer1.png"
            height={"450px"}
            width={"450px"}
            className="border:none absolute left-[10rem] top-[7rem]  rounded-sm"
            alt="farmer"
          />
        </div>
        <div className=" absolute top-[4rem] left-[51rem]  p-8 ">
          <div className="flex flex-col">
            <h1 className="text-[4rem] text-green-950">What we do here ?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
