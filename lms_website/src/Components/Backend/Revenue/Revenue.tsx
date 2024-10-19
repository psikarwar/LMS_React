import React from 'react';
import AnalyticsBanner from './AnalyticsBanner';
import Transactions from './Transactions';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Revenue Analytics</h1>
        <img src="./assets/icon-horizontal-dots.svg" alt="Options" className="h-6 w-6 cursor-pointer" />
      </div>
      <AnalyticsBanner />
      <Transactions />
    </div>
  );
};

export default Dashboard;
