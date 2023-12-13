"use client";
import CategoryBar from "@/components/Navbar/CategoryBar";
import Navbar from "@/components/Navbar/Navbar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const PrivateLayout = ({ children }: IProps) => {
  const [loading, setLoading] = useState(true);
  const { userId, role } = getUserInfo() as { userId: string; role: string };
  const router = useRouter();

  useEffect(() => {
    (!userId || role === "admin") && router.push("/login");
    setLoading(false);
  }, [router, userId, role]);

  if (loading) return <LoadingPage />;
  return (
    <div className="">
      <CategoryBar />
      <div className="pt-24 md:pt-16">{children}</div>
    </div>
  );
};

export default PrivateLayout;
