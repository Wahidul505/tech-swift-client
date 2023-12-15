"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Image from "next/image";
import React from "react";
import orderImg from "../../../resources/Empty-pana.png";
import CustomTable from "@/components/Table/CustomTable";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";

const columns = [
  { key: "image", label: "Category Image" },
  { key: "title", label: "Category Title" },
];

const ManageCategoryPage = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 });

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
      <Link
        href={`/admin/manage-category/update/${category?._id}`}
        className="no-underline text-gray-800 heading text flex items-center"
      >
        <FiEdit3 />
      </Link>
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
