"use client";

import React, { useRef, useState } from "react";
import "./Upload.css";

export interface UploadProps {
  onFileSelect?: (files: File[]) => void;
  onFilesChange?: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  children?: React.ReactNode;
  className?: string;
}

const defaultPlaceholder = (
  <>
    <span className="ui-upload__icon">↑</span>
    <span className="ui-upload__text">Drag and drop or click to upload</span>
  </>
);

export const Upload: React.FC<UploadProps> = ({
  onFileSelect,
  onFilesChange,
  accept,
  multiple = false,
  disabled = false,
  maxSize,
  children = defaultPlaceholder,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = (files: FileList | null) => {
    setError(null);
    if (!files || files.length === 0) {
      onFilesChange?.(null);
      return;
    }
    const fileArray = Array.from(files);
    if (maxSize) {
      const oversized = fileArray.filter((f) => f.size > maxSize);
      if (oversized.length > 0) {
        setError(`Some files exceed ${Math.round(maxSize / 1024)}KB`);
        return;
      }
    }
    onFileSelect?.(fileArray);
    onFilesChange?.(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const classes = [
    "ui-upload",
    disabled && "ui-upload--disabled",
    isDragOver && "ui-upload--dragover",
    error && "ui-upload--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        className="ui-upload__input"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        tabIndex={-1}
        aria-label="Upload files"
      />
      <div className="ui-upload__content">{children}</div>
      {error && <div className="ui-upload__error">{error}</div>}
    </div>
  );
};
