"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  sidebarWidth: string;
  isLoaded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load collapsed state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed");
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    }
    setIsLoaded(true);
  }, []);

  // Save collapsed state to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
    }
  }, [isCollapsed, isLoaded]);

  const sidebarWidth = isCollapsed ? "4rem" : "16rem";

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, setIsCollapsed, sidebarWidth, isLoaded }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
