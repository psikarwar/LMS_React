import React from 'react';

const CouponInfo: React.FC = () => {
  return (
    <div className="ml-80 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Coupon Information</div>
        <InputField label="Coupon Status" value="Active" icon="icon-down-chevron.svg" />
        <InputField label="Coupon Name" value="20% Flat off for first 100 Students." />
        <InputField label="Description" value="Buy NCERT Solutions for Class 12 Chemistry and Get 20% off on your course. Only first hundred students can avail this offer. Hurry!" />
        <InputField label="Customer Group" value="General" icon="icon-down-chevron-2.svg" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Coupon Code</div>
        <InputField label="Coupon Category" value="Specific Coupon" icon="icon-down-chevron-3.svg" />
        <InputField label="Coupon Code" value="NCEFLAT20" />
        <CheckboxField label="Use auto generation" />
      </div>

      <div className="flex flex-col gap-2">
        <InputField label="Coupon Quantity" value="100" />
        <InputField label="Uses per customer" value="1" />
        <InputField label="Priority" value="High" />
        <InputField label="Actions" value="Fixed Amount of discount for whole cart" icon="icon-down-chevron-4.svg" />
        <InputField label="Select Discount Type" value="Amount" icon="icon-down-chevron-5.svg" />
        <InputField label="Enter Discount Amount" value="$10" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-gray-800 font-medium text-base">Date & Time</div>
        <div className="flex flex-wrap gap-4">
          <DateTimeField label="Starting Date" value="DD/MM/YYYY" icon="icon-down-chevron-7.svg" />
          <DateTimeField label="Starting Time" value="10:30 AM" icon="icon-down-chevron-8.svg" />
          <DateTimeField label="Ending Date" value="DD/MM/YYYY" icon="icon-down-chevron-9.svg" />
          <DateTimeField label="Ending Time" value="10:30 AM" icon="icon-down-chevron-10.svg" />
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
