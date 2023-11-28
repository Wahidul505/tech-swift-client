"use client";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Banner2 = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="md:pr-8 lg:pr-12 hidden md:block mb-5 md:mb-0">
        <Image
          src="https://i.ibb.co/LgzSPqc/auguras-pipiras-O43-D6-CYzxq-M-unsplash.jpg"
          alt=""
          width={500}
          height={500}
          className="w-72 h-72 md:w-full md:h-96 rounded-2xl"
        />
      </div>
      <div className="">
        <Heading
          label="Lookout Smart products here, there, everywhere."
          center={false}
        />
        <div className="text mb-3 md:mb-8">
          Save when you shop the Best Buy Outlet for clearance, open-box,
          refurbished and pre-owned items. Super value deals 2023.
        </div>
        <PrimaryButton
          onClick={() => router.push("/shop")}
          label="View All Products"
        />
      </div>
    </div>
  );
};

export default Banner2;
