import React, { useState } from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
}) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    if (required && !value.trim()) {
      setError(`${label || "This field"} is required`);
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-lg outline-none transition duration-200
            ${error ? "border-red-500 focus:ring-2 focus:ring-red-300" : "border-gray-300 focus:ring-2 focus:ring-blue-300"}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            ${className}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-sm text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;