import React from 'react';
import LineChart from '../LineChart'; // Adjust path if needed

const MainLineChart: React.FC = () => {
  // Example data for the line chart
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const datasets = [
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
    },
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
    <div>
      <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
      
      <LineChart labels={labels} datasets={datasets} canvasWidth="max-w-xl" canvasHeight="h-80" />
    </div>
  );
};

export default MainLineChart;
