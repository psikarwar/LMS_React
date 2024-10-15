// src/Components/Frontend/ShoppingButton.tsx
import React from 'react';

const ShoppingButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[282px] h-[48px] bg-[#020617] text-white rounded-lg text-sm font-medium leading-6 font-inter px-6 py-2 cursor-pointer"
    >
      Proceed to Checkout
    </button>
  );
};

export default ShoppingButton;
