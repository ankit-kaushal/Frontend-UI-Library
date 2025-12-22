"use client";

import React, { useEffect, useRef } from "react";
import "./Modal.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  isCentered?: boolean;
}

export interface ModalOverlayProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  isCentered?: boolean;
}

export interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface ModalCloseButtonProps {
  onClose: () => void;
  className?: string;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`ui-modal-overlay ${className}`}
      onClick={onClick as any}
      aria-hidden="true"
    />
  );
};

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = "",
  size = "md",
  isCentered = true,
}) => {
  const contentClasses = [
    "ui-modal-content",
    `ui-modal-content--${size}`,
    isCentered && "ui-modal-content--centered",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={contentClasses}>{children}</div>;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-modal-header ${className}`}>{children}</div>;
};

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-modal-body ${className}`}>{children}</div>;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-modal-footer ${className}`}>{children}</div>;
};

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClose,
  className = "",
}) => {
  return (
    <button
      className={`ui-modal-close-button ${className}`}
      onClick={onClose}
      aria-label="Close modal"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  isCentered = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        onClose();
      }
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
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="ui-modal" ref={modalRef}>
      <ModalOverlay onClick={handleOverlayClick} />
      <ModalContent size={size} isCentered={isCentered}>
        {children}
      </ModalContent>
    </div>
  );
};
