"use client";
import CategoryBar from "@/components/Navbar/CategoryBar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";
import { adminItems } from "@/constants/linkItems";
import Sidebar from "@/components/Sidebar/Sidebar";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const AdminLayout = ({ children }: IProps) => {
  const [loading, setLoading] = useState(true);
  const { userId, role } = getUserInfo() as { userId: string; role: string };
  const router = useRouter();

  useEffect(() => {
    (!userId || role !== "admin") && router.push("/");
    setLoading(false);
  }, [router, userId, role]);

  if (loading) return <LoadingPage />;
  return (
    <div className="">
      <CategoryBar />
      <div className="flex">
        <Sidebar items={adminItems} />
        <div className="pt-24 md:pt-20 lg:pt-16 lg:px-8 w-full flex justify-center ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
