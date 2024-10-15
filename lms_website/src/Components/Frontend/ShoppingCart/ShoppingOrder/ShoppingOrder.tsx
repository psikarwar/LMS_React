// src/Components/Frontend/ShoppingOrder/ShoppingOrder.tsx
import React from 'react';

interface OrderDetailsProps {
  price: string;
  discount: string;
  tax: string;
  total: string;
}

const ShoppingOrder: React.FC<OrderDetailsProps> = ({
  price,
  discount,
  tax,
  total,
}) => {
  return (
    <div className="flex flex-col w-[330px] gap-2">
      <div className="font-semibold text-xl text-gray-800">Order Details</div>
      <div className="bg-gray-100 rounded-lg border border-gray-300 p-4 flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <span className="font-normal text-base text-gray-800">Price</span>
          <span className="font-semibold text-lg text-gray-800 text-right">{price}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="font-normal text-base text-gray-800">Discount</span>
          <span className="font-semibold text-lg text-gray-800 text-right">{discount}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="font-normal text-base text-gray-800">Tax</span>
          <span className="font-semibold text-lg text-gray-800 text-right">{tax}</span>
        </div>
        <img src="./assets/line-23.svg" alt="separator" className="w-full" />
        <div className="flex justify-between w-full pt-2 border-t border-gray-300">
          <span className="font-normal text-lg text-gray-800">Total</span>
          <span className="font-semibold text-xl text-gray-800 text-right">{total}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingOrder;
