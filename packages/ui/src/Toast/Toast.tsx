"use client";

import React, { useEffect, useState } from "react";
import "./Toast.css";

export type ToastVariant = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  isClosable?: boolean;
  position?: ToastPosition;
  onClose?: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = "info",
  duration = 5000,
  isClosable = true,
  onClose,
  className = "",
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto-close after duration
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.(id);
    }, 300); // Match CSS transition duration
  };

  const toastClasses = [
    "ui-toast",
    `ui-toast--${variant}`,
    isVisible && !isExiting ? "ui-toast--visible" : "",
    isExiting ? "ui-toast--exiting" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={toastClasses} style={style}>
      <div className="ui-toast__content">
        {title && <div className="ui-toast__title">{title}</div>}
        {description && (
          <div className="ui-toast__description">{description}</div>
        )}
      </div>
      {isClosable && (
        <button
          className="ui-toast__close"
          onClick={handleClose}
          aria-label="Close toast"
        >
          ×
        </button>
      )}
    </div>
  );
};

export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: ToastPosition;
  onClose: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = "top-right",
  onClose,
  className = "",
  style,
}) => {
  const containerClasses = [
    "ui-toast-container",
    `ui-toast-container--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses} style={style}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

