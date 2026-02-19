"use client";

import React from "react";
import "./Switch.css";

export type SwitchSize = "sm" | "md" | "lg";
export type SwitchLabelPosition = "left" | "right";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  /** Label on the left of the switch */
  leftLabel?: string;
  /** Label on the right of the switch */
  rightLabel?: string;
  /** Single label (use with labelPosition); ignored when leftLabel/rightLabel are set */
  label?: string;
  /** When using label, put it on "left" or "right" */
  labelPosition?: SwitchLabelPosition;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  leftLabel,
  rightLabel,
  label,
  labelPosition = "right",
  className = "",
  id,
  ...props
}) => {
  const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolledChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  const switchId = id || `ui-switch-${React.useId()}`;
  const classes = [
    "ui-switch",
    `ui-switch--${size}`,
    disabled && "ui-switch--disabled",
    isChecked && "ui-switch--checked",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const resolvedLeft = leftLabel ?? (label && labelPosition === "left" ? label : undefined);
  const resolvedRight = rightLabel ?? (label && labelPosition === "right" ? label : undefined);
  const ariaLabel = [resolvedLeft, resolvedRight].filter(Boolean).join(" ") || undefined;

  const trackAndThumb = (
    <>
      <input
        type="checkbox"
        id={switchId}
        role="switch"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="ui-switch__input"
        aria-checked={isChecked}
        aria-label={ariaLabel}
        {...props}
      />
      <span className="ui-switch__track">
        <span className="ui-switch__thumb" />
      </span>
    </>
  );

  return (
    <label className={classes} htmlFor={switchId}>
      {resolvedLeft != null && <span className="ui-switch__label">{resolvedLeft}</span>}
      {trackAndThumb}
      {resolvedRight != null && <span className="ui-switch__label">{resolvedRight}</span>}
    </label>
  );
};
