import React from "react";

const DeleteButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl cursor-pointer text-[#f1faee] transition-colors duration-500 hover:bg-red-800  bg-red-700 border-none px-2 md:px-3 h-6 md:h-7 text-xs"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
