import React from 'react';
import uparrow from '../../../../../assets/icon-chevron-up.svg'
const banners = [
  { value: '+ $24,340', label: 'Total Profits', change: '8%' },
  { value: '+ $98.76', label: 'Last Transaction', change: '8%' },
  { value: '- $103.52', label: 'Debit', change: '8%' },
];

const AnalyticsBanner: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {banners.map((banner, index) => (
        <div key={index} className="bg-white p-6 shadow-md rounded-lg">
          <div className="text-2xl font-bold mb-2">{banner.value}</div>
          <div className="text-gray-500 mb-4">{banner.label}</div>
          <div className="flex items-center text-green-500">
            <img src={uparrow} alt="Change" className="h-5 w-5 mr-2" />
            <span>{banner.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsBanner;
