"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ToastContainer } from "./Toast";
import { toastManager } from "./toastManager";
import type { ToastProps, ToastPosition } from "./Toast";

export const ToastContainerGlobal: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newToasts) => {
      setToasts(newToasts);
    });

    // Set initial toasts
    setToasts(toastManager.getToasts());

    return unsubscribe;
  }, []);

  const handleClose = (id: string) => {
    toastManager.close(id);
  };

  // Group toasts by position
  const toastsByPosition = useMemo(() => {
    const grouped: Record<ToastPosition, ToastProps[]> = {
      "top-left": [],
      "top-right": [],
      "top-center": [],
      "bottom-left": [],
      "bottom-right": [],
      "bottom-center": [],
    };

    toasts.forEach((toast) => {
      const position = toast.position || "top-right";
      if (grouped[position]) {
        grouped[position].push(toast);
      }
    });

    return grouped;
  }, [toasts]);

  // Get all positions that have toasts
  const positionsWithToasts = useMemo(() => {
    return Object.keys(toastsByPosition).filter(
      (position) => toastsByPosition[position as ToastPosition].length > 0
    ) as ToastPosition[];
  }, [toastsByPosition]);

  return (
    <>
      {positionsWithToasts.map((position) => (
        <ToastContainer
          key={position}
          toasts={toastsByPosition[position]}
          position={position}
          onClose={handleClose}
        />
      ))}
    </>
  );
};

