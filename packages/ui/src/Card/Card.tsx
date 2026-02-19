"use client";

import React from "react";
import "./Card.css";

export type CardVariant = "default" | "dark" | "light";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  style,
  ...props
}) => {
  const classes = [
    "ui-card",
    variant === "dark" && "ui-card--dark",
    variant === "light" && "ui-card--light",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};

export interface CardImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "style"> {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = "",
  style,
  ...props
}) => {
  return (
    <div className="ui-card__image-wrapper">
      <img
        src={src}
        alt={alt}
        className={`ui-card__image ${className}`.trim()}
        style={style}
        {...props}
      />
    </div>
  );
};

export interface CardHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <div className={`ui-card__header ${className}`.trim()} style={style} {...props}>
    {children}
  </div>
);

export interface CardBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <div className={`ui-card__body ${className}`.trim()} style={style} {...props}>
    {children}
  </div>
);

export interface CardFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <div className={`ui-card__footer ${className}`.trim()} style={style} {...props}>
    {children}
  </div>
);

export interface CardTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <div className={`ui-card__title ${className}`.trim()} style={style} {...props}>
    {children}
  </div>
);

export interface CardSubtitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  className = "",
  style,
  ...props
}) => (
  <div className={`ui-card__subtitle ${className}`.trim()} style={style} {...props}>
    {children}
  </div>
);
