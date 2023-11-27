import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="mb-3 md:mb-8">
      <button
        onClick={() => router.back()}
        className="border-none bg-transparent text primary-text flex items-center cursor-pointer"
      >
        <IoMdArrowBack className="heading mr-2" /> Back
      </button>
    </div>
  );
};

export default BackButton;
