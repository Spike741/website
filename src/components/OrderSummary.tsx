
import React from 'react';

interface OrderSummaryProps {
  total: number;
}

const OrderSummary = ({ total }: OrderSummaryProps) => {
  return (
    <div className="mb-6 bg-ivory-dark p-3 sm:p-4 rounded">
      <h2 className="font-medium text-base sm:text-lg mb-2">Order Summary</h2>
      <div className="flex justify-between font-bold text-lg sm:text-xl pt-2">
        <span>Total:</span>
        <span className="text-maroon">₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
