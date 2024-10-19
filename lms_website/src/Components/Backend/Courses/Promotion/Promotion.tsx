import React from 'react';
import PromotionCoupon from './PromotionCoupon/PromotionCoupon'; // Existing import for PromotionCoupon
import LineChart from '../../../LineChart/LineChart'; // Existing import for LineChart
import TotalCoupons from './TotalCoupons/TotalCoupons';
import PromotionInfo from './PromotionInfo/PromotionInfo'; // Import the PromotionInfo component
import PromotionNext from './PromotionNext/PromotionNext'; // Import the new PromotionNext component

const Promotion: React.FC = () => {
  // Sample data for the LineChart component
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const datasets = [
    {
      label: 'Chosen Period',
      data: [0, 2000, 1000, 4000, 1000, 1000, 8000, 2000, 4000, 1000, 4000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      label: 'Last Period',
      data: [0, 2000, 1000, 4000, 1000, 1000, 8000, 2000, 8000, 2000, 2000, 0],
      borderColor: '#22c55e',
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
    },
  ];

  // Sample pagination values
  const totalResults = 22; // Example total results count
  const resultsPerPage = 10; // Example results per page

  return (
    <div className="p-4">
      {/* Existing PromotionCoupon component */}
      <PromotionCoupon
        label="Coupons"
        buttonText="Create New Coupon"
        iconSrc="./assets/icon-plus.svg" // Ensure the correct path to your icon
        buttonLink="/create-new-coupon"  // Link to the coupon creation page
      />

      {/* Existing LineChart component */}
      <div className="mt-8">
        <LineChart
          labels={labels}
          datasets={datasets}
          canvasWidth="max-w-lg"
          canvasHeight="h-64"
        />
      </div>

      {/* Existing TotalCoupons component */}
      <div className="mt-8">
        <TotalCoupons />
      </div>

      {/* Existing PromotionInfo component */}
      <div className="mt-8">
        <PromotionInfo />
      </div>

      {/* New PromotionNext component for pagination */}
      <div className="mt-8">
        <PromotionNext totalResults={totalResults} resultsPerPage={resultsPerPage} />
      </div>
    </div>
  );
};

export default Promotion;
