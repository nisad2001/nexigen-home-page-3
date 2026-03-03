import React from "react";

import BannerCard from "../Components/Section/Banner/BannerCard/BannerCard";
import AboutUs from "../Components/Section/AboutUs/AboutUs";
import LatestProject from "../Components/Section/LatestProject/LatestProject";
import ChooseUs from "../Components/Section/AboutUs/ChooseUs/ChooseUs";
import OurServices from "../Components/Section/OurServices/OurServices";
import OurTeam from "../Components/Section/OurTeam/OurTeam";
import Testimonial from "../Components/Section/Testimonial/Testimonial";
import LatestNews from "../Components/Section/LatestNews/LatestNews";

const testimonialPromise = fetch("/testimonial.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <BannerCard></BannerCard>
      <AboutUs></AboutUs>
      <LatestProject></LatestProject>
      <ChooseUs></ChooseUs>
      <OurServices></OurServices>
      <OurTeam></OurTeam>
      <Testimonial testimonialPromise={testimonialPromise}></Testimonial>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
