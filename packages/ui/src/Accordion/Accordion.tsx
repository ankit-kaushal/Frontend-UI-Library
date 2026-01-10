"use client";

import React, {
  useState,
  useCallback,
  useRef,
  createContext,
  useContext,
} from "react";
import "./Accordion.css";

// Accordion Context
interface AccordionContextValue {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  variant?: "default" | "bordered" | "filled";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion component"
    );
  }
  return context;
};

// Accordion Component
export interface AccordionProps {
  children: React.ReactNode;
  defaultIndex?: number | number[];
  index?: number | number[];
  onChange?: (indexes: number[]) => void;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  variant?: "default" | "bordered" | "filled";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  className?: string;
  style?: React.CSSProperties;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  defaultIndex,
  index: controlledIndexes,
  onChange,
  allowMultiple = false,
  allowToggle = true,
  variant = "default",
  size = "md",
  colorScheme = "blue",
  className = "",
  style,
}) => {
  const normalizeIndexes = useCallback(
    (index: number | number[] | undefined): number[] => {
      if (index === undefined) return [];
      if (typeof index === "number") return [index];
      return index;
    },
    []
  );

  const [uncontrolledIndexes, setUncontrolledIndexes] = useState<number[]>(
    () => normalizeIndexes(defaultIndex)
  );

  const isControlled = controlledIndexes !== undefined;
  const openIndexes = isControlled
    ? normalizeIndexes(controlledIndexes)
    : uncontrolledIndexes;

  const toggleIndex = useCallback(
    (index: number) => {
      const isOpen = openIndexes.includes(index);
      let newIndexes: number[];

      if (allowMultiple) {
        if (isOpen && allowToggle) {
          newIndexes = openIndexes.filter((i) => i !== index);
        } else if (!isOpen) {
          newIndexes = [...openIndexes, index];
        } else {
          return; // Already open and toggle not allowed
        }
      } else {
        // Single mode
        if (isOpen && allowToggle) {
          newIndexes = [];
        } else if (!isOpen) {
          newIndexes = [index];
        } else {
          return; // Already open and toggle not allowed
        }
      }

      if (!isControlled) {
        setUncontrolledIndexes(newIndexes);
      }
      onChange?.(newIndexes);
    },
    [openIndexes, allowMultiple, allowToggle, isControlled, onChange]
  );

  const contextValue: AccordionContextValue = {
    openIndexes,
    toggleIndex,
    allowMultiple,
    allowToggle,
    variant,
    size,
    colorScheme,
  };

  const accordionClasses = [
    "ui-accordion",
    `ui-accordion--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={accordionClasses} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionItem Component
export interface AccordionItemProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  index = 0,
  className = "",
  style,
}) => {
  const { variant } = useAccordionContext();

  const itemClasses = [
    "ui-accordion-item",
    `ui-accordion-item--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={itemClasses} style={style} data-accordion-index={index}>
      {children}
    </div>
  );
};

// AccordionButton Component
export interface AccordionButtonProps {
  children: React.ReactNode;
  index?: number;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
  index = 0,
  icon,
  iconPosition = "right",
  className = "",
  style,
}) => {
  const {
    openIndexes,
    toggleIndex,
    variant,
    size,
    colorScheme,
  } = useAccordionContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = openIndexes.includes(index);

  const handleClick = () => {
    toggleIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleIndex(index);
    }
  };

  const buttonClasses = [
    "ui-accordion-button",
    `ui-accordion-button--${variant}`,
    `ui-accordion-button--${size}`,
    `ui-accordion-button--${colorScheme}`,
    isOpen && "ui-accordion-button--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconElement = icon || (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ui-accordion-button__icon"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      className={buttonClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${index}`}
      id={`accordion-button-${index}`}
      style={style}
    >
      {iconPosition === "left" && (
        <span className="ui-accordion-button__icon-wrapper">{iconElement}</span>
      )}
      <span className="ui-accordion-button__label">{children}</span>
      {iconPosition === "right" && (
        <span className="ui-accordion-button__icon-wrapper">{iconElement}</span>
      )}
    </button>
  );
};

// AccordionPanel Component
export interface AccordionPanelProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  index = 0,
  className = "",
  style,
}) => {
  const { openIndexes } = useAccordionContext();
  const isOpen = openIndexes.includes(index);

  const panelClasses = [
    "ui-accordion-panel",
    isOpen && "ui-accordion-panel--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      id={`accordion-panel-${index}`}
      role="region"
      aria-labelledby={`accordion-button-${index}`}
      hidden={!isOpen}
      className={panelClasses}
      style={style}
    >
      <div className="ui-accordion-panel__content">{children}</div>
    </div>
  );
};

