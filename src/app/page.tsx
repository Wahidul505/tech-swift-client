import Banner from "@/components/Banner/Banner";
import CategoryContainerHome from "@/components/Category/CategoryContainerHome";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="mb-8 md:mb-10 lg:mb-12">
        <Banner />
      </div>
      <div className="my-8 md:my-10 lg:my-12">
        <CategoryContainerHome />
      </div>
    </div>
  );
};

export default HomePage;
