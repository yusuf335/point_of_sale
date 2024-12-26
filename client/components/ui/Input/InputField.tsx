import React from "react";
import classes from "./InputField.module.scss";

interface InputFieldProps {
  label: string;
  rightLabelLink?: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: boolean;
  icon?: React.ReactNode;
  helperText?: string;
  labelStyle?: string;
  inputStyle?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickRightlabel?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  rightLabelLink,

  name,
  type,
  placeholder,
  value,
  helperText,
  icon,
  error = false,
  labelStyle,
  inputStyle,
  onChange,
  onClickRightlabel,
}) => {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor={name} className={`${classes.inputLabel} ${labelStyle}`}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        className={`${classes.inputFeild} ${
          error ? classes.error : ""
        } ${inputStyle}`}
        value={value}
      />

      {/* Error Text */}
      {error && helperText && (
        <p className={classes.errorHelperText}>{helperText}</p>
      )}
      <div className={classes.icon}>{icon}</div>

      {rightLabelLink && (
        <label
          htmlFor={name}
          className={classes.rightLabel}
          onClick={onClickRightlabel}
        >
          {rightLabelLink}
        </label>
      )}
    </div>
  );
};

export default InputField;
