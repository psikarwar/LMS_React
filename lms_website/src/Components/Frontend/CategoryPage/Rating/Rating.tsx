import React from 'react';

const Rating: React.FC = () => {
  return (
    <div className="flex flex-col w-[273px] gap-5">
      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex justify-between items-center font-inter font-medium text-base text-slate-900 cursor-pointer">
          <span>Rating</span>
          <img src="./assets/icon-chevron-up.svg" alt="Chevron" />
        </div>
        <div className="mt-2.5">
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="./assets/icon.svg" alt="Star" />
            <img src="./assets/icon-2.svg" alt="Star" />
            <img src="./assets/icon-3.svg" alt="Star" />
            <img src="./assets/icon-4.svg" alt="Star" />
            <img src="./assets/icon-5.svg" alt="Star" />
          </div>
          {/* Repeat the stars row with different star images */}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex justify-between items-center font-inter font-medium text-base text-slate-900 cursor-pointer">
          <span>Number of Chapters</span>
          <img src="./assets/icon-chevron-up-2.svg" alt="Chevron" />
        </div>
        <div className="mt-2.5">
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="./assets/checkbox.svg" alt="Checkbox" />
            <span>1-10</span>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="./assets/checkbox-2.svg" alt="Checkbox" />
            <span>10-15</span>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="./assets/checkbox-3.svg" alt="Checkbox" />
            <span>15-20</span>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="./assets/checkbox-4.svg" alt="Checkbox" />
            <span>20-25</span>
          </div>
          <div className="flex items-center cursor-pointer font-medium text-sm text-blue-600">
            <span className="mr-2">See More</span>
            <img src="./assets/icon-down-chevron.svg" alt="Chevron Down" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex justify-between items-center font-inter font-medium text-base text-slate-900 cursor-pointer">
          <span>Price</span>
          <img src="./assets/icon-chevron-up-3.svg" alt="Chevron" />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex justify-between items-center font-inter font-medium text-base text-slate-900 cursor-pointer">
          <span>Category</span>
          <img src="./assets/icon-chevron-up-4.svg" alt="Chevron" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
