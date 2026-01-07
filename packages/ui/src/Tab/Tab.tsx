"use client";

import React, { useState, useCallback, useRef, createContext, useContext } from "react";
import "./Tab.css";

// Tab Context
interface TabContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  variant?: "line" | "enclosed" | "soft-rounded";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  orientation?: "horizontal" | "vertical";
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
};

// Tabs Component
export interface TabsProps {
  children: React.ReactNode;
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
  variant?: "line" | "enclosed" | "soft-rounded";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultIndex = 0,
  index: controlledIndex,
  onChange,
  variant = "line",
  size = "md",
  colorScheme = "blue",
  orientation = "horizontal",
  className = "",
  style,
}) => {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultIndex);
  const isControlled = controlledIndex !== undefined;
  const activeIndex = isControlled ? controlledIndex : uncontrolledIndex;

  const setActiveIndex = useCallback(
    (newIndex: number) => {
      if (!isControlled) {
        setUncontrolledIndex(newIndex);
      }
      onChange?.(newIndex);
    },
    [isControlled, onChange]
  );

  const contextValue: TabContextValue = {
    activeIndex,
    setActiveIndex,
    variant,
    size,
    colorScheme,
    orientation,
  };

  const tabsClasses = [
    "ui-tabs",
    `ui-tabs--${orientation}`,
    `ui-tabs--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TabContext.Provider value={contextValue}>
      <div className={tabsClasses} style={style} role="tablist">
        {children}
      </div>
    </TabContext.Provider>
  );
};

// TabList Component
export interface TabListProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TabList: React.FC<TabListProps> = ({
  children,
  className = "",
  style,
}) => {
  const { orientation } = useTabContext();

  const tabListClasses = [
    "ui-tab-list",
    `ui-tab-list--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabListClasses} style={style} role="tablist">
      {children}
    </div>
  );
};

// Tab Component
export interface TabProps {
  children: React.ReactNode;
  index?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Tab: React.FC<TabProps> = ({
  children,
  index = 0,
  disabled = false,
  icon,
  className = "",
  style,
}) => {
  const { activeIndex, setActiveIndex, variant, size, colorScheme } = useTabContext();
  const tabRef = useRef<HTMLButtonElement>(null);
  const isActive = activeIndex === index;

  const handleClick = () => {
    if (!disabled) {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const tabs = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        `.ui-tab-list [role="tab"]:not([aria-disabled="true"])`
      )
    );
    const currentTabIndex = tabs.findIndex((tab) => tab === tabRef.current);

    let nextIndex = currentTabIndex;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        nextIndex = (currentTabIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        nextIndex = currentTabIndex - 1 < 0 ? tabs.length - 1 : currentTabIndex - 1;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = tabs[nextIndex];
    if (nextTab) {
      const tabIndex = parseInt(nextTab.getAttribute("data-tab-index") || "0", 10);
      setActiveIndex(tabIndex);
      nextTab.focus();
    }
  };

  const tabClasses = [
    "ui-tab",
    `ui-tab--${variant}`,
    `ui-tab--${size}`,
    `ui-tab--${colorScheme}`,
    isActive && "ui-tab--active",
    disabled && "ui-tab--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={tabRef}
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      aria-controls={`tabpanel-${index}`}
      id={`tab-${index}`}
      data-tab-index={index}
      tabIndex={isActive ? 0 : -1}
      className={tabClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      style={style}
    >
      {icon && <span className="ui-tab__icon">{icon}</span>}
      <span className="ui-tab__label">{children}</span>
    </button>
  );
};

// TabPanels Component
export interface TabPanelsProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TabPanels: React.FC<TabPanelsProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div className={`ui-tab-panels ${className}`} style={style}>
      {children}
    </div>
  );
};

// TabPanel Component
export interface TabPanelProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index = 0,
  className = "",
  style,
}) => {
  const { activeIndex } = useTabContext();
  const isActive = activeIndex === index;

  const tabPanelClasses = [
    "ui-tab-panel",
    isActive && "ui-tab-panel--active",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      hidden={!isActive}
      className={tabPanelClasses}
      style={style}
    >
      {children}
    </div>
  );
};

