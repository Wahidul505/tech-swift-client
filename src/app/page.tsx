import Banner from "@/components/HomepageComponents/Banner/Banner";
import CategoryContainerHome from "@/components/HomepageComponents/CategoryContainerHome";
import React from "react";
import Banner2 from "@/components/HomepageComponents/Banner/Banner2";
import GoToCartButton from "@/components/Button/GoToCartButton";
import RecentProducts from "@/components/HomepageComponents/RecentProducts";

const HomePage = () => {
  return (
    <div>
      <div className="mb-10 md:mb-12 lg:mb-16">
        <Banner />
      </div>
      <div className="my-10 md:my-12 lg:my-16">
        <CategoryContainerHome />
      </div>
      <div className="my-10 md:my-12 lg:my-16">
        <Banner2 />
      </div>
      <div className="my-10 md:my-12 lg:my-16">
        <RecentProducts />
      </div>
      <GoToCartButton />
    </div>
  );
};

export default HomePage;
