"use client";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React from "react";
import ImageBannerLayout from "./ImageBannerLayout";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useRouter } from "next/navigation";

const ImageBanner = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ImageBannerLayout imgSrc="https://i.ibb.co/CWbqxn5/tron-le-v-NREue70lmo-unsplash.jpg">
        <div>
          <Heading
            label="Explore Superior Sound, Shop HomePod Now!"
            color="text-white"
            center={false}
          />
          <PrimaryButton label="Shop" onClick={() => router.push("/shop")} />
        </div>
      </ImageBannerLayout>
      <ImageBannerLayout imgSrc="https://i.ibb.co/wKzmDJv/francois-hoang-g-YVNv-Ryg-CUw-unsplash.jpg">
        <div>
          <Heading
            label="Unleash Limitless Creativity, Shop iPads Now!"
            color="text-white"
            center={false}
          />
          <PrimaryButton label="Shop" onClick={() => router.push("/shop")} />
        </div>
      </ImageBannerLayout>
    </div>
  );
};

export default ImageBanner;
