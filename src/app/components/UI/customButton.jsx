import React from "react";

function CustomButton({ title, ...props }) {
  return <button {...props}>{title}</button>;
}

export default CustomButton;
