import CategoryBar from "@/components/Navbar/CategoryBar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type IProps = {
  children: React.ReactNode | React.ReactElement;
};

const PublicLayout = ({ children }: IProps) => {
  return (
    <div>
      <CategoryBar />
      <div>{children}</div>
    </div>
  );
};

export default PublicLayout;
