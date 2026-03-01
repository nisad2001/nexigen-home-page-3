import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Section/Header/Header";
import Footer from "../Components/Section/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
