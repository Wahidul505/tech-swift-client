import React from "react";

const InformationCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="mb-2">
      <div className="primary-text info">{label}</div>
      <p className="info text-gray-800">{value}</p>
    </div>
  );
};

export default InformationCard;
