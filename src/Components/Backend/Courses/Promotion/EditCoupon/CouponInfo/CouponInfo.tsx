import React from 'react';
import { downicon10img, downicon2img, downicon3img, downicon4img, downicon5img, downicon7img, downicon8img, downicon9img, downiconimg } from '../../../../../images';

const CouponInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Coupon Information</div>
        <InputField label="Coupon Status" value="Active" icon={downiconimg} />
        <InputField label="Coupon Name" value="20% Flat off for first 100 Students." />
        <InputField label="Description" value="Buy NCERT Solutions for Class 12 Chemistry and Get 20% off on your course. Only first hundred students can avail this offer. Hurry!" />
        <InputField label="Customer Group" value="General" icon={downicon2img} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Coupon Code</div>
        <InputField label="Coupon Category" value="Specific Coupon" icon={downicon3img} />
        <InputField label="Coupon Code" value="NCEFLAT20" />
        <CheckboxField label="Use auto generation" />
      </div>

      <div className="flex flex-col gap-2">
        <InputField label="Coupon Quantity" value="100" />
        <InputField label="Uses per customer" value="1" />
        <InputField label="Priority" value="High" />
        <InputField label="Actions" value="Fixed Amount of discount for whole cart" icon={downicon4img} />
        <InputField label="Select Discount Type" value="Amount" icon={downicon5img} />
        <InputField label="Enter Discount Amount" value="$10" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Date & Time</div>
        <div className="flex flex-wrap gap-4">
          <DateTimeField label="Starting Date" value="DD/MM/YYYY" icon={downicon7img} />
          <DateTimeField label="Starting Time" value="10:30 AM" icon={downicon8img} />
          <DateTimeField label="Ending Date" value="DD/MM/YYYY" icon={downicon9img} />
          <DateTimeField label="Ending Time" value="10:30 AM" icon={downicon10img} />
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string; value: string; icon?: string }> = ({ label, value, icon }) => (
  <div className="flex flex-col p-4 rounded-lg border border-gray-200 bg-white">
    <div className="text-gray-800 font-normal text-sm">{label}</div>
    <div className="flex items-center justify-between">
      <input
        type="text"
        value={value}
        readOnly
        className="font-normal text-base text-gray-900 focus:outline-none flex-grow"
      />
      {icon && <img src={`./assets/${icon}`} className="w-6 h-6" alt="" />}
    </div>
  </div>
);

const CheckboxField: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center">
    <input type="checkbox" className="w-6 h-6 mr-2" />
    <label className="text-gray-500 text-sm">{label}</label>
  </div>
);

const DateTimeField: React.FC<{ label: string; value: string; icon: string }> = ({ label, value, icon }) => (
  <div className="flex flex-col w-80 p-4 rounded-lg border border-gray-200 bg-white">
    <div className="text-gray-800 font-normal text-sm">{label}</div>
    <div className="flex items-center justify-between">
      <input
        type="text"
        value={value}
        readOnly
        className="font-normal text-base text-gray-900 focus:outline-none flex-grow"
      />
      <img src={`./assets/${icon}`} className="w-6 h-6" alt="" />
    </div>
  </div>
);

export default CouponInfo;
