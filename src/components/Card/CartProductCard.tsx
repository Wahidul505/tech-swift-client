"use client";
import LoadingPage from "@/app/loading";
import { useSingleProductQuery } from "@/redux/api/productApi";
import React from "react";

const CartProductCard = ({ product }: { product: any }) => {
  const { data, isLoading } = useSingleProductQuery(product?.product);

  if (isLoading) return <LoadingPage />;
  console.log(data);
  return <div>sadf</div>;
};

export default CartProductCard;
