"use client";
import React from "react";
import BannerLayout from "./BannerLayout";
import Heading from "@/components/Heading/Heading";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6">
      <BannerLayout
        size="big"
        imgSrc="https://i.ibb.co/ZSRJpJh/mohammadreza-alidoost-rb-RWR5-bm-WM-unsplash.jpg"
      >
        <div>
          <Heading
            label="Unleash Innovation with the Latest MacBooks"
            center={false}
            color="text-white"
          />
          <PrimaryButton onClick={() => router.push("/shop")} label="Explore" />
        </div>
      </BannerLayout>
      <BannerLayout
        size="small"
        imgSrc="https://i.ibb.co/N9BBJbv/aryan-dhiman-i-GLLt-LINSkw-unsplash-1.jpg"
      >
        <div>
          <Heading label="Find Accessories" color="text-white" center={false} />
        </div>
      </BannerLayout>
      <BannerLayout
        size="small"
        imgSrc="https://i.ibb.co/qryPfb2/altumcode-k-Q55-67yx-E-unsplash-1.jpg"
      >
        <div>
          <Heading label="New iPhones" color="text-white" center={false} />
        </div>
      </BannerLayout>
    </div>
  );
};

export default Banner;
