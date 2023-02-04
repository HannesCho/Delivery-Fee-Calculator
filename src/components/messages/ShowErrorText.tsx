import { ErrorTextProps } from "../../types/ErrorTextProps.type";

const ShowErrorText = ({ showErrorText, float }: ErrorTextProps) => {
  return (
    <>
      {float
        ? showErrorText && (
            <p className="error-text" role="alert">
              Invalid input (only allowed number upto the 2 decimal points)
            </p>
          )
        : showErrorText && (
            <p className="error-text" role="alert">
              Invalid input (only allowed number without decimal points)
            </p>
          )}
    </>
  );
};

export default ShowErrorText;
