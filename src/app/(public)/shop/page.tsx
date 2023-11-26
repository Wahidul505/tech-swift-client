"use client";
import LoadingPage from "@/app/loading";
import ProductCard from "@/components/Card/ProductCard";
import { useProductsQuery } from "@/redux/api/productApi";
import React from "react";

const ShopPage = () => {
  const { data, isLoading } = useProductsQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;
  return (
    <div>
      <div className="flex justify-center flex-wrap w-full">
        {data &&
          data?.map((product: any) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
