import React from "react";
import "./Button.css";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "xs" | "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  colorScheme = "",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  className = "",
  style,
  ...props
}) => {
  const buttonClasses = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    `ui-button--${colorScheme}`,
    loading && "ui-button--loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || loading;

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {loading && (
        <svg className="ui-button__spinner" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
          >
            <animate
              attributeName="stroke-dasharray"
              dur="2s"
              values="0 31.416;15.708 15.708;0 31.416"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              dur="2s"
              values="0;-15.708;-31.416"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      )}
      {!loading && leftIcon && (
        <span className="ui-button__left-icon">{leftIcon}</span>
      )}
      <span className="ui-button__content">{children}</span>
      {!loading && rightIcon && (
        <span className="ui-button__right-icon">{rightIcon}</span>
      )}
    </button>
  );
};
