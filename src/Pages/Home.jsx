import React from "react";

import BannerCard from "../Components/Section/Banner/BannerCard/BannerCard";
import AboutUs from "../Components/Section/AboutUs/AboutUs";
import LatestProject from "../Components/Section/LatestProject/LatestProject";

const Home = () => {
  return (
    <div>
      <BannerCard></BannerCard>
      <AboutUs></AboutUs>
      <LatestProject></LatestProject>
    </div>
  );
};

export default Home;
