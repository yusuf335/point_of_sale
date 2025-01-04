import React, { useRef } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  ref?: React.RefObject<HTMLInputElement>;
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
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickRightlabel?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  ref,
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
  onBlur,
  onChange,
  onClickRightlabel,
}) => {
  const inputRef = ref || useRef<HTMLInputElement>(null);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      const shouldRefocus = onBlur(event); // Call the provided onBlur handler
      if (shouldRefocus && inputRef.current) {
        inputRef.current.focus(); // Refocus the input if necessary
      }
    }
  };

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
        ref={inputRef}
        onChange={onChange}
        onBlur={handleBlur}
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
