"use client";

import React from "react";
import "./Table.css";

export type TableSize = "sm" | "md" | "lg";
export type TableVariant = "default" | "bordered" | "striped";

export interface TableProps
  extends Omit<React.HTMLAttributes<HTMLTableElement>, "style"> {
  children: React.ReactNode;
  variant?: TableVariant;
  size?: TableSize;
  className?: string;
  style?: React.CSSProperties;
}

export const Table: React.FC<TableProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  style,
  ...props
}) => {
  const classes = [
    "ui-table",
    `ui-table--${variant}`,
    `ui-table--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-table__wrapper">
      <table className={classes} style={style} {...props}>
        {children}
      </table>
    </div>
  );
};

export interface TableHeadProps
  extends Omit<React.HTMLAttributes<HTMLTableSectionElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <thead className={`ui-table__head ${className}`.trim()} style={style} {...props}>
    {children}
  </thead>
);

export interface TableBodyProps
  extends Omit<React.HTMLAttributes<HTMLTableSectionElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <tbody className={`ui-table__body ${className}`.trim()} style={style} {...props}>
    {children}
  </tbody>
);

export interface TableFooterProps
  extends Omit<React.HTMLAttributes<HTMLTableSectionElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <tfoot className={`ui-table__foot ${className}`.trim()} style={style} {...props}>
    {children}
  </tfoot>
);

export interface TableRowProps
  extends Omit<React.HTMLAttributes<HTMLTableRowElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <tr className={`ui-table__row ${className}`.trim()} style={style} {...props}>
    {children}
  </tr>
);

export interface TableHeaderProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "style"> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <th className={`ui-table__header ${className}`.trim()} style={style} {...props}>
    {children}
  </th>
);

export interface TableCellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "style"> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <td className={`ui-table__cell ${className}`.trim()} style={style} {...props}>
    {children}
  </td>
);
