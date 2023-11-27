import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const GoToCartButton = () => {
  return (
    <Link
      href={"/cart"}
      className="fixed bottom-4 right-4 p-2 md:p-3 border border-solid rounded-2xl border-[#457b9d] primary-text text-2xl md:text-4xl"
    >
      <BsCart2 />
    </Link>
  );
};

export default GoToCartButton;
