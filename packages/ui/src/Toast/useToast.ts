"use client";

import { useState, useCallback } from "react";
import { ToastProps, ToastVariant } from "./Toast";

export interface UseToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  isClosable?: boolean;
  position?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";
}

export interface UseToastReturn {
  toasts: ToastProps[];
  toast: (options: UseToastOptions) => string;
  close: (id: string) => void;
  closeAll: () => void;
}

export const useToast = (): UseToastReturn => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(
    (options: UseToastOptions): string => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newToast: ToastProps = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant || "info",
        duration: options.duration ?? 5000,
        isClosable: options.isClosable ?? true,
      };

      setToasts((prev) => [...prev, newToast]);
      return id;
    },
    []
  );

  const close = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    toast,
    close,
    closeAll,
  };
};

