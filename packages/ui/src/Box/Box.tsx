import React from "react";
import "./Box.css";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  children,
  as = "div",
  className = "",
  ...props
}) => {
  const Component = as as any;
  const boxClasses = ["ui-box", className].filter(Boolean).join(" ");

  return (
    <Component className={boxClasses} {...props}>
      {children}
    </Component>
  );
};
