import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";

const description =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis hic explicabo sit consequatur, cum necessitatibus delectus tempore eveniet, quia ut distinctio dolor eius doloremque. Nisi sapiente facere quae obcaecati placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis hic explicabo sit consequatur, cum necessitatibus delectus tempore eveniet, quia ut distinctio dolor eius doloremque. Nisi sapiente facere quae obcaecati placeat.  ";

const CropRecommendation = () => {
  return (
    <div className="transition-all delay-700">
      <Header />
      <Description
        titleFirst={"CROP"}
        titleLast={"Recommendation"}
        question={"What is Crop Recommendation"}
        description={description}
      />
    </div>
  );
};

export default CropRecommendation;
