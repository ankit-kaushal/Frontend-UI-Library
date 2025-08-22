import React from "react";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}) => {
  const buttonClasses = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
