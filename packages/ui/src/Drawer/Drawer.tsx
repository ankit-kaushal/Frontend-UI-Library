"use client";

import React, { useEffect, useRef } from "react";
import "./Drawer.css";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  placement?: DrawerPlacement;
  size?: "sm" | "md" | "lg" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  /** Higher level for nested drawers */
  level?: number;
  className?: string;
}

export interface DrawerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerCloseButtonProps {
  onClose: () => void;
  className?: string;
}

export const DrawerCloseButton: React.FC<DrawerCloseButtonProps> = ({
  onClose,
  className = "",
}) => (
  <button
    type="button"
    className={`ui-drawer__close ${className}`}
    onClick={onClose}
    aria-label="Close drawer"
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
  className = "",
}) => <div className={`ui-drawer__header ${className}`}>{children}</div>;

export const DrawerBody: React.FC<DrawerBodyProps> = ({
  children,
  className = "",
}) => <div className={`ui-drawer__body ${className}`}>{children}</div>;

export const DrawerFooter: React.FC<DrawerFooterProps> = ({
  children,
  className = "",
}) => <div className={`ui-drawer__footer ${className}`}>{children}</div>;

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  placement = "right",
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  level = 0,
  className = "",
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const zIndex = 1000 + level * 10;

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
  };

  const contentClasses = [
    "ui-drawer__content",
    `ui-drawer__content--${placement}`,
    `ui-drawer__content--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="ui-drawer"
      ref={drawerRef}
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="ui-drawer__overlay"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />
      <div className={contentClasses}>{children}</div>
    </div>
  );
};
