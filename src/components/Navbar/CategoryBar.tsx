"use client";
import LoadingPage from "@/app/loading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Link from "next/link";
import React from "react";

const CategoryBar = () => {
  const { data, isLoading } = useCategoriesQuery(undefined);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="flex flex-wrap justify-center shadow bg-white absolute top-20 right-0 left-0 pb-1 pt-2 md:pb-3 md:pt-4">
      {data?.length > 0 &&
        data?.map((category: any) => (
          <div
            key={category?._id}
            className="mx-3 my-1 md:my-0 md:mx-4 lg:mx-5 info"
          >
            <Link href={"/"} className="uppercase no-underline primary-text">
              {category?.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CategoryBar;
