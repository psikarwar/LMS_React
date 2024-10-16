import React, { useState } from 'react';

const CreateCouponTabs: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<'Draft' | 'Save' | 'Publish' | null>(null);

  return (
    <div className="ml-80 flex items-center justify-between">
      <div className="text-gray-900 font-semibold text-lg">Coupons / Create coupon</div>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedButton('Draft')}
          className={`px-6 py-2 rounded-lg border ${
            selectedButton === 'Draft' ? 'bg-gray-200' : 'bg-white'
          } border-gray-300 text-gray-900 font-medium text-sm`}
        >
          Draft
        </button>
        <button
          onClick={() => setSelectedButton('Save')}
          className={`px-6 py-2 rounded-lg ${
            selectedButton === 'Save' ? 'bg-green-600' : 'bg-green-500'
          } text-white font-medium text-sm`}
        >
          Save
        </button>
        <button
          onClick={() => setSelectedButton('Publish')}
          className={`px-6 py-2 rounded-lg ${
            selectedButton === 'Publish' ? 'bg-blue-600' : 'bg-blue-500'
          } text-white font-medium text-sm`}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateCouponTabs;
