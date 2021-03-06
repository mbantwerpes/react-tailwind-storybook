import React, { useState } from "react";

interface InputProps {
  placeholder?: string;
  type: string;
  size: "small" | "medium" | "large";
}

export const Input = ({ placeholder, type, size }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "p-2";
      case "medium":
        return "pl-2 pr-2 pt-3 pb-3";
      case "large":
        return "pl-2 pr-2 pt-4 pb-4";
      default:
        break;
    }
  };

  return (
    <input
      className={`border border-inputBorder rounded-md ${handleSizeClasses(
        size
      )} block`}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};
