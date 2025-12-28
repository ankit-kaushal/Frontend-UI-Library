"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Popover.css";

export type PopoverPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

export interface PopoverProps {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: PopoverPlacement;
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  trigger?: "click" | "hover";
  closeOnBlur?: boolean;
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverCloseButtonProps {
  onClose?: () => void;
  className?: string;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-popover__content ${className}`}>{children}</div>;
};

export const PopoverHeader: React.FC<PopoverHeaderProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-popover__header ${className}`}>{children}</div>;
};

export const PopoverBody: React.FC<PopoverBodyProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-popover__body ${className}`}>{children}</div>;
};

export const PopoverFooter: React.FC<PopoverFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`ui-popover__footer ${className}`}>{children}</div>;
};

export const PopoverCloseButton: React.FC<PopoverCloseButtonProps> = ({
  onClose,
  className = "",
}) => {
  return (
    <button
      className={`ui-popover__close ${className}`}
      onClick={onClose}
      aria-label="Close popover"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  placement = "bottom",
  isOpen: controlledIsOpen,
  defaultIsOpen = false,
  onOpenChange,
  trigger = "click",
  closeOnBlur = true,
  showArrow = true,
  className = "",
  style,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultIsOpen);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setInternalIsOpen(open);
      }
      onOpenChange?.(open);
    },
    [isControlled, onOpenChange]
  );

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !closeOnBlur) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Check if refs are available
      if (!popoverRef.current || !triggerRef.current) {
        return;
      }

      // Check if click is inside popover or trigger
      const clickedInsidePopover = popoverRef.current.contains(target);
      const clickedInsideTrigger = triggerRef.current.contains(target);

      // Close if clicked outside both
      if (!clickedInsidePopover && !clickedInsideTrigger) {
        handleOpenChange(false);
      }
    };

    // Use click event in bubble phase (not capture) so button clicks fire first
    document.addEventListener("click", handleClickOutside, false);
    document.addEventListener("touchend", handleClickOutside, false);

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
      document.removeEventListener("touchend", handleClickOutside, false);
    };
  }, [isOpen, closeOnBlur, handleOpenChange]);

  // Handle click
  const handleClick = () => {
    if (trigger === "click") {
      handleOpenChange(!isOpen);
    }
  };

  // Handle hover
  const handleMouseEnter = () => {
    if (trigger === "hover") {
      handleOpenChange(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      handleOpenChange(false);
    }
  };

  // Clone trigger element
  const triggerElement = React.cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      const originalRef = (children as any).ref;
      if (typeof originalRef === "function") {
        originalRef(node);
      } else if (originalRef) {
        try {
          (originalRef as any).current = node;
        } catch {
          // Ignore read-only refs
        }
      }
    },
    onClick: trigger === "click" ? handleClick : undefined,
    onMouseEnter: trigger === "hover" ? handleMouseEnter : undefined,
    onMouseLeave: trigger === "hover" ? handleMouseLeave : undefined,
  });

  return (
    <div className={`ui-popover-wrapper ${className}`} style={style}>
      {triggerElement}
      {isOpen && (
        <div
          ref={popoverRef}
          className={`ui-popover ui-popover--${placement} ${
            showArrow ? "ui-popover--with-arrow" : ""
          }`}
          role="dialog"
          aria-modal="false"
          onClick={(e) => {
            // Stop propagation to prevent outside click handler from firing
            e.stopPropagation();
          }}
          onMouseDown={(e) => {
            // Stop propagation to prevent outside click handler from firing
            e.stopPropagation();
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
