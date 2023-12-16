"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Image from "next/image";
import React from "react";
import orderImg from "../../../resources/Empty-pana.png";
import CustomTable from "@/components/Table/CustomTable";
import EditButton from "@/components/Button/EditButton";

const columns = [
  { key: "image", label: "Category Image" },
  { key: "title", label: "Category Title" },
];

const ManageCategoryPage = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 }) as {
    data: any;
    isLoading: any;
  };

  const categories = data?.map((category: any) => ({
    image: (
      <Image
        src={category?.image}
        alt=""
        width={500}
        height={500}
        className="w-12 h-8 md:w-14 md:h-10  lg:w-20 lg:h-16 rounded-2xl overflow-hidden"
      />
    ),
    title: category?.title,
    actionButton: (
      <EditButton href={`/admin/manage-category/update/${category?._id}`} />
    ),
  }));

  if (isLoading) return <LoadingPage />;
  if (!data || data?.length < 1) {
    return (
      <ErrorHeading
        imgSrc={orderImg}
        label="Category is empty"
        btnLabel="Back to Account"
        btnHref="/admin/account"
      />
    );
  }

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={categories}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default ManageCategoryPage;
