"use client";
import CustomTable from "@/components/Table/CustomTable";
import Image from "next/image";
import React from "react";
import { useMyWishlistQuery } from "@/redux/api/wishlistApi";
import { getUserInfo } from "@/services/auth.service";
import LoadingPage from "@/app/loading";
import AddToCartButton from "@/components/Button/AddToCartButton";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import wishlistImg from "../../../resources/Empty-bro.png";

const columns = [
  { key: "image", label: "Image" },
  { key: "title", label: "Product Name" },
  { key: "model", label: "Model" },
  { key: "price", label: "Price" },
];

const MyWishlistPage = () => {
  const { userId } = getUserInfo() as { userId: string };
  const { data, isLoading } = useMyWishlistQuery(userId) as {
    data: any;
    isLoading: any;
  };

  const wishlistData = data?.products?.map((product: any) => ({
    image: (
      <Image
        src={product?.product?.image}
        alt=""
        width={500}
        height={500}
        className="w-8 h-8 md:w-10 md:h-10  lg:w-16 lg:h-16 rounded-2xl overflow-hidden"
      />
    ),
    title: product?.product?.title,
    model: product?.product?.details?.model,
    price: `$${product?.product?.price}`,
    actionButton: (
      <div className="flex items-center space-x-4">
        <AddToCartButton product={product?.product} />
        <Link
          href={`/product/${product?.product?._id}`}
          className="no-underline text-gray-800 heading"
        >
          <GoLinkExternal />
        </Link>
      </div>
    ),
  }));

  if (isLoading) return <LoadingPage />;

  if (!data) {
    return (
      <ErrorHeading
        imgSrc={wishlistImg}
        label="Your Wishlist is empty"
        btnLabel="Back to Shop"
        btnHref="/shop"
      />
    );
  }

  return (
    <div className=" w-full">
      <CustomTable
        columns={columns}
        data={wishlistData}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default MyWishlistPage;
