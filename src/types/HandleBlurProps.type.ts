export interface HandleBlurProps {
  event: React.ChangeEvent<HTMLInputElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrorText: React.Dispatch<React.SetStateAction<boolean>>;
}
