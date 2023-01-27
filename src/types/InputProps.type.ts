import React from "react";

export interface InputProps {
  name: string;
  value: string;
  min?: number;
  max?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  showErrorText: boolean;
  innerRef: React.RefObject<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
}

export interface DateInputProps
  extends Omit<
    InputProps,
    "min" | "max" | "error" | "onBlur" | "innerRef" | "showErrorText"
  > {
  min?: string;
  max?: string;
}
