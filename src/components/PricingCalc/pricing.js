import React, { useEffect, useState } from 'react';

const PricingCalculator = ({ setTotalPrice, setCalculatorData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [address, setAddress] = useState('');
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (startDate && endDate && address && qty > 0) {
      // Calculate the duration between start and end dates in days
      const duration = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      
      // Define your base price or fetch it from some other part of your app
      const basePrice = 50;

      // Perform your price calculation logic here
      const calculatedPrice = duration * basePrice * qty;
      setTotalPrice(calculatedPrice);
      setCalculatorData({
        startDate,
        endDate,
        deliveryAddress: address,
        quantity: qty,
      });
    }
  }, [startDate, endDate, address, qty, setTotalPrice, setCalculatorData]);

  return (
    <div>
      <label>
        Quantity:
        <input type="number" onChange={(e) => setQty(e.target.value)} value={qty} />
      </label>
      <label>
        Start Date:
        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <label>
        Delivery Address:
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </label>
    </div>
  );
};

export default PricingCalculator;
