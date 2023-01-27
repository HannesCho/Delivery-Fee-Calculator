import { useEffect, useRef, useState } from "react";
import NumberInput from "../components/NumberInput";
import feeCalculator from "../utils/feeCalculator";
import InputLabel from "../components/InputLabel";
import IncrementBtn from "../components/IncrementBtn";
import DecrementBtn from "../components/DecrementBtn";
import handleChange from "../utils/handleChange";
import handleBlur from "../utils/handleBlur";
import { Link, useNavigate } from "react-router-dom";
import { FeeDTO } from "../types/FeeDTO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DateInput from "../components/DateInput";
import TimeInput from "../components/TimeInput";
import timeToString from "../utils/timeToString";
import dateToString from "../utils/dateToString";
import dateHandleChange from "../utils/dateHandleChange";
import timeHandleChange from "../utils/timeHandleChange";

const Calculator = () => {
  const [cartValue, setCartValue] = useState("");
  const [deliveryDistance, setDeliveryDistance] = useState("");
  const [amountOfItem, setAmountOfItem] = useState("");
  const [now, setNow] = useState(new Date());
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

  // update the time and date.
  useEffect(() => {
    setInterval(() => setNow(new Date()), 60000);
    setInterval(() => setDateString(dateToString(new Date())), 360000);
    setInterval(() => setTimeString(timeToString(new Date())), 60000);
  }, []);

  // realtime calculator.
  useEffect(() => {
    setTotalFee(feeCalculator(cartValue, deliveryDistance, amountOfItem, now));
  }, [cartValue, deliveryDistance, amountOfItem, now]);

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
    <div className="items-center justify-center p-12 pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-3 ">
        <div className="grid mx-auto w-full w-[600px] sm:w-[700px] grid-cols-3 grid-rows-7 justify-items-start items-center col-span-2">
          <div className="flex items-center col-span-3">
            <FontAwesomeIcon
              icon={["fas", "calculator"]}
              className="text-yellow-400 h-10 mr-4"
            />
            <div className="home-font text-4xl">Delivery Fee Calculator</div>
          </div>
          <InputLabel name="Cart Value" />
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
            showErrorText={showErrorText1}
            innerRef={ref}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleBlur({
                event: e,
                ref,
                error: error1,
                setError: setError1,
                setShowErrorText: setShowErrorText1,
              })
            }
          />
          <div>
            <IncrementBtn value={cartValue} setState={setCartValue} />
            <DecrementBtn value={cartValue} setState={setCartValue} />
          </div>
          <InputLabel name="Delivery Distance" />
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
            showErrorText={showErrorText2}
            innerRef={ref}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleBlur({
                event: e,
                ref,
                error: error2,
                setError: setError2,
                setShowErrorText: setShowErrorText2,
              })
            }
          />
          <IncrementBtn
            value={deliveryDistance}
            setState={setDeliveryDistance}
          />
          <DecrementBtn
            value={deliveryDistance}
            setState={setDeliveryDistance}
          />
          <div></div>
          <InputLabel name="Amount of Item" />
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
            showErrorText={showErrorText3}
            innerRef={ref}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleBlur({
                event: e,
                ref,
                error: error3,
                setError: setError3,
                setShowErrorText: setShowErrorText3,
              })
            }
          />
          <IncrementBtn value={amountOfItem} setState={setAmountOfItem} />
          <DecrementBtn value={amountOfItem} setState={setAmountOfItem} />
          <InputLabel name="Date" />
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
          <div>{totalFee}</div>
        </div>
        <div className="grid grid-rows-6 grid-cols-3 h-full bg-gray-700">
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3 flex justify-end items-end">
            <form
              onSubmit={handleSubmit}
              className="shadow-lg h-auto w-60 flex rounded-lg mr-4 mb-2"
            >
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 mt-4 mb-2 text-black p-3 rounded-lg font-semibold text-lg">
                <Link to="/checkedout">Check Out →</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
