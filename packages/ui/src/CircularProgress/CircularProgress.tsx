"use client";

import React from "react";
import "./CircularProgress.css";

export interface CircularProgressProps {
  value?: number;
  min?: number;
  max?: number;
  size?: number | string;
  thickness?: number;
  color?: string;
  trackColor?: string;
  isIndeterminate?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  min = 0,
  max = 100,
  size = 48,
  thickness = 4,
  color = "var(--accent-primary, #bb00ed)",
  trackColor = "var(--bg-secondary, #f3f4f6)",
  isIndeterminate = false,
  className = "",
  style,
  children,
}) => {
  const normalizedSize = typeof size === "number" ? `${size}px` : size;
  const radius = (parseFloat(normalizedSize) - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const strokeDasharray = isIndeterminate
    ? undefined
    : circumference;
  const strokeDashoffset = isIndeterminate
    ? undefined
    : circumference * (1 - normalizedValue);

  return (
    <div
      className={`ui-circular-progress ${className}`}
      style={{ width: normalizedSize, height: normalizedSize, ...style }}
      role="progressbar"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={isIndeterminate ? undefined : value}
    >
      <svg
        className="ui-circular-progress__svg"
        width={normalizedSize}
        height={normalizedSize}
        viewBox={`0 0 ${parseFloat(normalizedSize)} ${parseFloat(normalizedSize)}`}
      >
        <circle
          className="ui-circular-progress__track"
          cx={parseFloat(normalizedSize) / 2}
          cy={parseFloat(normalizedSize) / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={thickness}
        />
        <circle
          className={`ui-circular-progress__indicator ${
            isIndeterminate ? "ui-circular-progress__indicator--indeterminate" : ""
          }`}
          cx={parseFloat(normalizedSize) / 2}
          cy={parseFloat(normalizedSize) / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${parseFloat(normalizedSize) / 2} ${parseFloat(normalizedSize) / 2})`}
        />
      </svg>
      {children && (
        <div className="ui-circular-progress__label">{children}</div>
      )}
    </div>
  );
};

export interface CircularProgressLabelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CircularProgressLabel: React.FC<CircularProgressLabelProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div className={`ui-circular-progress-label ${className}`} style={style}>
      {children}
    </div>
  );
};

