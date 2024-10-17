import React from 'react';
import CreateCouponTabs from './CreateCouponTabs/CreateCouponTabs'; // Adjust the import path if necessary
import CouponInfo from '../EditCoupon/CouponInfo/CouponInfo'; // Import the CouponInfo component

const CreateCoupon: React.FC = () => {
  return (
    <div className="ml-70 p-6">
      <CreateCouponTabs />
      {/* Add the CouponInfo component below */}
      <CouponInfo />
    </div>
  );
};

export default CreateCoupon;
