"use client";

import React from "react";
import "./Skeleton.css";

export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  width,
  height,
  className = "",
  style,
  ...props
}) => {
  const classes = [
    "ui-skeleton",
    `ui-skeleton--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: React.CSSProperties = {
    ...(width !== undefined && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === "number" ? `${height}px` : height }),
    ...style,
  };

  return <div className={classes} style={mergedStyle} aria-busy="true" aria-live="polite" {...props} />;
};
