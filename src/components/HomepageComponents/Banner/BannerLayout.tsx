"use client";
import Image from "next/image";
import React from "react";

type IProps = {
  children: React.ReactNode | React.ReactElement;
  size: string;
  imgSrc: string;
};

const BannerLayout = ({ size, imgSrc, children }: IProps) => {
  return (
    <div
      className={`${
        size === "big"
          ? "col-span-2 lg:col-span-4 row-span-2 h-96"
          : "col-span-2 md:col-span-1 lg:col-span-2 h-44"
      } m-4 relative rounded-2xl overflow-hidden`}
    >
      <Image
        src={imgSrc}
        alt=""
        width={500}
        height={500}
        className="w-full h-full"
      />
      <div className="absolute top-0 right-0 left-0 bg-black bg-opacity-50 flex items-center h-full p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default BannerLayout;
