import React from 'react';
import CustomerDetail from './CustomerDetail/CustomerDeatil'; // Assuming both files are in the same directory

const data = [
  { id: 1, name: 'Ronald Richards', type: 'Student', country: 'India', joined: '15 May 2020 8:00 am', totalAmount: '$ 500.00', lastOrder: '12542' },
  { id: 2, name: 'Darlene Robertson', type: 'Student', country: 'India', joined: '15 May 2020 8:30 am', totalAmount: '$ 500.00', lastOrder: '46540' },
  { id: 3, name: 'Jerome Bell', type: 'Teacher', country: 'Sri Lanka', joined: '15 May 2020 9:30 am', totalAmount: '$ 500.00', lastOrder: '68745' },
  { id: 4, name: 'Kristin Watson', type: 'Student', country: 'India', joined: '15 May 2020 8:00 am', totalAmount: '$ 500.00', lastOrder: '34475' },
  { id: 5, name: 'Bessie Cooper', type: 'Teacher', country: 'Sri Lanka', joined: '15 May 2020 9:00 am', totalAmount: '$ 500.00', lastOrder: '72145' },
  { id: 6, name: 'Cameron Williamson', type: 'Student', country: 'India', joined: '15 May 2020 8:30 am', totalAmount: '$ 500.00', lastOrder: '97451' },
];

const Customer: React.FC = () => {
  return (
    <div className="ml-80 container mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Customer Details</h1>
      <CustomerDetail data={data} />
    </div>
  );
};

export default Customer;
