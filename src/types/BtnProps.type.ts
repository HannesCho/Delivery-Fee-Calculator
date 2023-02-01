export interface BtnProps {
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  max?: string;
  min?: string;
}
