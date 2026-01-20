import React from "react";
import "./Text.css";

export type TextSize = "sm" | "md" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success"
  | "warning";
export type TextAlign = "left" | "center" | "right";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style"> {
  as?: keyof JSX.IntrinsicElements;
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  align?: TextAlign;
  color?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  size = "md",
  weight = "regular",
  variant = "primary",
  align = "left",
  color,
  className = "",
  children,
  style,
  ...props
}) => {
  const Component = as as any;

  const classes = [
    "ui-text",
    `ui-text--${size}`,
    `ui-text--${weight}`,
    `ui-text--${variant}`,
    `ui-text--align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: React.CSSProperties = {
    ...(color && { color }),
    ...style,
  };

  return (
    <Component className={classes} style={mergedStyle} {...props}>
      {children}
    </Component>
  );
};
