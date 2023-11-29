import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
}

const FormInput = ({
  name,
  type,
  value = "",
  placeholder,
  label,
  disabled = false,
  defaultValue = "",
}: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(name, errors);

  return (
    <div className="mb-5">
      {label && (
        <div className="mb-1 info primary-text"> {label ? label : ""}</div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            value={value ? value : field?.value}
            disabled={disabled}
            defaultValue={defaultValue}
            className="input focus:outline-none md:text-lg w-full bg-transparent border border-solid border-[#1d3557] box-border text-gray-800 rounded-2xl info "
          />
        )}
      />
      {errorMessage && (
        <div className="text-red-500 mt-1 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};

export default FormInput;
