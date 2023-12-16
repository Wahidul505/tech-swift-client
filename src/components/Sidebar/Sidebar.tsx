import { IItems } from "@/types/common";
import Link from "next/link";
import React from "react";

const Sidebar = ({ items }: { items: IItems[] }) => {
  return (
    <div className="lg:w-64 xl:w-72 h-screen lg:flex flex-col pt-8 hidden">
      {items?.map((item: any) => (
        <Link
          key={item?.id}
          href={item?.href}
          className="mb-3 no-underline primary-text text"
        >
          {item?.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
