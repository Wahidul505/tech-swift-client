"use client";
import CustomTable from "@/components/Table/CustomTable";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import toast from "react-hot-toast";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { checkout } from "@/redux/slices/cartSlice";
import cartImg from "../../../resources/Add to Cart-amico.png";
import ErrorHeading from "@/components/Heading/ErrorHeading";

const columns = [
  { key: "image", label: "Image" },
  { key: "title", label: "Product Name" },
  { key: "model", label: "Model" },
  { key: "price", label: "Price" },
];

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const cartStringify = getFromLocalStorage("cart");
    if (cartStringify) {
      setCart(JSON.parse(cartStringify as string));
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    const total = cart?.reduce((sum: number, product: any) => {
      return sum + product?.product?.price * product?.quantity;
    }, 0);
    setSubTotal(total);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <ErrorHeading
        imgSrc={cartImg}
        label="Your Cart is empty"
        btnLabel="Back to Shop"
        btnHref="/shop"
      />
    );
  }

  const handleQuantity = (operation: string, currentProduct: any) => {
    setCart(
      cart?.map((product: any) => {
        if (product?.product?._id === currentProduct?.product?._id) {
          if (operation === "increase") {
            product.quantity = currentProduct?.quantity + 1;
          } else if (operation === "decrease" && currentProduct?.quantity > 1) {
            product.quantity = currentProduct?.quantity - 1;
          }
          return product;
        } else {
          return product;
        }
      }) as []
    );
  };

  const handleRemoveCartProduct = (currentProduct: any) => {
    const remainingCart = cart?.filter(
      (product: any) => product?.product?._id !== currentProduct?.product?._id
    );
    setCart(remainingCart);
    const localStorageCart = remainingCart?.map((product: any) => ({
      product: product?.product,
      quantity: 1,
    }));
    setToLocalStorage("cart", JSON.stringify(localStorageCart));
    toast("Removed");
  };

  const cartData = cart.map((product: any) => ({
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
    price: `$${Number(
      (product?.product?.price * product?.quantity).toFixed(2)
    )}`,
    actionButton: (
      <div className="flex">
        <div className="border border-gray-500 border-solid w-20 md:w-24 justify-center rounded overflow-hidden flex">
          <button
            onClick={() => handleQuantity("decrease", product)}
            className="border-none px-2 text flex items-center cursor-pointer"
          >
            <LuMinus />
          </button>
          <button className="border-x border-solid h-full w-fit px-2 border-y-0 text font-thin">
            {product?.quantity || 1}
          </button>
          <button
            onClick={() => handleQuantity("increase", product)}
            className="border-none px-2 text flex items-center cursor-pointer"
          >
            <LuPlus />
          </button>
        </div>
        <button
          onClick={() => handleRemoveCartProduct(product)}
          className="heading border-none bg-transparent flex items-center text-gray-800 ml-3 md:ml-4 lg:ml-6 cursor-pointer"
        >
          <FiTrash />
        </button>
      </div>
    ),
  }));

  return (
    <div>
      <CustomTable
        columns={columns}
        data={cartData}
        action={true}
        shadow={false}
      />
      <div className="my-3 md:my-8">
        <div className="primary-text text flex justify-end">
          <span className=" text-gray-800 mr-2 md:mr-5">Sub-Total: </span> $
          {subTotal.toFixed(2)}
        </div>
        <div className="primary-text text md:my-1 flex justify-end">
          <span className=" text-gray-800 mr-2 md:mr-5">Delivery: </span> $100
        </div>
        <div className="primary-text text flex justify-end">
          <span className=" text-gray-800 mr-2 md:mr-5">Total: </span> $
          {Number(subTotal.toFixed(2)) + 100}
        </div>
      </div>
      <div className="flex justify-between">
        <PrimaryButton
          onClick={() => router.back()}
          label="Continue Shopping"
          size="small"
        />
        <PrimaryButton
          onClick={() => {
            dispatch(checkout(cart));
            router.push("/checkout");
          }}
          label="Checkout"
          size="small"
        />
      </div>
    </div>
  );
};

export default CartPage;
