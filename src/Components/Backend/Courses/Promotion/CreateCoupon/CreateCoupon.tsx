import React from 'react';
import CreateCouponTabs from './CreateCouponTabs/CreateCouponTabs'; // Adjust the import path if necessary
import CouponInfo from '../EditCoupon/CouponInfo/CouponInfo'; // Import the CouponInfo component

const CreateCoupon: React.FC = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-6">
      <CreateCouponTabs />
      {/* Add the CouponInfo component below */}
      <CouponInfo />
    </div>
  );
};

export default CreateCoupon;
