"use client";

import React, { useState, useRef, useEffect } from "react";
import { Moon, Sun, Monitor, ChevronDown } from "feather-icons-react";
import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
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
      return <Monitor size={20} />;
    }
    return theme === "dark" ? <Moon size={20} /> : <Sun size={20} />;
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

  return (
    <div className={styles.themeToggle} ref={dropdownRef}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        title={`Theme: ${getThemeLabel()}`}
      >
        {getThemeIcon()}
        <span className={styles.themeLabel}>{getThemeLabel()}</span>
        <ChevronDown
          size={16}
          className={`${styles.chevron} ${isOpen ? styles.rotated : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={`${styles.option} ${
              theme === "light" ? styles.active : ""
            }`}
            onClick={() => handleThemeChange("light")}
          >
            <Sun size={16} />
            <span>Light</span>
          </button>
          <button
            className={`${styles.option} ${
              theme === "dark" ? styles.active : ""
            }`}
            onClick={() => handleThemeChange("dark")}
          >
            <Moon size={16} />
            <span>Dark</span>
          </button>
          <button
            className={`${styles.option} ${
              theme === "system" ? styles.active : ""
            }`}
            onClick={() => handleThemeChange("system")}
          >
            <Monitor size={16} />
            <span>System</span>
            {theme === "system" && (
              <span className={styles.systemIndicator}>
                ({resolvedTheme === "dark" ? "Dark" : "Light"})
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
