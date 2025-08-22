import React from "react";
import "./Loader.css";

export interface LoaderProps {
  width?: number;
  height?: number;
  isCentered?: boolean;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
}

export const Loader: React.FC<LoaderProps> = ({
  width,
  height,
  isCentered = false,
  className = "",
  size = "md",
  variant = "spinner",
}) => {
  const loaderClasses = [
    "ui-loader",
    `ui-loader--${size}`,
    `ui-loader--${variant}`,
    isCentered && "ui-loader--centered",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const getSize = () => {
    if (width && height) return { width, height };

    const sizeMap = {
      xs: { width: 16, height: 16 },
      sm: { width: 24, height: 24 },
      md: { width: 32, height: 32 },
      lg: { width: 44, height: 44 },
    };

    return sizeMap[size];
  };

  const { width: finalWidth, height: finalHeight } = getSize();

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="ui-loader__dots">
            <div className="ui-loader__dot"></div>
            <div className="ui-loader__dot"></div>
            <div className="ui-loader__dot"></div>
          </div>
        );
      case "pulse":
        return (
          <div
            className="ui-loader__pulse"
            style={{ width: finalWidth, height: finalHeight }}
          ></div>
        );
      case "spinner":
      default:
        return (
          <svg
            className="ui-loader__spinner"
            width={finalWidth}
            height={finalHeight}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeDasharray="31.416"
              strokeDashoffset="31.416"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="1s"
                values="0 31.416;15.708 15.708;0 31.416"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="1s"
                values="0;-15.708;-31.416"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        );
    }
  };

  return <div className={loaderClasses}>{renderLoader()}</div>;
};
