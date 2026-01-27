"use client";

import React from "react";
import "./Breadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style"> {
  items: BreadcrumbItem[];
  separator?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className = "",
  style,
  ...props
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  const isLastItem = (index: number) => index === items.length - 1;

  return (
    <nav
      className={`ui-breadcrumb ${className}`.trim()}
      style={style}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="ui-breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="ui-breadcrumb__item">
            {item.href || item.onClick ? (
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={`ui-breadcrumb__link ${
                  isLastItem(index) ? "ui-breadcrumb__link--current" : ""
                }`.trim()}
                aria-current={isLastItem(index) ? "page" : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={`ui-breadcrumb__text ${
                  isLastItem(index) ? "ui-breadcrumb__text--current" : ""
                }`.trim()}
                aria-current={isLastItem(index) ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {!isLastItem(index) && (
              <span className="ui-breadcrumb__separator" aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
