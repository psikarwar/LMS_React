import React from 'react';
import AnalyticsBanner from './AnalyticsBanner';
import Transactions from './Transactions';
import LineChart from '../../LineChart/LineChart';
import { iconhorizontal } from '../../images';

const Revenue: React.FC = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const datasets = [

      {
        label: '2024 Sales',
        data: [75, 60, 70, 90, 65, 60],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
      },
      {
        label: '2025 Sales',
        data: [69, 80, 70, 100, 56, 60],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
      },
    ];
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6" >
        <h1 className="text-2xl font-bold">Revenue Analytics</h1>
        <img src={iconhorizontal} alt="Options" className="h-6 w-6 cursor-pointer" />
      </div>
      <AnalyticsBanner />
      <LineChart labels={labels} datasets={datasets} canvasWidth="max-w-xl" canvasHeight="h-80" />

      <Transactions />
    </div>
  );
};

export default Revenue;
