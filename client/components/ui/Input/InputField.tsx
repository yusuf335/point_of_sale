import React from "react";
import styles from "./InputField.module.scss";

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
  autofocus?: boolean;
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
  autofocus = false,
  onChange,
  onClickRightlabel,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={`${styles.inputLabel} ${labelStyle}`}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        required
        autoFocus={autofocus}
        onChange={onChange}
        className={`${styles.inputFeild} ${
          error ? styles.error : ""
        } ${inputStyle}`}
        value={value}
      />

      {/* Error Text */}
      {error && helperText && (
        <p className={styles.errorHelperText}>{helperText}</p>
      )}
      <div className={styles.icon}>{icon}</div>

      {rightLabelLink && (
        <label
          htmlFor={name}
          className={styles.rightLabel}
          onClick={onClickRightlabel}
        >
          {rightLabelLink}
        </label>
      )}
    </div>
  );
};

export default InputField;
