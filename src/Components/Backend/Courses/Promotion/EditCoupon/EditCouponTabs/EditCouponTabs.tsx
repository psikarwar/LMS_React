import React from 'react';

const EditCouponTabs: React.FC = () => {
  return (
    <div className="ml-0 md:ml-40 lg:ml-80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
      <div className="font-inter font-semibold text-lg leading-6 text-gray-900">
        Coupons / Edit coupon
      </div>
      <div className="flex gap-2 md:gap-4">
        <button className="h-9 px-4 md:px-6 py-2 bg-white border border-gray-300 rounded-lg font-inter font-medium text-sm leading-7 text-gray-900 cursor-pointer">
          Draft
        </button>
        <button className="h-9 px-4 md:px-6 py-2 bg-green-600 rounded-lg font-inter font-medium text-sm leading-7 text-white cursor-pointer">
          Save
        </button>
        <button className="h-9 px-4 md:px-6 py-2 bg-blue-500 rounded-lg font-inter font-medium text-sm leading-7 text-white cursor-pointer">
          Publish
        </button>
      </div>
    </div>
  );
};

export default EditCouponTabs;
