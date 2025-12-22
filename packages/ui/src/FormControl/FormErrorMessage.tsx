"use client";

import React from "react";
import { useFormControlContext } from "./FormControl";

export interface FormErrorMessageProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  children,
  className = "",
  style,
}) => {
  const { isInvalid, id } = useFormControlContext();
  const errorId = id ? `${id}-error` : undefined;

  if (!isInvalid) return null;

  return (
    <div
      id={errorId}
      className={`ui-form-error-message ${className}`}
      role="alert"
      style={style}
    >
      {children}
    </div>
  );
};

