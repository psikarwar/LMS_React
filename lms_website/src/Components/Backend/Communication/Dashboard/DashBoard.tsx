// // Dashboard.tsx
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// // Register required components with ChartJS
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// const Dashboard: React.FC = () => {
//   // Labels for the months (1-12)
//   const chartData = {
//     labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
//     datasets: [
//       {
//         label: 'Life Time Sales',
//         data: [100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100], // Sample data
//         borderColor: '#4f46e5', // Blue line color
//         backgroundColor: 'rgba(79, 70, 229, 0.2)', // Blue background shading
//         fill: true,
//         tension: 0.4, // Smoother curves
//       },
//       {
//         label: '',
//         data: [50, 100, 150, 250, 300, 350, 450, 500, 600, 700, 800, 900], // Sample data
//         borderColor: '#22c55e', // Green line color
//         backgroundColor: 'rgba(34, 197, 94, 0.2)', // Green background shading
//         fill: true,
//         tension: 0.4, // Smoother curves
//       },
//       {
//         label: '',
//         data: [30, 50, 80, 150, 200, 250, 300, 350, 400, 450, 500, 550], // Sample data
//         borderColor: '#eab308', // Yellow line color
//         backgroundColor: 'rgba(234, 179, 8, 0.2)', // Yellow background shading
//         fill: true,
//         tension: 0.4, // Smoother curves
//       },
//     ],
//   };

//   // Options to configure the chart
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false, // For proper scaling
//     scales: {
//       x: {
//         grid: {
//           display: false, // Hides the vertical grid lines
//         },
//       },
//       y: {
//         grid: {
//           display: false, // Hides the horizontal grid lines
//         },
//         beginAtZero: true, // Ensure the y-axis starts at 0
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, // Hide the legend (the color rectangles)
//       },
//     },
//   };

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Course</button>
//       </div>

//       {/* Metrics Section */}
//      <div className="grid grid-cols-1 gap-3"> {/* Changed md:grid-cols-3 to grid-cols-1 */}
//   <div className="bg-white p-2 rounded-lg w-1/3 shadow-md">
//     <p className="text-xl font-bold">$1K</p>
//     <p>Life Time Courses Commission</p>
//   </div>
//   <div className="bg-white p-2 w-1/3 rounded-lg shadow-md">
//     <p className="text-xl font-bold">$800.0</p>
//     <p>Life Time Received Commission</p>
//   </div>
//   <div className="bg-white p-2 w-1/3 rounded-lg shadow-md">
//     <p className="text-xl font-bold">$200.00</p>
//     <p>Life Time Pending Commission</p>
//   </div>
// </div>


//       {/* Sales Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Life Time Sales</h2>
//         <div className="h-64">
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Reviews</h2>
//         <div className="grid grid-cols-5 gap-6">
//           {['Total Reviews', '1 star', '2 star', '3 star', '4 star', '5 star'].map((reviewType, idx) => (
//             <div key={idx} className="text-center">
//               <p className="font-bold">1000</p>
//               <p>{reviewType} reviews</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Courses Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {Array(3).fill(0).map((_, idx) => (
//             <div key={idx} className="border p-4 rounded-lg shadow-md">
//               <p className="text-sm bg-gray-200 inline-block px-2 py-1 rounded-full mb-2">Free</p>
//               <p className="font-bold">$50.00</p>
//               <p>13 Chapters</p>
//               <p>254 Orders</p>
//               <p>25 Certificates</p>
//               <p>25 Reviews</p>
//               <p>500 Added to Shelf</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
// import Maincourse from '../../Courses/maincourse'; // Importing Maincourse
import Badge from '../../Badge/Badge';

// Register required components with ChartJS
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
const coursesData = [
  {
    id: 1,
    title: "Beginner’s Guide to Design",
    price: "$50.00",
    certificates: 25,
    chapters: 13,
    reviews: 25,
    orders: 254,
    addedToShelf: 500,
    isFree: true,
  },
  {
    id: 2,
    title: "Advanced Design Techniques",
    price: "$100.00",
    certificates: 30,
    chapters: 18,
    reviews: 35,
    orders: 300,
    addedToShelf: 600,
    isFree: true,
  },
  {
    id: 3,
    title: "Mastering UI/UX Design",
    price: "$75.00",
    certificates: 20,
    chapters: 10,
    reviews: 40,
    orders: 280,
    addedToShelf: 520,
    isFree: true,
  },
];

const Dashboard: React.FC = () => {
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Life Time Sales',
        data: [100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100], // Sample data
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: '',
        data: [50, 100, 150, 250, 300, 350, 450, 500, 600, 700, 800, 900],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: '',
        data: [30, 50, 80, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        borderColor: '#eab308',
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Course</button>
      </div>

      {/* Sales Chart and Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Metrics Section */}
        <div className="space-y-3">
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
      </div>

      {/* Reviews Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
         <section className="flex flex-wrap gap-2 mb-6">
        <Badge label="Total Reviews" value="1000" />
        <Badge label="1 star reviews" value="100" color="#ef4444" />
        <Badge label="2 star reviews" value="100" color="#ca8a04" />
        <Badge label="3 star reviews" value="100" color="#facc15" />
        <Badge label="4 star reviews" value="100" color="#4ade80" />
        <Badge label="5 star reviews" value="100" color="#16a34a" />
      </section>
      </div>

      {/* Courses Section using Maincourse */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            {/* Chip for Free or Paid */}
            <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-4 ${course.isFree ? 'bg-gray-200 text-gray-900' : 'bg-blue-600 text-white'}`}>
              {course.isFree ? 'Free' : 'Paid'}
            </div>

            {/* Course Title */}
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <hr className="mb-4" />

            {/* Course Info */}
            <div className="space-y-4">
              {/* First Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.price}</strong>
                  <p className="text-sm text-gray-600">Price</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.certificates}</strong>
                  <p className="text-sm text-gray-600">Certificates</p>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.chapters}</strong>
                  <p className="text-sm text-gray-600">Chapters</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.reviews}</strong>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex justify-between">
                <div className="text-center">
                  <strong className="text-lg">{course.orders}</strong>
                  <p className="text-sm text-gray-600">Orders</p>
                </div>
                <div className="text-center">
                  <strong className="text-lg">{course.addedToShelf}</strong>
                  <p className="text-sm text-gray-600">Added to Shelf</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{/* Dynamically rendering the Maincourse component */}
    </div>
  );
};

export default Dashboard;
