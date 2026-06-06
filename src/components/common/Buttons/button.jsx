import React from "react";

const variants = {
  primary: "bg-[#99B81B] border border-[#99B81B] text-black hover:opacity-90",
  secondary: "bg-black text-white hover:bg-black/90",
  outline: "border border-white text-white hover:bg-white hover:text-black",
  ghost: "text-white hover:bg-white/10 border border-[#99B81B]",
  transparent:
    "bg-transparent text-white border border-white/20 backdrop-blur-sm hover:bg-white/10",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-full font-medium transition-all duration-300
        disabled:pointer-events-none disabled:opacity-50 cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
