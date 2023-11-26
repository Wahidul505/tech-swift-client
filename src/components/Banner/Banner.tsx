import Image from "next/image";
import React from "react";
import iPhone from "../../resources/iphone.png";
import watch from "../../resources/watch.png";
import mac from "../../resources/mac.png";
import airpods from "../../resources/airpods.png";
import BannerHeading from "../Heading/BannerHeading";
import BannerLayout from "./BannerLayout";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6">
      <BannerLayout
        href="/"
        size="big"
        imgSrc="https://i.ibb.co/Mpnbmfx/iphone.png"
        bg="secondary-bg"
      >
        <BannerHeading
          label="Unleash Innovation"
          subLabel="with the Latest iPhones"
          color="primary-text"
          orientation="landscape"
        />
      </BannerLayout>
      <BannerLayout
        href="/"
        size="small"
        imgSrc="https://i.ibb.co/BBDrRkH/airpods.png"
        bg="primary-bg"
      >
        <BannerHeading
          label="Unrivaled Sound:"
          subLabel="AirPods"
          color="secondary-text"
          orientation="square"
        />
      </BannerLayout>
      <BannerLayout
        href="/"
        size="small"
        imgSrc="https://i.ibb.co/CJZ0kc6/watch.png"
        bg="primary-bg"
      >
        <BannerHeading
          label="Stay Connected"
          subLabel="with Apple Watch"
          color="secondary-text"
          orientation="square"
        />
      </BannerLayout>
    </div>
  );
};

export default Banner;
