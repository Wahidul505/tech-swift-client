"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import LoadingPage from "@/app/loading";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import { useRouter } from "next/navigation";

const CategoryContainerHome = () => {
  const { data, isLoading } = useCategoriesQuery(undefined);
  const router = useRouter();
  if (isLoading) return <LoadingPage />;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
    >
      {data &&
        data?.map((category: any) => (
          <SwiperSlide
            key={category?._id}
            className="flex justify-center cursor-pointer mb-4"
            onClick={() => router.push(`/category/${category?._id}`)}
          >
            <div className="h-20 w-20 md:h-32 md:w-52 lg:h-64 lg:w-96 flex flex-col items-center justify-center shadow-lg rounded-2xl  p-3 md:p-5 bg-gray-100 m-3 md:m-5 lg:m-8">
              <Image
                src={category?.image}
                alt=""
                width={500}
                height={500}
                className="h-12 w-20 md:h-24 md:w-32 lg:h-28 lg:w-40"
              />
              <div className="primary-text text mt-3 md:mt-6">
                {category?.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CategoryContainerHome;
