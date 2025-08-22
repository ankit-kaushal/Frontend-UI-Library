import React from "react";
import "./Radio.css";

export interface RadioProps {
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  onChange?: (value: string) => void;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked = false,
  disabled = false,
  label,
  description,
  size = "md",
  colorScheme = "blue",
  onChange,
  className = "",
}) => {
  const radioId = id || `${name}-${value}`;

  const radioClasses = [
    "ui-radio",
    `ui-radio--${size}`,
    `ui-radio--${colorScheme}`,
    disabled && "ui-radio--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <label className={radioClasses}>
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="ui-radio__input"
      />
      <span className="ui-radio__checkmark"></span>
      {(label || description) && (
        <div className="ui-radio__content">
          {label && <span className="ui-radio__label">{label}</span>}
          {description && (
            <span className="ui-radio__description">{description}</span>
          )}
        </div>
      )}
    </label>
  );
};

export interface RadioGroupProps {
  name: string;
  value?: string;
  options: Array<{
    value: string;
    label?: string;
    description?: string;
    disabled?: boolean;
  }>;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  onChange?: (value: string) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  options,
  disabled = false,
  size = "md",
  colorScheme = "blue",
  onChange,
  className = "",
  orientation = "vertical",
}) => {
  const groupClasses = [
    "ui-radio-group",
    `ui-radio-group--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={groupClasses}>
      {options.map((option, index) => (
        <Radio
          key={`${name}-${option.value}-${index}`}
          name={name}
          value={option.value}
          checked={value === option.value}
          disabled={disabled || option.disabled}
          label={option.label}
          description={option.description}
          size={size}
          colorScheme={colorScheme}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
