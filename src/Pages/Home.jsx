import React from "react";

import BannerCard from "../Components/Section/Banner/BannerCard/BannerCard";
import AboutUs from "../Components/Section/AboutUs/AboutUs";
import LatestProject from "../Components/Section/LatestProject/LatestProject";
import ChooseUs from "../Components/Section/AboutUs/ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
      <BannerCard></BannerCard>
      <AboutUs></AboutUs>
      <LatestProject></LatestProject>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
