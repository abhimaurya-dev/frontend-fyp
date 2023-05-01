import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";

const description =
  "Based on the N(Nitrogen % in Soil), P(Phosphorus % in Soil), K(Potassion % in Soil), temperature(in °C), humidity(gram per cubic metre), rainfall (per cubic centimetre), and ph, the model will recommend the optimum crop to grow on the given soil. Farming is related to real world,we no nothing about future but still we can predict it.So, If you want to predict your crop yield, you are at right place.We have developedthe software through which you can  predict the crop yield using machine learning. You have to just click the below button and fill the reqired data in the form.";

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
