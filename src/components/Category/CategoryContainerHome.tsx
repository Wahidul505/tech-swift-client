"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
      slidesPerView={4}
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
            className="flex justify-center cursor-pointer"
            onClick={() => router.push(`/category/${category?._id}`)}
          >
            <div className="h-36 w-52 md:h-56 md:w-72 lg:h-64 lg:w-96 flex flex-col items-center justify-center shadow-lg rounded-2xl mx-1 p-3 md:p-5 base-bg shadow-gray-300">
              <Image
                src={category?.image}
                alt=""
                width={500}
                height={500}
                className="h-16 w-28 md:h-24 md:w-32 lg:h-28 lg:w-40"
              />
              <div className="primary-text heading mt-3 md:mt-6">
                {category?.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CategoryContainerHome;
