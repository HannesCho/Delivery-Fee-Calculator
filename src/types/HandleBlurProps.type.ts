export interface HandleBlurProps {
  event: React.ChangeEvent<HTMLInputElement>;
  ref: React.RefObject<HTMLElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrorText: React.Dispatch<React.SetStateAction<boolean>>;
}
