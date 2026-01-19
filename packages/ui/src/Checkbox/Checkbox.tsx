import React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  onChange?: (checked: boolean, value: string) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
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
  const checkboxId = id || `${name}-${value}`;

  const checkboxClasses = [
    "ui-checkbox",
    `ui-checkbox--${size}`,
    `ui-checkbox--${colorScheme}`,
    disabled && "ui-checkbox--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked, event.target.value);
    }
  };

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="ui-checkbox__input"
      />
      <span className="ui-checkbox__checkmark"></span>
      {(label || description) && (
        <div className="ui-checkbox__content">
          {label && <span className="ui-checkbox__label">{label}</span>}
          {description && (
            <span className="ui-checkbox__description">{description}</span>
          )}
        </div>
      )}
    </label>
  );
};

export interface CheckboxGroupProps {
  name: string;
  value?: string[];
  options: Array<{
    value: string;
    label?: string;
    description?: string;
    disabled?: boolean;
  }>;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  onChange?: (values: string[]) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  value = [],
  options,
  disabled = false,
  size = "md",
  colorScheme = "blue",
  onChange,
  className = "",
  orientation = "vertical",
}) => {
  const groupClasses = [
    "ui-checkbox-group",
    `ui-checkbox-group--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (checked: boolean, optionValue: string) => {
    if (!onChange) return;

    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className={groupClasses}>
      {options.map((option, index) => (
        <Checkbox
          key={`${name}-${option.value}-${index}`}
          name={name}
          value={option.value}
          checked={value.includes(option.value)}
          disabled={disabled || option.disabled}
          label={option.label}
          description={option.description}
          size={size}
          colorScheme={colorScheme}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
