import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../Shared/TopNavbar";
import Footer from "../Shared/Footer";
import FooterBottom from "../Shared/FooterBottom";
import SocialLink from "./SocialLink";
import Navbar from "../Shared/Navbar";

const Layout = () => {
  return (
    <div className="relative ">
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 lg:flex flex-col space-y-4 px-4 z-50 hidden ">
        <SocialLink />
      </div>
      <div className=" px-p_8px lg:px-0">
        <div>
          <TopNavbar />
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Layout;
