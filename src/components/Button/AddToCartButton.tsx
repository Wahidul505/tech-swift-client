import { getUserInfo } from "@/services/auth.service";
import React from "react";
import toast from "react-hot-toast";
import { BsCart2 } from "react-icons/bs";

const AddToCartButton = ({ product }: { product: any }) => {
  const { role } = getUserInfo() as { role: string };
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
  return (
    <button
      onClick={() => handleAddToCart(product?._id)}
      className={`border-none cursor-pointer bg-transparent ${
        role === "admin" && "hidden"
      }`}
    >
      <BsCart2 className="text-xl md:text-2xl lg:text-3xl text-gray-800" />
    </button>
  );
};

export default AddToCartButton;
