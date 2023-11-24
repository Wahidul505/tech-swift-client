import React from "react";

const BannerHeading = ({
  label,
  subLabel,
  color,
}: {
  label: string;
  subLabel: string;
  color: string;
}) => {
  return (
    <h1 className="text-xl md:text-2xl lg:text-4xl mb-3 lg:mb-5">
      <span className={color}>{label}</span>{" "}
      <span className="base-text">{subLabel}</span>
    </h1>
  );
};

export default BannerHeading;
