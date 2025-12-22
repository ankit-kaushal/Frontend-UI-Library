"use client";

import React from "react";
import "./Link.css";

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  variant?: "link" | "underline" | "none";
  color?: "primary" | "secondary" | "accent";
  className?: string;
  style?: React.CSSProperties;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  isExternal = false,
  variant = "link",
  color = "primary",
  className = "",
  style,
  ...props
}) => {
  const linkClasses = [
    "ui-link",
    `ui-link--${variant}`,
    `ui-link--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={linkClasses}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
};

