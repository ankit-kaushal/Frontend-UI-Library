"use client";

import React, { createContext, useContext } from "react";
import "./FormControl.css";

interface FormControlContextValue {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  id?: string;
}

const FormControlContext = createContext<FormControlContextValue>({});

export const useFormControlContext = () => useContext(FormControlContext);

export interface FormControlProps {
  children: React.ReactNode;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  id?: string;
  className?: string;
}

export const FormControl: React.FC<FormControlProps> = ({
  children,
  isInvalid = false,
  isRequired = false,
  isDisabled = false,
  id,
  className = "",
}) => {
  const contextValue: FormControlContextValue = {
    isInvalid,
    isRequired,
    isDisabled,
    id,
  };

  return (
    <FormControlContext.Provider value={contextValue}>
      <div className={`ui-form-control ${className}`}>{children}</div>
    </FormControlContext.Provider>
  );
};

