import Banner from "@/components/Banner/Banner";
import CategoryContainerHome from "@/components/Category/CategoryContainerHome";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24 lg:pt-32">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <Banner />
        </div>
        <div className="my-8 md:my-10 lg:my-12">
          <CategoryContainerHome />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
