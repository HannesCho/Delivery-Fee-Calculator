import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberInput from "../components/input/NumberInput";
import InputLabel from "../components/input/InputLabel";
import DateInput from "../components/input/DateInput";
import TimeInput from "../components/input/TimeInput";
import IncrementBtn from "../components/button/IncrementBtn";
import DecrementBtn from "../components/button/DecrementBtn";
import ShowErrorText from "../components/error/ShowErrorText";
import { FeeDTO } from "../types/FeeDTO";
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

const Calculator = () => {
  const [cartValue, setCartValue] = useState("");
  const [deliveryDistance, setDeliveryDistance] = useState("");
  const [amountOfItem, setAmountOfItem] = useState("");
  const [dateString, setDateString] = useState(dateToString(new Date()));
  const [timeString, setTimeString] = useState(timeToString(new Date()));
  const [totalFee, setTotalFee] = useState(0);
  const navigate = useNavigate();

  const [error1, setError1] = useState(false);
  const [showErrorText1, setShowErrorText1] = useState(false);
  const [error2, setError2] = useState(false);
  const [showErrorText2, setShowErrorText2] = useState(false);
  const [error3, setError3] = useState(false);
  const [showErrorText3, setShowErrorText3] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

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
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const feeDTO: FeeDTO = {
      value: totalFee,
    };
    try {
      navigate("/checkedout", { state: feeDTO });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="custom-h-cal h-full flex items-center justify-center pb-14">
      <div className="custom-font w-full grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 h-full border-8 border-black rounded-3xl z-20">
        <div className="p-6 mx-auto w-full col-span-2">
          <div className="h-16 mb-4 flex items-center col-span-3 grid-no-1">
            <FontAwesomeIcon
              icon={["fas", "calculator"]}
              className="text-yellow-400 h-10 mr-4"
            />
            <div className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl">
              Delivery Fee Calculator
            </div>
          </div>
          <div className="rows">
            <InputLabel name="Cart Value" />
            <div className="flex flex-col">
              <NumberInput
                name="Cart Value"
                value={cartValue}
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
              {ShowErrorText({ showErrorText: showErrorText1 })}
            </div>
            <div className="btns">
              <IncrementBtn value={cartValue} setState={setCartValue} />
              <DecrementBtn value={cartValue} setState={setCartValue} />
            </div>
          </div>
          <div className="rows">
            <InputLabel name="Delivery Distance" />
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
              {ShowErrorText({ showErrorText: showErrorText2 })}
            </div>
            <div className="btns">
              <IncrementBtn
                value={deliveryDistance}
                setState={setDeliveryDistance}
              />
              <DecrementBtn
                value={deliveryDistance}
                setState={setDeliveryDistance}
              />
            </div>
          </div>
          <div className="rows">
            <InputLabel name="Amount of Item" />
            <div className="flex flex-col">
              <NumberInput
                name="Amount of Item"
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
              {ShowErrorText({ showErrorText: showErrorText3 })}
            </div>
            <div className="btns">
              <IncrementBtn value={amountOfItem} setState={setAmountOfItem} />
              <DecrementBtn value={amountOfItem} setState={setAmountOfItem} />
            </div>
          </div>
          <div className="rows">
            <InputLabel name="Date" />
            <div className="flex flex-col">
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
        <div className="p-6 h-full bg-gray-700 rounded-r-2xl z-0">
          <div className="h-16 flex items-end text-white text-lg lg:text-2xl mb-4">
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
                ? "€ Not applied"
                : `€ *${fridayRushRate} Applied`}
            </div>
          </div>
          <div className="h-6 m-4 border-b"></div>
          <div className="rows-partial">
            <div className="col-span-2 text-4xl text-white text-center">
              Total
            </div>
            <div
              className="text-3xl text-white text-end mr-4"
              data-testid="totalFee"
            >
              € {totalFee}
            </div>
          </div>

          <div className="col-span-3 flex justify-end items-end">
            <form onSubmit={handleSubmit}>
              <button className="yellow-btn">Check Out →</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
