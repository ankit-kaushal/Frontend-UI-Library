"use client";

import React from "react";
import { useFormControlContext } from "./FormControl";

export interface FormLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  htmlFor,
  className = "",
  style,
}) => {
  const { isRequired, id } = useFormControlContext();
  const labelId = id ? `${id}-label` : undefined;
  const labelFor = htmlFor || id;

  return (
    <label
      htmlFor={labelFor}
      id={labelId}
      className={`ui-form-label ${className}`}
      style={style}
    >
      {children}
      {isRequired && <span className="ui-form-label__required">*</span>}
    </label>
  );
};

