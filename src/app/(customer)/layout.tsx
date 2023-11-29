"use client";
import CategoryBar from "@/components/Navbar/CategoryBar";
import Navbar from "@/components/Navbar/Navbar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";
import Link from "next/link";
import { customerItems } from "@/constants/linkItems";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const CustomerLayout = ({ children }: IProps) => {
  const [loading, setLoading] = useState(true);
  const { userId } = getUserInfo() as { userId: string };
  const router = useRouter();

  useEffect(() => {
    !userId && router.push("/login");
    setLoading(false);
  }, [router, userId]);

  if (loading) return <LoadingPage />;
  return (
    <div className="">
      <CategoryBar />
      <div className="flex">
        <div className="lg:w-64 xl:w-72 h-screen lg:flex flex-col pt-16 hidden">
          {customerItems?.map((item: any) => (
            <Link
              key={item?.id}
              href={item?.href}
              className="mb-3 no-underline primary-text text"
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <div className="pt-24 md:pt-20 lg:pt-16 lg:px-8 w-full flex justify-center ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
