import React from "react";

const Button = ({
  type = "button",
  color = "primary",
  className = "",
  onClick,
  style,
  children,
}) => {
  return (
    <button
      type={type}
      className={`btn-${color} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
