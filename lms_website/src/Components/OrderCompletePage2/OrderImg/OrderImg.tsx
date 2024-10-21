import React from 'react';

const OrderImg: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl h-auto overflow-hidden rounded-lg">
      <img 
        src="./assets/frame-427318906.svg" 
        alt="Video Thumbnail" 
        className="w-full h-auto rounded-lg" 
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="w-12 h-12 md:w-16 md:h-16 bg-white/80 rounded-full text-black text-3xl flex justify-center items-center hover:bg-white transition duration-300">
          ▶
        </button>
      </div>
    </div>
  );
};

export default OrderImg;
