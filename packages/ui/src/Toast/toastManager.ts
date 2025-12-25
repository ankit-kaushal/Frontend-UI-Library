"use client";

import { ToastProps, ToastVariant, ToastPosition } from "./Toast";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  hideAfter?: number;
  isClosable?: boolean;
  position?: ToastPosition;
};

class ToastManager {
  private toasts: ToastProps[] = [];
  private listeners: Set<(toasts: ToastProps[]) => void> = new Set();
  private defaultPosition: ToastPosition = "top-center";

  subscribe(listener: (toasts: ToastProps[]) => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }

  getToasts(): ToastProps[] {
    return [...this.toasts];
  }

  private addToast(
    message: string,
    variant: ToastVariant,
    options: ToastOptions = {}
  ): string {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Support both 'duration' and 'hideAfter' options
    const duration = options.hideAfter !== undefined 
      ? options.hideAfter 
      : options.duration ?? 5000;

    // If title is provided, use it; otherwise use message as title
    // If title is provided, use description from options; otherwise no description
    const title = options.title || message;
    const description = options.title ? options.description : undefined;

    const toast: ToastProps = {
      id,
      title,
      description,
      variant,
      duration,
      isClosable: options.isClosable ?? true,
      position: options.position || this.defaultPosition,
    };

    this.toasts.push(toast);
    this.notify();
    return id;
  }

  success(message: string, options?: ToastOptions): string {
    return this.addToast(message, "success", options);
  }

  error(message: string, options?: ToastOptions): string {
    return this.addToast(message, "error", options);
  }

  warning(message: string, options?: ToastOptions): string {
    return this.addToast(message, "warning", options);
  }

  info(message: string, options?: ToastOptions): string {
    return this.addToast(message, "info", options);
  }

  close(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  }

  closeAll() {
    this.toasts = [];
    this.notify();
  }
}

export const toastManager = new ToastManager();

