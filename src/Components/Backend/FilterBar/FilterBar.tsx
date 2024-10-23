import React from 'react';
import { icondown } from '../../images';




const FilterBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4 gap-4">
      <div className="flex items-center gap-2">
        <img src={icondown} alt="checkbox" />
        <span className="font-normal text-lg text-gray-800">Has a Comment</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={icondown} alt="checkbox" />
        <span className="font-normal text-lg text-gray-800">Not Answered</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal text-lg text-gray-800">Rating:</span>
        <span className="font-normal text-lg text-gray-800">
          All <img src={icondown} alt="dropdown" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal text-lg text-gray-800">Sort by:</span>
        <span className="font-normal text-lg text-gray-800">
          Newest First <img src={icondown} alt="dropdown" />
        </span>
      </div>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg border-none cursor-pointer">
        Export to CSV
      </button>
    </div>
  );
};

export default FilterBar;
