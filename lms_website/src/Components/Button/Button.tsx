import React from 'react';

const Button: React.FC = () => {
  return (
    <button className="w-88 h-12 bg-slate-900 text-white font-inter font-medium text-sm leading-loose px-6 py-2.5 rounded-lg border-none cursor-pointer flex items-center justify-center hover:bg-slate-800">
      Proceed to Checkout
    </button>
  );
};

export default Button;
