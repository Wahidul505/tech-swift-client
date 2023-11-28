"use client";
import LoadingPage from "@/app/loading";
import React from "react";
import ProductCard from "../Card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductsQuery } from "@/redux/api/productApi";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Heading from "../Heading/Heading";

const RecentProducts = () => {
  const { data, isLoading } = useProductsQuery({ limit: 10, page: 1 });

  if (isLoading) return <LoadingPage />;
  return (
    <div>
      <Heading label="Shop our Recent Products" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="hidden md:block"
      >
        {data &&
          data?.map((product: any) => (
            <SwiperSlide
              key={product?._id}
              className="flex justify-center cursor-pointer mb-4"
            >
              <div className="">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="md:hidden block"
      >
        {data &&
          data?.map((product: any) => (
            <SwiperSlide
              key={product?._id}
              className="flex justify-center cursor-pointer mb-4"
            >
              <div className="">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RecentProducts;
