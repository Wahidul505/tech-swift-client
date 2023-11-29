import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const GoToCartButton = () => {
  return (
    <Link
      href={"/cart"}
      className="fixed bottom-3 right-3 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 px-2 py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 rounded-2xl  primary-bg text-white text-3xl md:text-4xl z-50"
    >
      <BsCart2 />
    </Link>
  );
};

export default GoToCartButton;
