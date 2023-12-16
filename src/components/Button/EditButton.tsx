import Link from "next/link";
import React from "react";

const EditButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="rounded-xl cursor-pointer text-gray-800 transition-colors duration-500 hover:bg-gray-400  bg-gray-300 border-none px-2 md:px-3 h-6 md:h-7 text-xs no-underline flex items-center hover:text-gray-800 w-fit"
    >
      Edit
    </Link>
  );
};

export default EditButton;
