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
    <h1 className="heading mb-3 md:mb-6 lg:mb-8">
      <span className={theme === "light" ? "primary-text" : "secondary-text"}>
        {label}
      </span>{" "}
      <span className={theme === "light" ? "secondary-text" : "base-text"}>
        {subLabel}
      </span>
    </h1>
  );
};

export default Heading;
