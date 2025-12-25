"use client";

import React from "react";
import { ToastContainer, ToastPosition } from "./Toast";
import { useToast, UseToastReturn } from "./useToast";

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
}

export const ToastContext = React.createContext<UseToastReturn | null>(null);

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "top-right",
}) => {
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer
        toasts={toast.toasts}
        position={position}
        onClose={toast.close}
      />
    </ToastContext.Provider>
  );
};

export const useToastContext = (): UseToastReturn => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

