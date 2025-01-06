import React from "react";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface ButtonProps {
  label: string; // The text displayed on the button
  onClick?: () => void; // Optional click event handler
  type?: "button" | "submit" | "reset"; // Button type (default: "button")
  variant?: "primary" | "secondary" | "danger" | "success"; // Button style variant
  size?: "small" | "medium" | "large"; // Button size (default: "small")
  fill?: "solid" | "outline"; // Button fill style (default: "solid")
  disabled?: boolean; // If true, disables the button
  name?: string; // Optional name attribute for the button
  value?: string; // Optional value attribute for the button
  icon?: React.ReactNode; // Optional icon element
  iconPosition?: "front" | "back"; // Position of the icon relative to the label (default: "front")
  ariaLabel?: string; // Accessibility label
  btnStyle?: string; // Custom styles for the button
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "small",
  fill = "solid",
  disabled = false,
  name,
  value,
  icon,
  iconPosition = "front",
  ariaLabel,
  btnStyle,
}) => {
  return (
    <button
      className={clsx(
        classes.btn,
        classes[`btn_${variant}`],
        classes[`btn_${size}`],
        classes[`btn_${fill}`],
        btnStyle
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={name}
      value={value}
      aria-label={ariaLabel || label} // Ensure accessibility
      aria-disabled={disabled} // Accessibility attribute
    >
      {icon && iconPosition === "front" && (
        <span className={classes.icon}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === "back" && (
        <span className={classes.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
