import React from 'react';
import { iconfilter, search } from '../../images';

const transactions = [
  { customer: 'Jon Doe', date: '12/04/2024', type: 'Credit', amount: '$95.00' },
  { customer: 'Jane Smith', date: '11/03/2024', type: 'Debit', amount: '$120.00' },
  { customer: 'Bob Johnson', date: '10/02/2024', type: 'Credit', amount: '$75.50' },
  { customer: 'Alice Williams', date: '09/01/2024', type: 'Debit', amount: '$210.00' },
  { customer: 'Charlie Brown', date: '08/31/2024', type: 'Credit', amount: '$50.00' },
  { customer: 'Diana Prince', date: '07/29/2024', type: 'Debit', amount: '$135.25' },
  { customer: 'Clark Kent', date: '06/15/2024', type: 'Credit', amount: '$89.00' },
  { customer: 'Bruce Wayne', date: '05/20/2024', type: 'Debit', amount: '$300.00' },
  { customer: 'Selina Kyle', date: '04/12/2024', type: 'Credit', amount: '$45.00' },
  { customer: 'Barry Allen', date: '03/07/2024', type: 'Debit', amount: '$60.00' },
];

const Transactions: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search User"
              className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src={search}
              alt="Search"
              className="absolute right-2 top-2 h-5 w-5 text-gray-400"
            />
          </div>
          <div className="flex items-center cursor-pointer space-x-2">
            <span className="text-gray-700">Filter</span>
            <img src={iconfilter} alt="Filter" className="h-5 w-5" />
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Customer</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{transaction.customer}</td>
              <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  transaction.type.toLowerCase() === 'credit' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.type}
              </td>
              <td className="border border-gray-300 px-4 py-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
