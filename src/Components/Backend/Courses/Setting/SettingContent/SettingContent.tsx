import React from 'react';
import { iconplusimg } from '../../../../images';

const SettingContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold leading-6 text-gray-900">Settings</h1>
      
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">Basic Settings</h2>
        <div className="flex p-4 bg-white border border-gray-300 rounded-lg">
          <div className="flex flex-col w-full">
            <label className="text-sm font-normal leading-6 text-gray-600">Course Status</label>
            <div className="text-base font-normal leading-6 text-green-600">Active</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">What are the requirements for taking your course?</h2>
        <div className="flex p-4 bg-white border border-gray-300 rounded-lg">
          <div className="text-base font-normal leading-6 text-gray-600">Requirements</div>
        </div>
      </div>

      {/* Moved the Add More Requirements button in the middle */}
      <button className="flex items-center py-2 px-6 bg-transparent border-none cursor-pointer">
        <span className="text-sm font-medium leading-6 text-blue-600">Add More Requirements</span>
        <img src={iconplusimg} alt="plus icon" className="ml-2 w-6 h-6" />
      </button>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">Who is this course for?</h2>
        <div className="flex p-4 bg-white border border-gray-300 rounded-lg">
          <div className="text-base font-normal leading-6 text-gray-600">Example: Designers</div>
        </div>
      </div>
    </div>
  );
};

export default SettingContent;
