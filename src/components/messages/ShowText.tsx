import { MessageProps } from "../../types/MessageProps.type";

const ShowText = ({ cartValue, totalFee }: MessageProps) => {
  return (
    <>
      {cartValue ? (
        Number(cartValue) > 100 && (
          <p className="show-text" role="alert">
            <span>Your Cart Value is over € 100</span>
            <span>Delivery Fee is free.</span>
          </p>
        )
      ) : (
        <></>
      )}
      {totalFee ? (
        totalFee >= 15 && (
          <p className="show-text" role="alert">
            <span>Total Delivery Fee is</span>
            <span>no more than € 15.</span>
          </p>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default ShowText;
