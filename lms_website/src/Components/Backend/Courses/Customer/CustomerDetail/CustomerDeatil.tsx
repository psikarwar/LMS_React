import React from 'react';
import { sortimg } from '../../../../images';

interface Customer {
  id: number;
  name: string;
  type: string;
  country: string;
  joined: string;
  totalAmount: string;
  lastOrder: string;
}

interface CustomerDetailProps {
  data: Customer[];
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ data }) => {
  const headers = ['ID', 'Customer', 'Type', 'Country', 'Joined', 'Total Amount', 'Last Order'];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-white text-gray-800 sticky top-0 z-10">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left text-sm font-medium border-b border-gray-200">
                <div className="flex items-center">
                  {header}
                  <img src={sortimg} alt="sort-icon" className="w-3 h-6 ml-2" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr key={customer.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 border-b border-gray-200">{customer.id}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.name}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.type}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.country}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.joined}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.totalAmount}</td>
              <td className="px-4 py-2 border-b border-gray-200">{customer.lastOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetail;
