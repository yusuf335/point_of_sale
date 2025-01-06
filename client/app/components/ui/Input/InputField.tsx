import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  inputRef?: React.RefObject<HTMLInputElement | null>;
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
  autoFocus?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickRightlabel?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  inputRef,
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
  autoFocus = false,
  onBlur,
  onChange = () => {},
  onClickRightlabel,
}) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const ref = inputRef || internalRef;

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus, ref]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      const shouldRefocus = onBlur(event);
      if (shouldRefocus && ref.current) {
        ref.current.focus();
      }
    }
  };

  return (
    <div className={styles.inputContainer}>
      {/* Label */}
      <label htmlFor={name} className={clsx(styles.inputLabel, labelStyle)}>
        {label}
      </label>

      {/* Input Field Wrapper */}
      <div className={styles.inputWrapper}>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          required
          ref={ref}
          onChange={onChange}
          onBlur={handleBlur}
          className={clsx(
            styles.inputField,
            { [styles.error]: error },
            inputStyle
          )}
          value={value}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error && helperText ? `${name}-helper-text` : undefined
          }
        />
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>

      {/* Helper or Error Text */}
      {error && helperText && (
        <p id={`${name}-helper-text`} className={styles.errorHelperText}>
          {helperText}
        </p>
      )}

      {/* Right Label Link */}
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
