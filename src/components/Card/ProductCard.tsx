import LoadingPage from "@/app/loading";
import {
  useAddToWishlistMutation,
  useMyWishlistQuery,
} from "@/redux/api/wishlistApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ProductCard = ({ product }: { product: any }) => {
  const { userId } = getUserInfo() as { userId: string };
  const [addToWishlist] = useAddToWishlistMutation();
  const [isWishListed, setIsWishListed] = useState(false);
  const { data: wishlistData, isLoading: wishlistIsLoading } =
    useMyWishlistQuery(userId);

  const handleAddToWishlist = async (id: string) => {
    const exist = wishlistData?.products?.find(
      (wishlistProduct: any) => wishlistProduct?.product?._id === product?._id
    );
    if (!exist) {
      const existingData = wishlistData?.products?.map((product: any) => ({
        product: product?.product?._id,
      }));
      const newData = { product: id };
      const products = existingData ? [...existingData, newData] : [newData];
      await addToWishlist({ products: products });
    }
  };

  useEffect(() => {
    if (wishlistData) {
      setIsWishListed(
        wishlistData?.products?.find(
          (wishlistProduct: any) =>
            wishlistProduct?.product?._id === product?._id
        )
      );
    } else {
      setIsWishListed(false);
    }
  }, [wishlistData, product?._id, userId]);

  const handleAddToCart = async (id: string) => {
    const existingProducts = JSON.parse(localStorage.getItem("cart") as string);
    let newProducts;
    if (existingProducts) {
      const alreadyExist = existingProducts?.find(
        (product: any) => product?.product?._id === id
      );
      if (alreadyExist) {
        toast("Already added to cart");
        return;
      } else {
        newProducts = [...existingProducts, { product: product, quantity: 1 }];
        toast.success("Added to Cart");
      }
    } else {
      newProducts = [
        {
          product: product,
          quantity: 1,
        },
      ];
      toast.success("Added to Cart");
    }
    localStorage.setItem("cart", JSON.stringify(newProducts));
  };

  if (wishlistIsLoading) return <LoadingPage />;

  return (
    <div className="w-56 lg:w-72 xl:w-80 m-3 md:m-5 lg:m-8 rounded-2xl overflow-hidden shadow-lg transition-transform duration-400 ease-in cursor-pointer h-96 relative">
      <Image
        src={product?.image}
        alt=""
        width={500}
        height={500}
        className="w-full h-56 lg:h-60"
      />
      <div className="px-3 md:px-4 pt-1">
        <div className="uppercase text-gray-500 info">
          {product?.category?.title}
        </div>
        <div className="text-gray-800 text my-0">{product?.title}</div>
        <div className="primary-text text">${product?.price}</div>
        <div className="flex mt-2 w-fit absolute bottom-3 right-3">
          {userId &&
            (isWishListed ? (
              <button disabled className="border-none ">
                <IoMdHeart className="text-xl lg:text-2xl text-red-500 mr-2" />
              </button>
            ) : (
              <button
                onClick={() => handleAddToWishlist(product?._id)}
                className="border-none cursor-pointer"
              >
                <IoMdHeartEmpty className="text-xl lg:text-2xl  mr-2" />
              </button>
            ))}

          <button
            onClick={() => handleAddToCart(product?._id)}
            className="border-none cursor-pointer"
          >
            <BsCart2 className="text-xl lg:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
