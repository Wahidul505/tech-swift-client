import LoadingPage from "@/app/loading";
import {
  useAddToWishlistMutation,
  useMyWishlistQuery,
} from "@/redux/api/wishlistApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ProductCard = ({ product }: { product: any }) => {
  const { userId } = getUserInfo() as { userId: string };
  const [addToWishlist] = useAddToWishlistMutation();
  const { data, isLoading } = useMyWishlistQuery(undefined);

  const handleAddToWishlist = async (id: string) => {};

  if (isLoading) return <LoadingPage />;

  console.log(data);

  return (
    <div className="w-56 lg:w-72 xl:w-80 m-3 md:m-5 lg:m-8 rounded-2xl overflow-hidden shadow-lg transition-transform duration-400 ease-in cursor-pointer">
      <Image
        src={product?.image}
        alt=""
        width={500}
        height={500}
        className="w-full h-56 lg:h-60"
      />
      <div className="px-3 py-2">
        <div className="uppercase text-gray-500 info">
          {product?.category?.title}
        </div>
        <div className="text-gray-800 text my-0">{product?.title}</div>
        <div className="flex justify-between">
          <div className="primary-text text">${product?.price}</div>
          <div className="flex mt-2">
            <button
              onClick={() => addToWishlist(product?._id)}
              className="border-none mr-3 cursor-pointer"
            >
              <IoMdHeartEmpty className="text-xl lg:text-2xl" />
            </button>
            <button className="border-none cursor-pointer">
              <BsCart2 className="text-xl lg:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
