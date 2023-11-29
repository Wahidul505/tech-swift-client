import React from "react";
import notFoundImg from "../resources/404 Error Page not Found with people connecting a plug-amico.png";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className=" text-[#fff8f0] flex justify-center items-center h-screen w-full">
      <Image
        src={notFoundImg}
        alt=""
        width={500}
        height={500}
        className="rounded-2xl"
      />
    </div>
  );
};

export default NotFoundPage;
