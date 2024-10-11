import React from 'react';

const OrderImg: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl h-auto overflow-hidden rounded-lg">
      <img 
        src="./assets/frame-427318906.svg" 
        alt="Video Thumbnail" 
        className="w-500 h-200 block rounded-lg" 
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="w-15 h-15 bg-white/80 rounded-full text-black text-2xl flex justify-center items-center hover:bg-white transition duration-300">
          ▶
        </button>
      </div>
    </div>
  );
};

export default OrderImg;
