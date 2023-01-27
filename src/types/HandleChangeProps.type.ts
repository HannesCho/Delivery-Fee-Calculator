import { ChangeEvent } from "react";

export interface HandleChangeProps {
  event: ChangeEvent<HTMLInputElement>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DateHandleChangeProps
  extends Omit<HandleChangeProps, "setState" | "error" | "setError"> {
  setState: React.Dispatch<React.SetStateAction<string>>;
}
export interface TimeHandleChangeProps extends DateHandleChangeProps {}
