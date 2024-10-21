import React from 'react';

const OrderHeader: React.FC = () => {
  return (
    <header className="h-16 bg-gray-900 flex justify-between items-center px-4 md:px-5">
      <div className="flex items-center gap-2">
        <img src="./assets/logo.svg" alt="Logo" className="w-8 h-10" />
        <span className="font-inter font-medium text-white text-base md:text-sm">Byway</span>
      </div>
      <div className="flex items-center gap-2">
        <img src="./assets/phosphor-icons-star.svg" alt="Star Icon" className="w-5 h-5" />
        <span className="font-inter font-medium text-white text-sm md:text-xs">Provide Rating</span>
      </div>
    </header>
  );
};

export default OrderHeader;
