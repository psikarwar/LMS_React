// src/Components/Frontend/ShoppingButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Link to="/ordercom">
      <button
        onClick={onClick}
        className="flex items-center justify-center w-full max-w-[282px] h-[48px] bg-[#020617] text-white rounded-lg text-sm sm:text-base font-medium leading-6 font-inter px-4 sm:px-6 py-2 cursor-pointer mt-4 mx-auto" // Changed ml-4 to mx-auto for centering
      >
        Proceed to Checkout
      </button>
    </Link>
  );
};

export default ShoppingButton;
