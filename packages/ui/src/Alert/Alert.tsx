"use client";

import React from "react";
import "./Alert.css";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  variant?: AlertVariant;
  title?: string;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  onClose,
  className = "",
  style,
  ...props
}) => {
  const classes = [
    "ui-alert",
    `ui-alert--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={style}
      role="alert"
      {...props}
    >
      <div className="ui-alert__content">
        {title && <div className="ui-alert__title">{title}</div>}
        <div className="ui-alert__message">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="ui-alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
