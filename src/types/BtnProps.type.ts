import React from "react";

export interface BtnProps {
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  max?: string;
  min?: string;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrorText: React.Dispatch<React.SetStateAction<boolean>>;
}
