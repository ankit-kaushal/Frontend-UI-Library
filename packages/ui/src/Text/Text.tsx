import React from "react";
import "./Text.css";

export type TextSize = "sm" | "md" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextColor =
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success"
  | "warning";
export type TextAlign = "left" | "center" | "right";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  size = "md",
  weight = "regular",
  color = "primary",
  align = "left",
  className = "",
  children,
  ...props
}) => {
  const Component = as as any;

  const classes = [
    "ui-text",
    `ui-text--${size}`,
    `ui-text--${weight}`,
    `ui-text--${color}`,
    `ui-text--align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
