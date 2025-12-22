"use client";

import { useEffect, RefObject } from "react";

export interface UseOutsideClickOptions {
  handler: (event: MouseEvent | TouchEvent) => void;
  refs: RefObject<HTMLElement>[];
  enabled?: boolean;
}

export const useOutsideClick = ({
  handler,
  refs,
  enabled = true,
}: UseOutsideClickOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      const isOutside = refs.every((ref) => {
        return ref.current && !ref.current.contains(target);
      });

      if (isOutside) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler, refs, enabled]);
};

