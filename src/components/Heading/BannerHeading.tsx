import React from "react";

const BannerHeading = ({
  label,
  subLabel,
  color,
  orientation,
}: {
  label: string;
  subLabel: string;
  color: string;
  orientation: "square" | "landscape";
}) => {
  return (
    <h1
      className={
        orientation === "landscape"
          ? "text-xl md:text-2xl lg:text-5xl"
          : "text-xl md:text-2xl lg:text-3xl"
      }
    >
      <span className={color}>{label}</span>{" "}
      <span className="base-text">{subLabel}</span>
    </h1>
  );
};

export default BannerHeading;
