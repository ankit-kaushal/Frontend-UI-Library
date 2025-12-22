import React from "react";
import "./Flex.css";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number | string;
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = "nowrap",
  gap,
  className = "",
  style,
  ...props
}) => {
  const flexClasses = [
    "ui-flex",
    `ui-flex--${direction}`,
    `ui-flex--align-${align}`,
    `ui-flex--justify-${justify}`,
    `ui-flex--wrap-${wrap}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const flexStyle: React.CSSProperties = {
    ...style,
    ...(gap !== undefined && {
      gap: typeof gap === "number" ? `${gap}px` : gap,
    }),
  };

  return (
    <div className={flexClasses} style={flexStyle} {...props}>
      {children}
    </div>
  );
};
