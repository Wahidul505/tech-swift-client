import Image from "next/image";
import React from "react";
import BannerHeading from "../Heading/BannerHeading";

type IProps = {
  children: React.ReactNode | React.ReactElement;
  href: string;
  size: string;
  imgSrc: string;
  bg: string;
};

const BannerLayout = ({ href, size, imgSrc, children, bg }: IProps) => {
  return (
    <div
      className={`flex justify-center items-center ${bg} ${
        size === "big"
          ? "col-span-2 lg:col-span-4 row-span-2 h-96 rounded-2xl m-2 p-3 md:p-6 flex-col-reverse md:flex-row"
          : "col-span-2 md:col-span-1 lg:col-span-2  h-44 rounded-2xl m-2 relative p-3 md:p-4"
      }`}
    >
      <div className="w-fit">{children}</div>

      <div className="w-fit m-3">
        <Image
          src={imgSrc}
          alt=""
          width={500}
          height={500}
          className={
            size === "big"
              ? "w-40 h-40 lg:w-80 lg:h-80 drop-shadow-2xl shadow-black"
              : "w-20 h-20 lg:w-32 lg:h-32"
          }
        />
      </div>
    </div>
  );
};

export default BannerLayout;
