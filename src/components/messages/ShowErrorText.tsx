import { ErrorTextProps } from "../../types/ErrorTextProps.type";

const ShowErrorText = ({ showErrorText, float }: ErrorTextProps) => {
  return (
    <>
      {float
        ? showErrorText && (
            <p className="error-text" role="alert">
              Please make sure <br></br>
              you've entered a <strong>Float number</strong>
              <br></br>
              allow upto the 2 decimal points
            </p>
          )
        : showErrorText && (
            <p className="error-text" role="alert">
              Please make sure <br></br>
              you've entered a <strong>Integer number</strong>
              <br></br>
              no decimal point
            </p>
          )}
    </>
  );
};

export default ShowErrorText;
