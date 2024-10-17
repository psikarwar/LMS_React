import React from 'react';

interface BannerProps {
  iconPath: string;
  amount: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ iconPath, amount, description }) => (
  <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg">
    <img src={iconPath} alt="icon" className="mr-4" />
    <div>
      <p className="font-semibold text-2xl text-gray-900">{amount}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Banner;

// import React from 'react';
// import './Banner.css';

// interface BannerProps {
//   iconPath: string;
//   amount: string;
//   description: string;
// }

// const Banner: React.FC<BannerProps> = ({ iconPath, amount, description }) => (
//   <div className="banner">
//     <img src={iconPath} alt="icon" />
//     <div>
//       <p className="amount">{amount}</p>
//       <p className="description">{description}</p>
//     </div>
//   </div>
// );

// export default Banner;
