// import React from 'react';
// import './Table.css';

// const Table: React.FC = () => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Order ID</th>
//           <th>Customer</th>
//           <th>Type</th>
//           <th>Date</th>
//           <th>Status</th>
//           <th>Commission</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>#254841</td>
//           <td>Dianne Russell</td>
//           <td>Student</td>
//           <td>25 Jan 2022</td>
//           <td>Received</td>
//           <td>$95.00</td>
//         </tr>
//         {/* Add more rows as needed */}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
// import React from 'react';

// interface Order {
//   id: string;
//   customer: string;
//   type: string;
//   date: string;
//   status: string;
//   commission: string;
// }

// const Table: React.FC = () => {
//   const orders: Order[] = [
//     { id: '#254841', customer: 'Dianne Russell', type: 'Student', date: '25 Jan 2022', status: 'Received', commission: '$95.00' },
//     { id: '#254842', customer: 'John Doe', type: 'Regular', date: '26 Jan 2022', status: 'Pending', commission: '$50.00' },
//     { id: '#254843', customer: 'Jane Smith', type: 'Student', date: '27 Jan 2022', status: 'Received', commission: '$75.00' },
//     { id: '#254844', customer: 'Michael Johnson', type: 'Regular', date: '28 Jan 2022', status: 'Cancelled', commission: '$0.00' },
//     { id: '#254845', customer: 'Emily Davis', type: 'Student', date: '29 Jan 2022', status: 'Received', commission: '$100.00' },
//     // Add more orders as needed
//   ];

//   return (
//     <table className="min-w-full border-collapse ml-60">
//       <thead>
//         <tr className="bg-white text-gray-800">
//           <th className="px-4 py-2 border-b border-gray-300">Order ID</th>
//           <th className="px-4 py-2 border-b border-gray-300">Customer</th>
//           <th className="px-4 py-2 border-b border-gray-300">Type</th>
//           <th className="px-4 py-2 border-b border-gray-300">Date</th>
//           <th className="px-4 py-2 border-b border-gray-300">Status</th>
//           <th className="px-4 py-2 border-b border-gray-300">Commission</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <tr key={order.id} className="hover:bg-gray-100">
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.id}</td>
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.customer}</td>
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.type}</td>
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.date}</td>
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.status}</td>
//             <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.commission}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;



import React from 'react';

interface Order {
  id: string;
  customer: string;
  type: string;
  date: string;
  status: string;
  commission: string;
}

const Table: React.FC = () => {
  const orders: Order[] = [
    { id: '#254841', customer: 'Dianne Russell', type: 'Student', date: '25 Jan 2022', status: 'Received', commission: '$95.00' },
    { id: '#254842', customer: 'John Doe', type: 'Regular', date: '26 Jan 2022', status: 'Pending', commission: '$50.00' },
    { id: '#254843', customer: 'Jane Smith', type: 'Student', date: '27 Jan 2022', status: 'Received', commission: '$75.00' },
    { id: '#254844', customer: 'Michael Johnson', type: 'Regular', date: '28 Jan 2022', status: 'Cancelled', commission: '$0.00' },
    { id: '#254845', customer: 'Emily Davis', type: 'Student', date: '29 Jan 2022', status: 'Received', commission: '$100.00' },
    // Add more orders as needed
  ];

  return (
    <div className="overflow-x-auto ml-64"> {/* Allow horizontal scrolling */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-white text-gray-800">
            <th className="px-4 py-3 border-b border-gray-300">Order ID</th>
            <th className="px-4 py-3 border-b border-gray-300">Type</th>
            <th className="px-4 py-3 border-b border-gray-300">Customer</th>
            <th className="px-4 py-3 border-b border-gray-300">Date</th>
            <th className="px-4 py-3 border-b border-gray-300">Status</th>
            <th className="px-4 py-3 border-b border-gray-300">Commission</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.id}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.customer}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.type}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.date}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.status}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-900">{order.commission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
