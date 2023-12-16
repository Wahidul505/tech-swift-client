"use client";
import CategoryBar from "@/components/Navbar/CategoryBar";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";
import { customerItems } from "@/constants/linkItems";
import Sidebar from "@/components/Sidebar/Sidebar";
import { authKey } from "@/constants/authToken";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const CustomerLayout = ({ children }: IProps) => {
  const [loading, setLoading] = useState(true);
  const { userId, role } = getUserInfo() as { userId: string; role: string };
  const router = useRouter();

  useEffect(() => {
    if (!userId || role === "admin") {
      removeUserInfo(authKey);
      router.push("/login");
    }
    setLoading(false);
  }, [router, userId, role]);

  if (loading) return <LoadingPage />;
  return (
    <div className="">
      <CategoryBar />
      <div className="flex pt-14 md:pt-10 lg:pt-8">
        <Sidebar items={customerItems} />
        <div className="pt-8 w-full flex justify-center">{children}</div>
      </div>
    </div>
  );
};

export default CustomerLayout;
