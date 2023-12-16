import React from "react";

const ViewButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl cursor-pointer text-[#f1faee] transition-colors duration-500 hover:bg-[#1d3557]  bg-[#457b9d] border-none px-2 md:px-3 h-6 md:h-7 text-xs"
    >
      View
    </button>
  );
};

export default ViewButton;
