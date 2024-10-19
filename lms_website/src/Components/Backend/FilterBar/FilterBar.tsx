import React from 'react';
import im1 from '../../../../../assets/rectangle-196.svg'
import im2 from '../../../../../assets/rectangle-197.svg'
import im3 from '../../../../../assets/icon-down.svg'
import im4 from '../../../../../assets/icon-down-2.svg'




const FilterBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4 gap-4">
      <div className="flex items-center gap-2">
        <img src={im1} alt="checkbox" />
        <span className="font-normal text-lg text-gray-800">Has a Comment</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={im2} alt="checkbox" />
        <span className="font-normal text-lg text-gray-800">Not Answered</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal text-lg text-gray-800">Rating:</span>
        <span className="font-normal text-lg text-gray-800">
          All <img src={im3} alt="dropdown" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal text-lg text-gray-800">Sort by:</span>
        <span className="font-normal text-lg text-gray-800">
          Newest First <img src={im4} alt="dropdown" />
        </span>
      </div>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg border-none cursor-pointer">
        Export to CSV
      </button>
    </div>
  );
};

export default FilterBar;
