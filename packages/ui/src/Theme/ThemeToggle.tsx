"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  variant?: "button" | "dropdown";
  size?: "sm" | "md" | "lg";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = true,
  variant = "dropdown",
  size = "md",
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    if (theme === "system") {
      return "🖥️";
    }
    return theme === "dark" ? "🌙" : "☀️";
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
      default:
        return "System";
    }
  };

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (variant === "button") {
      // Cycle through themes: light -> dark -> system -> light
      const themes: ("light" | "dark" | "system")[] = [
        "light",
        "dark",
        "system",
      ];
      const currentIndex = themes.indexOf(theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      setTheme(themes[nextIndex]);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-2",
    lg: "text-lg px-4 py-3",
  };

  const baseClasses = `inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 ${sizeClasses[size]} ${className}`;

  if (variant === "button") {
    return (
      <button
        onClick={handleToggle}
        className={baseClasses}
        title={`Current theme: ${getThemeLabel()}`}
      >
        <span>{getThemeIcon()}</span>
        {showLabel && <span>{getThemeLabel()}</span>}
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className={baseClasses}
        title={`Theme: ${getThemeLabel()}`}
      >
        <span>{getThemeIcon()}</span>
        {showLabel && <span>{getThemeLabel()}</span>}
        <span className="ml-1">▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
          <button
            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
              theme === "light" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
            onClick={() => handleThemeChange("light")}
          >
            ☀️ Light
          </button>
          <button
            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
              theme === "dark" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
            onClick={() => handleThemeChange("dark")}
          >
            🌙 Dark
          </button>
          <button
            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
              theme === "system" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
            onClick={() => handleThemeChange("system")}
          >
            🖥️ System
            {theme === "system" && (
              <span className="ml-2 text-xs text-gray-500">
                ({resolvedTheme === "dark" ? "Dark" : "Light"})
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
