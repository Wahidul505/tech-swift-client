import React from "react";

const Heading = ({
  label,
  subLabel,
  theme = "light",
}: {
  label: string;
  subLabel: string;
  theme?: "dark" | "light";
}) => {
  return (
    <h1 className="heading mb-3 lg:mb-5">
      <span className={theme === "light" ? "primary-text" : "secondary-text"}>
        {label}
      </span>{" "}
      <span className={theme === "light" ? "text-gray-800" : "base-text"}>
        {subLabel}
      </span>
    </h1>
  );
};

export default Heading;
