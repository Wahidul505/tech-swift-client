import React from "react";

const Heading = ({
  label,
  theme = "light",
  center = true,
  bg,
  color,
}: {
  label: string;
  theme?: "dark" | "light";
  center?: boolean;
  bg?: string;
  color?: string;
}) => {
  return (
    <div className="mb-4 md:mb-7 lg:mb-10 flex flex-col ">
      <div
        className={`text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 font-thin ${
          center ? "text-center" : "text-start"
        } ${color ? color : "secondary-text"}`}
      >
        {label}
      </div>
      <div
        className={`h-1 w-32 md:w-52 lg:w-64 xl:w-72 rounded-2xl ${
          center ? "mx-auto" : "mx-0"
        } ${bg ? bg : "primary-bg"}`}
      ></div>
    </div>
  );
};

export default Heading;
