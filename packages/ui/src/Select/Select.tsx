"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useFormControlContext } from "../FormControl";
import "./Select.css";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "unstyled";
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  value?: string | number | (string | number)[];
  defaultValue?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  mode?: "single" | "multiple";
  searchable?: boolean;
  allowClear?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export const Select: React.FC<SelectProps> = ({
  size = "md",
  variant = "outline",
  isInvalid,
  isDisabled,
  isReadOnly,
  options = [],
  placeholder = "Select...",
  value: controlledValue,
  defaultValue,
  onChange,
  mode = "single",
  searchable = false,
  allowClear = false,
  className = "",
  style,
  id,
}) => {
  const formControl = useFormControlContext();
  const invalid = isInvalid ?? formControl.isInvalid ?? false;
  const disabled = isDisabled ?? formControl.isDisabled ?? false;
  const selectId = id || formControl.id;

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [internalValue, setInternalValue] = useState<
    string | number | (string | number)[]
  >(defaultValue || (mode === "multiple" ? [] : ""));
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const clickFromTriggerRef = useRef(false);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // If click originated from trigger, ignore it
      if (clickFromTriggerRef.current) {
        return;
      }

      // Check if refs are available
      if (!selectRef.current || !dropdownRef.current) {
        return;
      }

      // Check if click is inside select trigger or dropdown
      const clickedInsideSelect = selectRef.current.contains(target);
      const clickedInsideDropdown = dropdownRef.current.contains(target);

      // Close if clicked outside both
      if (!clickedInsideSelect && !clickedInsideDropdown) {
        setIsOpen(false);
        setSearchTerm("");
        setDropdownPosition(null);
      }
    };

    // Use mousedown in capture phase for more reliable detection
    // This prevents the double-click issue
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  // Calculate and update dropdown position
  const updateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition();
    } else {
      setDropdownPosition(null);
    }
  }, [isOpen, updateDropdownPosition]);

  // Update position on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    // Update position immediately
    updateDropdownPosition();

    // Listen to scroll events on all scrollable containers
    const handleScroll = () => {
      updateDropdownPosition();
    };

    const handleResize = () => {
      updateDropdownPosition();
    };

    // Add listeners to window and all scrollable parents
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleResize);
    
    // Also listen to scroll on the document
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen, updateDropdownPosition]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // Filter options based on search term
  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Get selected option(s)
  const getSelectedOptions = useCallback((): SelectOption | SelectOption[] | undefined => {
    if (mode === "multiple") {
      const values = Array.isArray(value) ? value : [];
      return options.filter((opt) => values.includes(opt.value));
    } else {
      return options.find((opt) => opt.value === value);
    }
  }, [value, options, mode]);

  const selectedOptions = getSelectedOptions();
  const displayValue =
    mode === "multiple"
      ? Array.isArray(selectedOptions) && selectedOptions.length > 0
        ? `${selectedOptions.length} selected`
        : placeholder
      : selectedOptions && !Array.isArray(selectedOptions)
      ? selectedOptions.label
      : placeholder;

  const handleToggle = (e: React.MouseEvent) => {
    if (disabled || isReadOnly) return;
    e.stopPropagation();
    
    // Set flag to prevent outside click handler from firing
    clickFromTriggerRef.current = true;
    
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      if (newIsOpen) {
        setSearchTerm("");
      }
      // Reset flag after state update
      setTimeout(() => {
        clickFromTriggerRef.current = false;
      }, 100);
      return newIsOpen;
    });
  };

  const handleSelect = (optionValue: string | number) => {
    if (mode === "multiple") {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];

      if (!isControlled) {
        setInternalValue(newValues);
      }
      onChange?.(newValues);
    } else {
      if (!isControlled) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = mode === "multiple" ? [] : "";
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const isSelected = (optionValue: string | number) => {
    if (mode === "multiple") {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };

  const hasValue =
    mode === "multiple"
      ? Array.isArray(value) && value.length > 0
      : value !== "" && value !== undefined && value !== null;

  const selectClasses = [
    "ui-select",
    `ui-select--${size}`,
    `ui-select--${variant}`,
    invalid && "ui-select--invalid",
    disabled && "ui-select--disabled",
    isReadOnly && "ui-select--readonly",
    isOpen && "ui-select--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={selectRef} className="ui-select-wrapper" style={style}>
      <div
        ref={triggerRef}
        id={selectId}
        className={selectClasses}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-invalid={invalid}
        aria-describedby={
          invalid && formControl.id ? `${formControl.id}-error` : undefined
        }
        role="combobox"
        tabIndex={disabled || isReadOnly ? -1 : 0}
      >
        <div className="ui-select__value">
          {mode === "multiple" && hasValue && Array.isArray(selectedOptions) && selectedOptions.length > 0 ? (
            <div className="ui-select__tags">
              {selectedOptions.slice(0, 2).map((option) => (
                <span key={option.value} className="ui-select__tag">
                  {option.label}
                  <button
                    type="button"
                    className="ui-select__tag-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(option.value);
                    }}
                    aria-label={`Remove ${option.label}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              {selectedOptions.length > 2 && (
                <span className="ui-select__tag-more">
                  +{selectedOptions.length - 2}
                </span>
              )}
            </div>
          ) : (
            <span
              className={`ui-select__text ${
                !hasValue ? "ui-select__text--placeholder" : ""
              }`}
            >
              {displayValue}
            </span>
          )}
        </div>
        <div className="ui-select__actions">
          {allowClear && hasValue && !disabled && !isReadOnly && (
            <button
              type="button"
              className="ui-select__clear"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
          <span className="ui-select__arrow" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {isOpen &&
        dropdownPosition &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            className="ui-select-dropdown"
            role="listbox"
            style={{
              position: "fixed",
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
          {searchable && (
            <div className="ui-select-dropdown__search">
              <input
                ref={inputRef}
                type="text"
                className="ui-select-dropdown__search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          )}
          <div className="ui-select-dropdown__options">
            {filteredOptions.length === 0 ? (
              <div className="ui-select-dropdown__empty">No options found</div>
            ) : (
              filteredOptions.map((option) => {
                const selected = isSelected(option.value);
                return (
                  <div
                    key={option.value}
                    className={`ui-select-dropdown__option ${
                      selected ? "ui-select-dropdown__option--selected" : ""
                    } ${option.disabled ? "ui-select-dropdown__option--disabled" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!option.disabled) {
                        handleSelect(option.value);
                      }
                    }}
                    role="option"
                    aria-selected={selected}
                  >
                    {mode === "multiple" && (
                      <span className="ui-select-dropdown__checkbox">
                        {selected ? "✓" : ""}
                      </span>
                    )}
                    <span className="ui-select-dropdown__option-label">
                      {option.label}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
