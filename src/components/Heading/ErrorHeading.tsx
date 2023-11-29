"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useRouter } from "next/navigation";

const ErrorHeading = ({
  imgSrc,
  label,
  btnLabel,
  btnHref,
}: {
  imgSrc: any;
  label: string;
  btnLabel: string;
  btnHref: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Image
        src={imgSrc}
        alt=""
        width={500}
        height={500}
        className="w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64"
      />
      <div className="text text-gray-800">{label}</div>
      <PrimaryButton label={btnLabel} onClick={() => router.push(btnHref)} />
    </div>
  );
};

export default ErrorHeading;
