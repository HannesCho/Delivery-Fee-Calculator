import { ErrorTextProps } from "../../types/ErrorTextProps.type";

const ShowErrorText = ({ showErrorText, float }: ErrorTextProps) => {
  return (
    <>
      {float
        ? showErrorText && (
            <p className="error-text" role="alert">
              Invalid input (numbers up to the 2nd decimal place only)
            </p>
          )
        : showErrorText && (
            <p className="error-text" role="alert">
              Invalid input (whole numbers only)
            </p>
          )}
    </>
  );
};

export default ShowErrorText;
