import React from "react";

const CardHeading = ({ serial, label }: { serial: number; label: string }) => {
  return (
    <div className="flex mb-3 md:mb-5 border-b border-gray-300 pb-2 border-solid border-t-0 border-r-0 border-l-0">
      <div className="rounded-full h-5 w-5 md:h-7 md:w-7 primary-bg text-white flex justify-center items-center info font-semibold">
        {serial}
      </div>
      <div className="primary-text text ml-2 md:ml-4">{label} </div>
    </div>
  );
};

export default CardHeading;
