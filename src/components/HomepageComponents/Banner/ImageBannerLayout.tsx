import Image from "next/image";
import React from "react";

const ImageBannerLayout = ({
  imgSrc,
  children,
}: {
  imgSrc: string;
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <div className="relative h-52 md:h-64 lg:h-80 rounded-2xl overflow-hidden">
      <Image
        src={imgSrc}
        alt=""
        width={500}
        height={500}
        className="w-full h-full"
      />
      <div className="absolute top-0 right-0 left-0 h-full rounded-2xl bg-black bg-opacity-40 flex justify-center items-center p-4">
        {children}
      </div>
    </div>
  );
};

export default ImageBannerLayout;
