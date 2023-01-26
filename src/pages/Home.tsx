import { useEffect, useState } from "react";
import ShowDate from "../components/ShowDate";
import Input from "../components/Input";
import feeCalculator from "../utils/feeCalculator";

const HomePage = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [amountOfItem, setAmountOfItem] = useState(0);
  const [now, setNow] = useState(new Date());
  const [totalFee, setTotalFee] = useState(0);
  const fridayRush: number = 1.22;

  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000);
  }, []);

  useEffect(() => {
    setTotalFee(
      feeCalculator(cartValue, deliveryDistance, amountOfItem, now, fridayRush)
    );
  }, [cartValue, deliveryDistance, amountOfItem, now]);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <Input
          title="Cart Value"
          value={cartValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setCartValue(e.currentTarget.valueAsNumber);
          }}
        />
        <Input
          title="Delivery Distance"
          value={deliveryDistance}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setDeliveryDistance(e.currentTarget.valueAsNumber);
          }}
        />
        <Input
          title="Amount of Item "
          value={amountOfItem}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setAmountOfItem(e.currentTarget.valueAsNumber);
          }}
        />
        <ShowDate now={now.toDateString()} />
        <span>{totalFee}</span>
      </div>
    </div>
  );
};

export default HomePage;
