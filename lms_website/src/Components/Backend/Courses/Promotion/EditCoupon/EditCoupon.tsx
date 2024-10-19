import React from 'react';
import EditCouponTabs from './EditCouponTabs/EditCouponTabs'; // Adjust path if necessary
import CouponInfo from './CouponInfo/CouponInfo'; // Import CouponInfo component

const EditCoupon: React.FC = () => {
  return (
    <div className="p-6">
      <EditCouponTabs />
      {/* You can add other content related to editing the coupon here */}
      <CouponInfo /> {/* Add CouponInfo component below EditCouponTabs */}
    </div>
  );
};

export default EditCoupon;
