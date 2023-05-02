import { Route, Routes } from "react-router-dom";
import CropRecommendation from "./pages/CropRecommendation";
import Services from "./pages/Services";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import YeildPrediction from "./pages/YeildPrediction";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Services />} />
      <Route
        exact
        path="/crop-recommendation"
        element={<CropRecommendation />}
      />
      <Route exact path="/yeild-prediction" element={<YeildPrediction />} />
      <Route exact path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
