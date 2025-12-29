"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize with safe defaults to prevent hydration mismatches
  // ThemeScript already applied the theme, so we'll sync in useEffect
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Get system preference
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;

    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    root.setAttribute("data-theme", resolved);

    setResolvedTheme(resolved);
  };

  // Track if we've completed initial sync
  const isInitialMount = React.useRef(true);

  // Sync with the theme that was already applied by ThemeScript
  // This runs only on the client after hydration
  useEffect(() => {
    // Read theme from localStorage (ThemeScript already read and applied it)
    const savedTheme = localStorage.getItem("theme");

    // Validate and set the theme
    if (
      savedTheme &&
      (savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system")
    ) {
      // Only update if different from current state
      if (savedTheme !== theme) {
        setTheme(savedTheme as Theme);
      }
    } else {
      // No saved theme, ensure "system" is saved (ThemeScript already applied it)
      localStorage.setItem("theme", "system");
    }

    // Read resolved theme from document (ThemeScript already calculated and applied it)
    const currentDataTheme =
      document.documentElement.getAttribute("data-theme");
    if (currentDataTheme === "dark" || currentDataTheme === "light") {
      setResolvedTheme(currentDataTheme);
    }

    // Mark initial mount as complete
    isInitialMount.current = false;
  }, []);

  // Apply theme when theme state changes
  useEffect(() => {
    // Always save to localStorage when theme changes
    localStorage.setItem("theme", theme);

    // Skip applying on initial mount - ThemeScript already handled it
    if (isInitialMount.current) {
      return;
    }

    // User changed the theme, apply it
    applyTheme(theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
