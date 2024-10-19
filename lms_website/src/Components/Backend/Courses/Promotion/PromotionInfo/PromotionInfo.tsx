import React from 'react';

interface Offer {
  offerName: string;
  code: string;
  amount: string;
  status: string;
  qty: number;
  redemptions: number;
}

const offersData: Offer[] = [
  { offerName: 'New Offer', code: 'BOGO22', amount: '$21', status: 'Expired', qty: 3000, redemptions: 2213 },
  { offerName: 'Buy 1 get 1', code: 'XMAS10', amount: '10%', status: 'Draft', qty: 100, redemptions: 0 },
  { offerName: 'Summer Sale', code: 'BFA', amount: '$25', status: 'Active', qty: 2000, redemptions: 1007 },
  { offerName: 'Offer', code: 'HAPPY20', amount: '20%', status: 'Active', qty: 7000, redemptions: 6531 },
  { offerName: 'New Offer', code: 'TOUR10', amount: '10%', status: 'Scheduled', qty: 500, redemptions: 0 },
];

const PromotionInfo: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white p-3 rounded-lg border border-gray-300">
          <input
            type="text"
            placeholder="Search User"
            className="border-none outline-none text-sm text-gray-700 flex-grow mr-3"
          />
          <img src="./assets/search.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium">Hide Stats</button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium">
            Filter
            <img src="./assets/icon-filter.svg" alt="Filter Icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-4 text-left font-semibold">Offer Name</th>
            <th className="p-4 text-left font-semibold">Code</th>
            <th className="p-4 text-left font-semibold">Amount</th>
            <th className="p-4 text-left font-semibold">Status</th>
            <th className="p-4 text-left font-semibold">Qty</th>
            <th className="p-4 text-left font-semibold">Redemptions</th>
          </tr>
        </thead>
        <tbody>
          {offersData.map((offer, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="p-4">{offer.offerName}</td>
              <td className="p-4">{offer.code}</td>
              <td className="p-4">{offer.amount}</td>
              <td className={`p-4 ${offer.status === 'Active' ? 'text-green-600' : offer.status === 'Expired' ? 'text-red-600' : offer.status === 'Scheduled' ? 'text-blue-600' : 'text-gray-600'}`}>
                {offer.status}
              </td>
              <td className="p-4">{offer.qty}</td>
              <td className="p-4">{offer.redemptions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromotionInfo;
