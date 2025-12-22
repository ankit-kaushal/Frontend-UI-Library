import React from "react";
import "./Box.css";

export interface BoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  
  // Layout props
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number | string;
  display?: "block" | "inline-block" | "inline" | "flex" | "inline-flex" | "grid" | "inline-grid" | "none";
  
  // Size props
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  
  // Spacing props
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  
  // Overflow props
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  overflowX?: "visible" | "hidden" | "scroll" | "auto";
  overflowY?: "visible" | "hidden" | "scroll" | "auto";
  
  // Color props
  color?: string;
  backgroundColor?: string;
  bg?: string; // Alias for backgroundColor
  opacity?: number;
  
  // Border props
  border?: string;
  borderWidth?: number | string;
  borderStyle?: "solid" | "dashed" | "dotted" | "none";
  borderColor?: string;
  borderRadius?: number | string;
  
  // Shadow props
  boxShadow?: string;
  shadow?: string; // Alias for boxShadow
  
  // Typography props
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  textAlign?: "left" | "center" | "right" | "justify";
  textDecoration?: "none" | "underline" | "line-through";
  
  // Custom style (merged with computed styles)
  style?: React.CSSProperties;
}

const normalizeValue = (value: number | string | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};

export const Box: React.FC<BoxProps> = ({
  children,
  as = "div",
  className = "",
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  display,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  overflow,
  overflowX,
  overflowY,
  color,
  backgroundColor,
  bg,
  opacity,
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  boxShadow,
  shadow,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textDecoration,
  style,
  ...props
}) => {
  const Component = as as any;
  const boxClasses = ["ui-box", className].filter(Boolean).join(" ");

  const computedStyle: React.CSSProperties = {
    ...(position && { position }),
    ...(top !== undefined && { top: normalizeValue(top) }),
    ...(right !== undefined && { right: normalizeValue(right) }),
    ...(bottom !== undefined && { bottom: normalizeValue(bottom) }),
    ...(left !== undefined && { left: normalizeValue(left) }),
    ...(zIndex !== undefined && { zIndex }),
    ...(display && { display }),
    ...(width !== undefined && { width: normalizeValue(width) }),
    ...(height !== undefined && { height: normalizeValue(height) }),
    ...(minWidth !== undefined && { minWidth: normalizeValue(minWidth) }),
    ...(maxWidth !== undefined && { maxWidth: normalizeValue(maxWidth) }),
    ...(minHeight !== undefined && { minHeight: normalizeValue(minHeight) }),
    ...(maxHeight !== undefined && { maxHeight: normalizeValue(maxHeight) }),
    ...(padding !== undefined && { padding: normalizeValue(padding) }),
    ...(paddingTop !== undefined && { paddingTop: normalizeValue(paddingTop) }),
    ...(paddingRight !== undefined && { paddingRight: normalizeValue(paddingRight) }),
    ...(paddingBottom !== undefined && { paddingBottom: normalizeValue(paddingBottom) }),
    ...(paddingLeft !== undefined && { paddingLeft: normalizeValue(paddingLeft) }),
    ...(margin !== undefined && { margin: normalizeValue(margin) }),
    ...(marginTop !== undefined && { marginTop: normalizeValue(marginTop) }),
    ...(marginRight !== undefined && { marginRight: normalizeValue(marginRight) }),
    ...(marginBottom !== undefined && { marginBottom: normalizeValue(marginBottom) }),
    ...(marginLeft !== undefined && { marginLeft: normalizeValue(marginLeft) }),
    ...(overflow && { overflow }),
    ...(overflowX && { overflowX }),
    ...(overflowY && { overflowY }),
    ...(color && { color }),
    ...(backgroundColor && { backgroundColor }),
    ...(bg && { backgroundColor: bg }),
    ...(opacity !== undefined && { opacity }),
    ...(border && { border }),
    ...(borderWidth !== undefined && { borderWidth: normalizeValue(borderWidth) }),
    ...(borderStyle && { borderStyle }),
    ...(borderColor && { borderColor }),
    ...(borderRadius !== undefined && { borderRadius: normalizeValue(borderRadius) }),
    ...(boxShadow && { boxShadow }),
    ...(shadow && { boxShadow: shadow }),
    ...(fontSize !== undefined && { fontSize: normalizeValue(fontSize) }),
    ...(fontWeight !== undefined && { fontWeight }),
    ...(lineHeight !== undefined && { lineHeight: normalizeValue(lineHeight) }),
    ...(textAlign && { textAlign }),
    ...(textDecoration && { textDecoration }),
    ...style,
  };

  return (
    <Component className={boxClasses} style={computedStyle} {...props}>
      {children}
    </Component>
  );
};
