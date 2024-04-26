import React from "react";

const Input = ({
  type = "text",
  name,
  className,
  label,
  onChange,
  value,
  placeholder,
  required = false,
}) => {
  return (
    <div className="relative z-0 w-full mt-3 group">
       <label
        htmlFor={name}
        className=" text-secondary-blue font-medium"
      >
        {label}
      <input
        type={type}
        name={name}
        id={name}
        className={` mt-2 block py-3 px-3 w-full rounded-lg text-sm text-black bg-secondary-lightblue border-[1px] border-outline-gray placeholder:text-text-placeholder focus:outline-outline-gray    ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
     
      </label>
    </div>
  );
};

export default Input;
