"use client";

import React from "react";
import "./IconButton.css";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  "aria-label": string;
  icon: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "ghost" | "outline" | "solid";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  isRound?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "md",
  variant = "ghost",
  colorScheme,
  isRound = false,
  isDisabled = false,
  className = "",
  style,
  ...props
}) => {
  const iconButtonClasses = [
    "ui-icon-button",
    `ui-icon-button--${size}`,
    `ui-icon-button--${variant}`,
    colorScheme && `ui-icon-button--${colorScheme}`,
    isRound && "ui-icon-button--round",
    isDisabled && "ui-icon-button--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={iconButtonClasses}
      disabled={isDisabled}
      style={style}
      {...props}
    >
      {icon}
    </button>
  );
};

