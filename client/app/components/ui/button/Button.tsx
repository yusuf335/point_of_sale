import React from "react";
import classes from "./Button.module.scss";

// Define the props interface for the Button component
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
  icon?: React.ReactNode; // Optional icon element to be displayed with the label
  iconPosition?: "front" | "back"; // Position of the icon relative to the label (default: "front")
}

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({
  label, // Required label for the button
  onClick, // Optional click event handler
  type = "button", // Default type is "button"
  variant = "primary", // Default style variant is "primary"
  size = "small", // Default size is "small"
  fill = "solid", // Default fill style is "solid"
  disabled = false, // Default: button is enabled
  name, // Optional name attribute
  value, // Optional value attribute
  icon, // Optional icon element
  iconPosition = "front", // Default icon position is "front"
}) => {
  return (
    <button
      // Dynamically construct class names based on props
      className={`${classes.btn} ${classes[`btn_${variant}`]} ${
        classes[`btn_${size}`]
      } ${classes[`btn_${fill}`]}`}
      type={type} // Button type attribute
      onClick={onClick} // Event handler for clicks
      disabled={disabled} // Disable button if true
      name={name} // Button name attribute
      value={value} // Button value attribute
    >
      {/* Render the icon before the label if iconPosition is "front" */}
      {icon && iconPosition === "front" && (
        <span className={classes.icon}>{icon}</span>
      )}
      {/* Render the button label */}
      {label}
      {/* Render the icon after the label if iconPosition is "back" */}
      {icon && iconPosition === "back" && (
        <span className={classes.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
