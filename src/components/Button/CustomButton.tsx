import React from "react";

const CustomButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl cursor-pointer text-gray-800 transition-colors duration-500 hover:bg-gray-400  bg-gray-300 border-none px-2 md:px-3 h-6 md:h-7 text-xs"
    >
      {label}
    </button>
  );
};

export default CustomButton;
