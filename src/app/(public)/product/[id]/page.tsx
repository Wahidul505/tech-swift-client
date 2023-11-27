"use client";
import LoadingPage from "@/app/loading";
import AddToCartButton from "@/components/Button/AddToCartButton";
import AddToWishlistButton from "@/components/Button/AddToWishlistButton";
import BackButton from "@/components/Button/BackButton";
import InformationCard from "@/components/Card/InformationCard";
import { useSingleProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const ProductDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useSingleProductQuery(id);
  if (isLoading) return <LoadingPage />;
  return (
    <div>
      <BackButton />
      <div className="flex lg:flex-row flex-col items-center lg:items-start">
        <Image
          src={data?.image}
          alt=""
          width={500}
          height={500}
          className="w-56 h-56 md:w-96 md:h-96 rounded-2xl"
        />
        <div className="mt-8 lg:mt-0 lg:ml-8 pt-2 w-full">
          <h1 className="heading primary-text">{data?.title}</h1>
          <p className="text text-gray-800">$ {data?.price}</p>
          <div className="border-b border-solid border-gray-300 border-t-0 border-r-0 border-l-0 w-full my-2 md:my-4"></div>
          <div className="grid grid-cols-2">
            {Object?.entries(data?.details) &&
              Object?.entries(data?.details)?.map(
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
            {data?.features?.map((feature: string, index: number) => (
              <div
                key={index}
                className="rounded-lg mr-1 mb-1 md:mr-2 py-1 px-2 info text-gray-800 border border-solid border-gray-500"
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-2 md:mt-4">
            <AddToWishlistButton product={data} />
            <AddToCartButton product={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
