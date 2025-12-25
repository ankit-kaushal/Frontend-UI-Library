"use client";

import { toastManager } from "./toastManager";
import type { ToastPosition } from "./Toast";

export type ToastOptions = {
  title?: string;
  description?: string;
  duration?: number;
  hideAfter?: number;
  isClosable?: boolean;
  position?: ToastPosition;
};

export const ToastStatic = {
  success: (messageOrOptions: string | ToastOptions, options?: ToastOptions): string => {
    if (typeof messageOrOptions === "string") {
      return toastManager.success(messageOrOptions, options);
    } else {
      return toastManager.success("", messageOrOptions);
    }
  },

  error: (messageOrOptions: string | ToastOptions, options?: ToastOptions): string => {
    if (typeof messageOrOptions === "string") {
      return toastManager.error(messageOrOptions, options);
    } else {
      return toastManager.error("", messageOrOptions);
    }
  },

  warning: (messageOrOptions: string | ToastOptions, options?: ToastOptions): string => {
    if (typeof messageOrOptions === "string") {
      return toastManager.warning(messageOrOptions, options);
    } else {
      return toastManager.warning("", messageOrOptions);
    }
  },

  info: (messageOrOptions: string | ToastOptions, options?: ToastOptions): string => {
    if (typeof messageOrOptions === "string") {
      return toastManager.info(messageOrOptions, options);
    } else {
      return toastManager.info("", messageOrOptions);
    }
  },

  close: (id: string): void => {
    toastManager.close(id);
  },

  closeAll: (): void => {
    toastManager.closeAll();
  },
};

