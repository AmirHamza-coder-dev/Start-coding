import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
}) => {
  const baseStyle =
    "rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer px-6 py-3";

  const variants = {
    primary:
      "bg-[#0198E9] text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${(disabled || loading) ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;