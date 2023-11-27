import React from "react";

const PrimaryButton = ({
  label,
  type = "button",
  size = "big",
  onClick,
}: {
  label: string;
  type?: "submit" | "button";
  size?: "big" | "small";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-xl cursor-pointer text-[#f1faee] transition-colors duration-500 hover:bg-[#1d3557]  bg-[#457b9d] border-none ${
        size === "big"
          ? "px-4 md:px-6 lg:px-8 h-12 text-lg lg:text-xl"
          : "px-3 md:px-4 lg:px-5 h-10 text-base lg:text-lg"
      }`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
