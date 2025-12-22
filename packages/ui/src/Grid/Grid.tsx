"use client";

import React from "react";
import "./Grid.css";

export interface GridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  templateColumns?: string;
  templateRows?: string;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  autoColumns?: string;
  autoRows?: string;
  className?: string;
  // Layout props (from Box)
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number | string;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
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
  backgroundColor?: string;
  bg?: string;
  borderRadius?: number | string;
  style?: React.CSSProperties;
}

const normalizeValue = (
  value: number | string | undefined
): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};

export const Grid: React.FC<GridProps> = ({
  children,
  templateColumns,
  templateRows,
  gap,
  columnGap,
  rowGap,
  autoFlow,
  autoColumns,
  autoRows,
  className = "",
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
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
  backgroundColor,
  bg,
  borderRadius,
  style,
  ...props
}) => {
  const gridClasses = ["ui-grid", className].filter(Boolean).join(" ");

  const gridStyle: React.CSSProperties = {
    ...(position && { position }),
    ...(top !== undefined && { top: normalizeValue(top) }),
    ...(right !== undefined && { right: normalizeValue(right) }),
    ...(bottom !== undefined && { bottom: normalizeValue(bottom) }),
    ...(left !== undefined && { left: normalizeValue(left) }),
    ...(zIndex !== undefined && { zIndex }),
    ...(width !== undefined && { width: normalizeValue(width) }),
    ...(height !== undefined && { height: normalizeValue(height) }),
    ...(minWidth !== undefined && { minWidth: normalizeValue(minWidth) }),
    ...(maxWidth !== undefined && { maxWidth: normalizeValue(maxWidth) }),
    ...(minHeight !== undefined && { minHeight: normalizeValue(minHeight) }),
    ...(maxHeight !== undefined && { maxHeight: normalizeValue(maxHeight) }),
    ...(padding !== undefined && { padding: normalizeValue(padding) }),
    ...(paddingTop !== undefined && { paddingTop: normalizeValue(paddingTop) }),
    ...(paddingRight !== undefined && {
      paddingRight: normalizeValue(paddingRight),
    }),
    ...(paddingBottom !== undefined && {
      paddingBottom: normalizeValue(paddingBottom),
    }),
    ...(paddingLeft !== undefined && {
      paddingLeft: normalizeValue(paddingLeft),
    }),
    ...(margin !== undefined && { margin: normalizeValue(margin) }),
    ...(marginTop !== undefined && { marginTop: normalizeValue(marginTop) }),
    ...(marginRight !== undefined && { marginRight: normalizeValue(marginRight) }),
    ...(marginBottom !== undefined && {
      marginBottom: normalizeValue(marginBottom),
    }),
    ...(marginLeft !== undefined && { marginLeft: normalizeValue(marginLeft) }),
    ...(backgroundColor && { backgroundColor }),
    ...(bg && { backgroundColor: bg }),
    ...(borderRadius !== undefined && {
      borderRadius: normalizeValue(borderRadius),
    }),
    // Grid specific
    ...(templateColumns && { gridTemplateColumns: templateColumns }),
    ...(templateRows && { gridTemplateRows: templateRows }),
    ...(gap !== undefined && {
      gap: typeof gap === "number" ? `${gap}px` : gap,
    }),
    ...(columnGap !== undefined && {
      columnGap: typeof columnGap === "number" ? `${columnGap}px` : columnGap,
    }),
    ...(rowGap !== undefined && {
      rowGap: typeof rowGap === "number" ? `${rowGap}px` : rowGap,
    }),
    ...(autoFlow && { gridAutoFlow: autoFlow }),
    ...(autoColumns && { gridAutoColumns: autoColumns }),
    ...(autoRows && { gridAutoRows: autoRows }),
    ...style,
  };

  return (
    <div className={gridClasses} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

