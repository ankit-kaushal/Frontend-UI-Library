"use client";

import React from "react";
import { useFormControlContext } from "../FormControl";
import "./Textarea.css";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "style"> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "unstyled";
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = ({
  size = "md",
  variant = "outline",
  isInvalid,
  isDisabled,
  isReadOnly,
  resize = "vertical",
  className = "",
  style,
  id,
  ...props
}) => {
  const formControl = useFormControlContext();
  const invalid = isInvalid ?? formControl.isInvalid ?? false;
  const disabled = isDisabled ?? formControl.isDisabled ?? false;
  const textareaId = id || formControl.id;

  const textareaClasses = [
    "ui-textarea",
    `ui-textarea--${size}`,
    `ui-textarea--${variant}`,
    `ui-textarea--resize-${resize}`,
    invalid && "ui-textarea--invalid",
    disabled && "ui-textarea--disabled",
    isReadOnly && "ui-textarea--readonly",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      id={textareaId}
      className={textareaClasses}
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

