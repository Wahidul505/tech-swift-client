"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import Image from "next/image";
import React from "react";
import orderImg from "../../../resources/Empty-pana.png";
import CustomTable from "@/components/Table/CustomTable";
import { useProductsQuery } from "@/redux/api/productApi";
import DeleteButton from "@/components/Button/DeleteButton";
import EditButton from "@/components/Button/EditButton";
import ViewButton from "@/components/Button/ViewButton";

const columns = [
  { key: "image", label: "Image" },
  { key: "title", label: "Title" },
  { key: "price", label: "Price" },
  { key: "category", label: "Category" },
];

const ManageProductPage = () => {
  const { data, isLoading } = useProductsQuery({ limit: 10000 });

  const products = data?.map((product: any) => ({
    image: (
      <Image
        src={product?.image}
        alt=""
        width={500}
        height={500}
        className="w-10 h-8 md:w-12 md:h-10  lg:w-16 lg:h-14 rounded-2xl overflow-hidden"
      />
    ),
    title: product?.title,
    price: product?.price,
    category: product?.category?.title,
    actionButton: (
      <div className="flex items-center space-x-4">
        <ViewButton />
        <EditButton href={`/admin/manage-product/update/${product?._id}`} />
        <DeleteButton />
      </div>
    ),
  }));

  if (isLoading) return <LoadingPage />;
  if (!data || data?.length < 1) {
    return (
      <ErrorHeading
        imgSrc={orderImg}
        label="Product is empty"
        btnLabel="Back to Account"
        btnHref="/admin/account"
      />
    );
  }

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={products}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default ManageProductPage;
