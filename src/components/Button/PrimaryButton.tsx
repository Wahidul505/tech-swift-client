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
          ? "px-3 md:px-5 lg:px-8 h-8 md:h-10 lg:h-12 text"
          : "px-2 md:px-3 lg:px-5 h-7 md:h-8 lg:h-10 info"
      }`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
