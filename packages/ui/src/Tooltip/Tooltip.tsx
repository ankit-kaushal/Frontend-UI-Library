"use client";

import React, { useState, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import "./Tooltip.css";

export interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  closeOnClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  placement = "top",
  isOpen: controlledIsOpen,
  defaultIsOpen = false,
  closeOnClick = false,
  className = "",
  style,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultIsOpen);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  useOutsideClick({
    handler: () => {
      if (!isControlled) {
        setInternalIsOpen(false);
      }
    },
    refs: [tooltipRef],
    enabled: isOpen && !isControlled,
  });

  const handleMouseEnter = () => {
    if (!isControlled) {
      setInternalIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isControlled && !closeOnClick) {
      setInternalIsOpen(false);
    }
  };

  const handleClick = () => {
    if (closeOnClick && !isControlled) {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const clonedChild = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
  });

  return (
    <div className={`ui-tooltip-wrapper ${className}`} style={style}>
      {clonedChild}
      {isOpen && (
        <div
          ref={tooltipRef}
          className={`ui-tooltip ui-tooltip--${placement}`}
          role="tooltip"
        >
          {label}
        </div>
      )}
    </div>
  );
};
