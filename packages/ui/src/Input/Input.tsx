"use client";

import React from "react";
import { useFormControlContext } from "../FormControl";
import "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "style"> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "unstyled";
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  size = "md",
  variant = "outline",
  isInvalid,
  isDisabled,
  isReadOnly,
  className = "",
  style,
  id,
  ...props
}) => {
  const formControl = useFormControlContext();
  const invalid = isInvalid ?? formControl.isInvalid ?? false;
  const disabled = isDisabled ?? formControl.isDisabled ?? false;
  const inputId = id || formControl.id;

  const inputClasses = [
    "ui-input",
    `ui-input--${size}`,
    `ui-input--${variant}`,
    invalid && "ui-input--invalid",
    disabled && "ui-input--disabled",
    isReadOnly && "ui-input--readonly",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      id={inputId}
      className={inputClasses}
      disabled={disabled}
      readOnly={isReadOnly}
      aria-invalid={invalid}
      aria-describedby={
        invalid && formControl.id ? `${formControl.id}-error` : undefined
      }
      style={style}
      {...props}
    />
  );
};

