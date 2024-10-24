import React from 'react';
import EditCouponTabs from './EditCouponTabs/EditCouponTabs'; // Adjust path if necessary
import CouponInfo from './CouponInfo/CouponInfo'; // Import CouponInfo component

const EditCoupon: React.FC = () => {
  return (
    <div className="p-4 md:p-6"> {/* Adjust padding for responsiveness */}
      <EditCouponTabs />
      {/* Responsive container for coupon information */}
      <div className="mt-4 md:mt-6">
        <CouponInfo />
      </div>
    </div>
  );
};

export default EditCoupon;
