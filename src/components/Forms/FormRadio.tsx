import React from "react";

const FormRadio = ({
  value,
  label,
  handler,
}: {
  value: string;
  label: string;
  handler: any;
}) => {
  return (
    <div className="form-control">
      <label onClick={() => handler(value)} className="label cursor-pointer">
        <span className="label-text text-gray-800 info">{label}</span>
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-gray-700 border border-solid border-gray-300"
        />
      </label>
    </div>
  );
};

export default FormRadio;
