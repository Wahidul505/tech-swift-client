import Banner from "@/components/HomepageComponents/Banner/Banner";
import CategoryContainerHome from "@/components/HomepageComponents/CategoryContainerHome";
import React from "react";
import Banner2 from "@/components/HomepageComponents/Banner/Banner2";
import GoToCartButton from "@/components/Button/GoToCartButton";
import RecentProducts from "@/components/HomepageComponents/RecentProducts";
import ImageBanner from "@/components/HomepageComponents/Banner/ImageBanner";

const HomePage = () => {
  return (
    <div>
      <div className="mb-10 md:mb-12 lg:mb-12">
        <Banner />
      </div>
      <div className="my-10 md:my-12 lg:my-20">
        <CategoryContainerHome />
      </div>
      <div className="my-10 md:my-12 lg:my-20">
        <Banner2 />
      </div>
      <div className="my-10 md:my-12 lg:my-20">
        <RecentProducts />
      </div>
      <div className="my-10 md:my-12 lg:my-20">
        <ImageBanner />
      </div>
      <GoToCartButton />
    </div>
  );
};

export default HomePage;
