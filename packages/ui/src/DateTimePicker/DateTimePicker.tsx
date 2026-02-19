"use client";

import React from "react";
import "./DateTimePicker.css";

export type DateTimePickerMode = "date" | "time" | "datetime";
export type DateTimePickerSize = "sm" | "md" | "lg";

export interface DateTimePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
  mode?: DateTimePickerMode;
  size?: DateTimePickerSize;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  className?: string;
}

const getInputType = (mode: DateTimePickerMode): string => {
  switch (mode) {
    case "date":
      return "date";
    case "time":
      return "time";
    case "datetime":
      return "datetime-local";
    default:
      return "date";
  }
};

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  mode = "date",
  size = "md",
  value,
  defaultValue,
  onChange,
  min,
  max,
  disabled = false,
  className = "",
  id,
  ...props
}) => {
  const inputType = getInputType(mode);
  const inputId = id || `ui-datetime-${React.useId()}`;

  const classes = [
    "ui-datetime-picker",
    `ui-datetime-picker--${mode}`,
    `ui-datetime-picker--${size}`,
    disabled && "ui-datetime-picker--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classes}>
      <input
        id={inputId}
        type={inputType}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        min={min}
        max={max}
        disabled={disabled}
        className="ui-datetime-picker__input"
        {...props}
      />
    </div>
  );
};
