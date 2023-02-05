import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberInput from "../components/input/NumberInput";
import InputLabel from "../components/input/InputLabel";
import DateInput from "../components/input/DateInput";
import TimeInput from "../components/input/TimeInput";
import IncrementBtn from "../components/button/IncrementBtn";
import DecrementBtn from "../components/button/DecrementBtn";
import ShowErrorText from "../components/messages/ShowErrorText";
import ShowText from "../components/messages/ShowText";
import basicSurcharge from "../utils/calc/basicSurcharge";
import basicDistanceFee from "../utils/calc/basicDistanceFee";
import additionalDistanceFee from "../utils/calc/additionalDistanceFee";
import additionalItems from "../utils/calc/additionalItems";
import extraBulkFee from "../utils/calc/extraBulkFee";
import fridayRush from "../utils/calc/fridayRush";
import feeCalculator from "../utils/calc/feeCalculator";
import handleChange from "../utils/handler/handleChange";
import dateHandleChange from "../utils/handler/dateHandleChange";
import timeHandleChange from "../utils/handler/timeHandleChange";
import handleBlur from "../utils/handler/handleBlur";
import timeToString from "../utils/converter/timeToString";
import dateToString from "../utils/converter/dateToString";
import { fridayRushRate } from "../data/constants";
import { FeeDTO } from "../types/FeeDTO.type";

