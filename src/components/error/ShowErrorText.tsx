import { ErrorTextProps } from "../../types/ErrorTextProps";

const ShowErrorText = ({ showErrorText }: ErrorTextProps) => {
  return (
    <>
      {showErrorText && (
        <p className="text-sm text-rose-600" role="alert">
          Please make sure <br></br>
          you've entered a <strong>number</strong>
        </p>
      )}
    </>
  );
};

export default ShowErrorText;
