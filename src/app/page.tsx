import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24 lg:pt-32">
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
