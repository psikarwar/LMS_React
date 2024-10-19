// Dashboard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Pending',
        data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Course</button>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">$1K</p>
          <p>Life Time Courses Commission</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">$800.0</p>
          <p>Life Time Received Commission</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">$200.00</p>
          <p>Life Time Pending Commission</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Life Time Sales</h2>
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-5 gap-6">
          {['Total Reviews', '1 star', '2 star', '3 star', '4 star', '5 star'].map((reviewType, idx) => (
            <div key={idx} className="text-center">
              <p className="font-bold">1000</p>
              <p>{reviewType} reviews</p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow-md">
              <p className="text-sm bg-gray-200 inline-block px-2 py-1 rounded-full mb-2">Free</p>
              <p className="font-bold">$50.00</p>
              <p>13 Chapters</p>
              <p>254 Orders</p>
              <p>25 Certificates</p>
              <p>25 Reviews</p>
              <p>500 Added to Shelf</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
