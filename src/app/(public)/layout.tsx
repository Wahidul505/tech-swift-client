import GoToCartButton from "@/components/Button/GoToCartButton";
import CategoryBar from "@/components/Navbar/CategoryBar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const PublicLayout = ({ children }: IProps) => {
  return (
    <div className="">
      <CategoryBar />
      <div className="pt-24 md:pt-16">{children}</div>
      <GoToCartButton />
    </div>
  );
};

export default PublicLayout;
