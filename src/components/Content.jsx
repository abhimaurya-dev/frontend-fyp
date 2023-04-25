import React from "react";
import Card from "./UI/Card";

const Content = () => {
  return (
    <div>
      <div className="flex flex-row justify-center text-4xl pb-10">
        <h1 className="text-green-950 underline underline-offset-8">
          Services
        </h1>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:px-[27rem] ">
        <Card
          title={"Crop Recommendation"}
          imageUrl={"/assets/images/thinking2.jpg"}
          readMoreLink={"/crop-recommendation"}
        />
        <Card
          title={"Crop Yeild Prediction"}
          imageUrl={"/assets/images/farming.jpg"}
          readMoreLink={"/"}
        />
      </div>
    </div>
  );
};

export default Content;
