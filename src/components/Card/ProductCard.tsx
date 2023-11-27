import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AddToCartButton from "../Button/AddToCartButton";
import AddToWishlistButton from "../Button/AddToWishlistButton";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div className="w-56 lg:w-72 xl:w-80 m-3 md:m-5 lg:m-8 rounded-2xl overflow-hidden shadow-lg transition-transform duration-400 ease-in cursor-pointer bg-gray-100">
      <div onClick={() => router.push(`/product/${product?._id}`)} className="">
        <Image
          src={product?.image}
          alt=""
          width={500}
          height={500}
          className="w-full h-56 lg:h-60"
        />
        <div className="px-3 md:px-4 pt-1 h-24 md:h-32 lg:h-36">
          <div className="uppercase text-gray-500 info">
            {product?.category?.title}
          </div>
          <div className="text-gray-800 text my-0">{product?.title}</div>
          <div className="primary-text text">${product?.price}</div>
        </div>
      </div>
      <div className="flex justify-end p-2 md:p-3">
        <AddToWishlistButton product={product} />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
