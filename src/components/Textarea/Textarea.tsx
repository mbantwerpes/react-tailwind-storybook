import React, { useState } from "react";

interface TextareaProps {
  placeholder?: string;
  size: "small" | "medium" | "large";
}

export const Textarea = ({ placeholder, size }: TextareaProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <textarea
      className={`border border-inputBorder rounded-md ${handleSizeClasses(
        size
      )} block resize-none`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
