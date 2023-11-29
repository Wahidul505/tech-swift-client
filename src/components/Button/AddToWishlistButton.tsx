"use client";
import LoadingPage from "@/app/loading";
import {
  useAddToWishlistMutation,
  useMyWishlistQuery,
} from "@/redux/api/wishlistApi";
import { getUserInfo } from "@/services/auth.service";
import React, { useEffect, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const AddToWishlistButton = ({ product }: { product: any }) => {
  const { userId } = getUserInfo() as { userId: string };
  const [addToWishlist] = useAddToWishlistMutation();
  const [isWishListed, setIsWishListed] = useState(false);
  const { data, isLoading } = useMyWishlistQuery(userId);

  useEffect(() => {
    if (data) {
      setIsWishListed(
        data?.products?.find(
          (wishlistProduct: any) =>
            wishlistProduct?.product?._id === product?._id
        )
      );
    } else {
      setIsWishListed(false);
    }
  }, [data, product?._id, userId]);

  const handleAddToWishlist = async (id: string) => {
    const exist = data?.products?.find(
      (wishlistProduct: any) => wishlistProduct?.product?._id === product?._id
    );
    if (!exist) {
      const existingData = data?.products?.map((product: any) => ({
        product: product?.product?._id,
      }));
      const newData = { product: id };
      const products = existingData ? [...existingData, newData] : [newData];
      await addToWishlist({ products: products });
    }
  };

  if (isLoading) return <LoadingPage />;
  return (
    <>
      {userId &&
        (isWishListed ? (
          <button disabled className="border-none  bg-transparent">
            <IoMdHeart className="text-xl md:text-2xl lg:text-3xl primary-text mr-2 " />
          </button>
        ) : (
          <button
            onClick={() => handleAddToWishlist(product?._id)}
            className="border-none cursor-pointer bg-transparent"
          >
            <IoMdHeartEmpty className="text-xl md:text-2xl lg:text-3xl  mr-2 text-gray-800" />
          </button>
        ))}
    </>
  );
};

export default AddToWishlistButton;
