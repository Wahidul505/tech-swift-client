"use client";
import React from "react";
import InformationCard from "./InformationCard";
import Image from "next/image";

const ProductDetailsCard = ({ product }: { product: any }) => {
  return (
    <div className="">
      <div className="w-full flex justify-center">
        <Image
          src={product?.image}
          alt=""
          width={500}
          height={500}
          className="w-56 h-56 md:w-96 md:h-96 rounded-2xl border border-solid border-gray-300"
        />
      </div>
      <div className="pt-4 md:pt-8 w-full">
        <h1 className="heading primary-text">{product?.title}</h1>
        <p className="text text-gray-800">$ {product?.price}</p>
        <div className="border-b border-solid border-gray-300 border-t-0 border-r-0 border-l-0 w-full my-2 md:my-4"></div>
        <div className="grid grid-cols-2">
          {Object?.entries(product?.details) &&
            Object?.entries(product?.details)?.map(
              (entry: any, index: number) => (
                <InformationCard
                  key={index}
                  label={entry[0] as string}
                  value={entry[1] as string}
                />
              )
            )}
        </div>
        <div className="primary-text info mb-1">Tags:</div>
        <div className="flex flex-wrap">
          {product?.features?.map((feature: string, index: number) => (
            <div
              key={index}
              className="rounded-lg mr-1 mb-1 md:mr-2 py-1 px-2 info text-gray-800 border border-solid border-gray-500"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
