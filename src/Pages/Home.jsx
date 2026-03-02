import React from "react";

import BannerCard from "../Components/Section/Banner/BannerCard/BannerCard";
import AboutUs from "../Components/Section/AboutUs/AboutUs";
import LatestProject from "../Components/Section/LatestProject/LatestProject";
import ChooseUs from "../Components/Section/AboutUs/ChooseUs/ChooseUs";
import OurServices from "../Components/Section/OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <BannerCard></BannerCard>
      <AboutUs></AboutUs>
      <LatestProject></LatestProject>
      <ChooseUs></ChooseUs>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
