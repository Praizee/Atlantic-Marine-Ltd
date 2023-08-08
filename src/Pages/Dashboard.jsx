import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbars/Navbar"
import Footer from "../Components/Footer/Footer"
import { HeroSection } from "../Components/Hero/HeroSection";
import ScrollButton from "../Components/ScrollToTop/ScrollToTop";
import NewNavBar from "../Components/Navbars/NewNavBar";


const Dashboard = () => {
  return (
    <section>
      <div>
        <Navbar />
        <NewNavBar />
      </div>

      <div className="">
        {/* <HeroSection /> */}
      </div>

      <div className="">
        <Outlet />
      </div>

      <div className="">
        <Footer />
      </div>

      {/* <ScrollButton /> */}

    </section>
  );
};

export default Dashboard;
