import React from "react";
import "./Button.css";

function Button({ label, type, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
}

export default Button;
