import { useEffect, useState } from "react";
import ShowDate from "../components/ShowDate";
import NumberInput from "../components/NumberInput";
import feeCalculator from "../utils/feeCalculator";
import InputLabel from "../components/InputLabel";

const Calculator = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [amountOfItem, setAmountOfItem] = useState(0);
  const [now, setNow] = useState(new Date());
  const [totalFee, setTotalFee] = useState(0);

  useEffect(() => {
    setInterval(() => setNow(new Date()), 10000);
  }, []);

  useEffect(() => {
    setTotalFee(feeCalculator(cartValue, deliveryDistance, amountOfItem, now));
  }, [cartValue, deliveryDistance, amountOfItem, now]);

  return (
    <div className="flex items-center justify-center p-12 pb-14">
      <div className="grid mx-auto w-full max-w-[550px] grid-cols-3 grid-rows-6 justify-items-start items-center">
        <div>title</div>
        <div>input value</div>
        <div>result</div>
        <InputLabel title="Cart Value" />
        <NumberInput
          title="Cart Value"
          value={cartValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setCartValue(e.currentTarget.valueAsNumber);
          }}
        />
        <div></div>
        <InputLabel title="Delivery Distance" />
        <NumberInput
          title="Delivery Distance"
          value={deliveryDistance}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setDeliveryDistance(e.currentTarget.valueAsNumber);
          }}
        />
        <div></div>
        <InputLabel title="Amount of Item" />
        <NumberInput
          title="Amount of Item"
          value={amountOfItem}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setAmountOfItem(e.currentTarget.valueAsNumber);
          }}
        />
        <div></div>
        <div>Date</div>
        <ShowDate now={now.toDateString()} />
        <div>{totalFee}</div>
      </div>
    </div>
  );
};

export default Calculator;
