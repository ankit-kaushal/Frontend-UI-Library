"use client";

import React, { useState } from "react";
import "./Avatar.css";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  /** Custom background color for the fallback (e.g. "red", "#3b82f6") */
  backgroundColor?: string;
  /** Custom text color for the fallback */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const getInitials = (name: string): string => {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  name,
  size = "md",
  backgroundColor,
  color,
  className = "",
  style,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;
  const initials = name ? getInitials(name) : null;

  const classes = [
    "ui-avatar",
    `ui-avatar--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: React.CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...(color && { color }),
    ...style,
  };

  return (
    <div className={classes} style={mergedStyle} {...props}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="ui-avatar__img"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="ui-avatar__fallback" aria-hidden={!!alt}>
          {initials || (alt ? alt[0].toUpperCase() : "?")}
        </span>
      )}
    </div>
  );
};