const Calculator = () => {
  const [cartValue, setCartValue] = useState("");
  const [deliveryDistance, setDeliveryDistance] = useState("");
  const [amountOfItem, setAmountOfItem] = useState("");
  const [dateString, setDateString] = useState(dateToString(new Date()));
  const [timeString, setTimeString] = useState(timeToString(new Date()));
  const [totalFee, setTotalFee] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const [error1, setError1] = useState(false);
  const [showErrorText1, setShowErrorText1] = useState(false);
  const [error2, setError2] = useState(false);
  const [showErrorText2, setShowErrorText2] = useState(false);
  const [error3, setError3] = useState(false);
  const [showErrorText3, setShowErrorText3] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // variable for the user seleceted date and time
  const dateAndTime = dateString + " " + timeString + " UTC";

  // realtime calculator.
  useEffect(() => {
    setTotalFee(
      feeCalculator({ cartValue, deliveryDistance, amountOfItem, dateAndTime })
        .value
    );
  }, [
    cartValue,
    deliveryDistance,
    amountOfItem,
    dateString,
    timeString,
    dateAndTime,
  ]);

  // handle click the check out button.
  const handleSubmit = () => {
    const feeDTO: FeeDTO = {
      value: totalFee,
    };
    try {
      navigate("/checkedout", { state: feeDTO });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      cartValue &&
      cartValue !== "0" &&
      deliveryDistance &&
      deliveryDistance !== "0" &&
      amountOfItem &&
      amountOfItem !== "0" &&
      !error1 &&
      !error2 &&
      !error3
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [cartValue, deliveryDistance, amountOfItem, error1, error2, error3]);

  return (
    <div className="custom-h-cal h-full flex flex-col items-center justify-center pb-14">
      <div className="custom-sm-font h-full flex flex-col md:flex-row">
        <div className="p-6 w-[375px] md:w-[500px]">
          <div className="h-16 mb-4 flex items-center">
            <FontAwesomeIcon
              icon={["fas", "calculator"]}
              className="text-[#3F90D7] h-10 mr-4"
            />
            <div className="custom-lg-font text-xl md:text-3xl">
              Delivery Fee Calculator
            </div>
          </div>
          <div className="rows-start">
            <InputLabel name="Cart Value" />
          </div>
          <div className="rows">
            <div className="flex flex-col">
              <NumberInput
                name="Cart Value"
                value={cartValue}
                float={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event: e,
                    setState: setCartValue,
                    error: error1,
                    setError: setError1,
                  });
                }}
                min={0}
                error={error1}
                innerRef={ref}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur({
                    event: e,
                    error: error1,
                    setError: setError1,
                    setShowErrorText: setShowErrorText1,
                  })
                }
              />
              <div className="h-6 pl-4">
                {showErrorText1 ? (
                  ShowErrorText({
                    showErrorText: showErrorText1,
                    float: true,
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="btns">
              <IncrementBtn
                value={cartValue}
                setState={setCartValue}
                error={error1}
                setError={setError1}
                setShowErrorText={setShowErrorText1}
              />
              <DecrementBtn
                value={cartValue}
                setState={setCartValue}
                error={error1}
                setError={setError1}
                setShowErrorText={setShowErrorText1}
              />
            </div>
          </div>
          <div className="rows-start">
            <InputLabel name="Delivery Distance" />
          </div>
          <div className="rows">
            <div className="flex flex-col">
              <NumberInput
                name="Delivery Distance"
                value={deliveryDistance}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event: e,
                    setState: setDeliveryDistance,
                    error: error2,
                    setError: setError2,
                  });
                }}
                min={0}
                error={error2}
                innerRef={ref}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur({
                    event: e,
                    error: error2,
                    setError: setError2,
                    setShowErrorText: setShowErrorText2,
                  })
                }
              />
              <div className="h-6 pl-4">
                {showErrorText2 ? (
                  ShowErrorText({
                    showErrorText: showErrorText2,
                    float: false,
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="btns">
              <IncrementBtn
                value={deliveryDistance}
                setState={setDeliveryDistance}
                error={error2}
                setError={setError2}
                setShowErrorText={setShowErrorText2}
              />
              <DecrementBtn
                value={deliveryDistance}
                setState={setDeliveryDistance}
                error={error2}
                setError={setError2}
                setShowErrorText={setShowErrorText2}
              />
            </div>
          </div>
          <div className="rows-start">
            <InputLabel name="Number of Items" />
          </div>
          <div className="rows">
            <div className="flex flex-col">
              <NumberInput
                name="Number of Items"
                value={amountOfItem}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange({
                    event: e,
                    setState: setAmountOfItem,
                    error: error3,
                    setError: setError3,
                  });
                }}
                min={0}
                error={error3}
                innerRef={ref}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur({
                    event: e,
                    error: error3,
                    setError: setError3,
                    setShowErrorText: setShowErrorText3,
                  })
                }
              />
              <div className="h-6 pl-4">
                {showErrorText3 ? (
                  ShowErrorText({
                    showErrorText: showErrorText3,
                    float: false,
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="btns">
              <IncrementBtn
                value={amountOfItem}
                setState={setAmountOfItem}
                error={error3}
                setError={setError3}
                setShowErrorText={setShowErrorText3}
              />
              <DecrementBtn
                value={amountOfItem}
                setState={setAmountOfItem}
                error={error3}
                setError={setError3}
                setShowErrorText={setShowErrorText3}
              />
            </div>
          </div>
          <div className="rows-start">
            <InputLabel name="Date" />
          </div>
          <div className="rows">
            <div className="flex flex-row">
              <DateInput
                name="Date"
                value={dateString}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dateHandleChange({ event: e, setState: setDateString });
                }}
                min={dateToString(new Date())}
              />
              <TimeInput
                name="Time"
                value={timeString}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  timeHandleChange({ event: e, setState: setTimeString });
                }}
                min="10:00"
                max="24:00"
              />
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-32 w-[375px] md:w-[400px]">
          <div className="p-6 h-fit bg-white border border-4 border-black rounded-2xl">
            <div className="custom-lg-font h-16 flex text-black text-lg md:text-2xl mb-2">
              Fee Details
            </div>
            <div className="rows-partial">
              <div className="partial-fee-text">Basic Surcharge</div>
              <div className="partial-fee-value" data-testid="basicSurcharge">
                € {basicSurcharge(Number(cartValue)).value}
              </div>
            </div>
            <div className="rows-partial">
              <div className="partial-fee-text">
                <p>Basic Distance Fee</p>
                <p>Additional Distance Fee</p>
              </div>
              <div className="partial-fee-value">
                <div data-testid="basicDistanceFee">
                  € {basicDistanceFee(Number(deliveryDistance)).value}
                </div>
                <div data-testid="additionalDistanceFee">
                  € {additionalDistanceFee(Number(deliveryDistance)).value}
                </div>
              </div>
            </div>
            <div className="rows-partial">
              <div className="partial-fee-text">
                <p>Additional Items</p>
                <p>Extra Bulk Fee</p>
              </div>
              <div className="partial-fee-value">
                <div data-testid="additionalItems">
                  € {additionalItems(Number(amountOfItem)).value}
                </div>
                <div data-testid="extraBulkFee">
                  € {extraBulkFee(Number(amountOfItem)).value}
                </div>
              </div>
            </div>
            <div className="rows-partial">
              <div className="partial-fee-text">Friday Rush</div>
              <div className="partial-fee-value" data-testid="fridayRushRate">
                {fridayRush({ dateAndTime }).value === 1
                  ? "Not applied"
                  : `*${fridayRushRate} Applied`}
              </div>
            </div>
            <div className="m-4 border-b">
              <ShowText cartValue={cartValue} totalFee={totalFee} />
            </div>
            <div className="rows-partial">
              <div className="custom-lg-font col-span-2 text-2xl text-black text-center">
                Total
              </div>
              <div
                className="custom-lg-font text-2xl text-black text-end mr-4"
                data-testid="totalFee"
              >
                € {totalFee}
              </div>
            </div>
            <div className="col-span-3 flex justify-end items-end">
              <form onSubmit={handleSubmit}>
                {disabledBtn ? (
                  <>
                    <button className="cyan-btn-dis" disabled={disabledBtn}>
                      Check Out
                    </button>
                  </>
                ) : (
                  <>
                    <button className="cyan-btn" disabled={disabledBtn}>
                      Check Out
                    </button>
                    <div className="h-6"></div>
                  </>
                )}
              </form>
            </div>
            {disabledBtn ? (
              <p className="text-rose-700 text-end">
                * Please fill out the form.
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
