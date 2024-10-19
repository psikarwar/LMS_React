import React from 'react';

interface CardProps {
  header: string;
  subheader: string;
  percentage: string;
  iconSrc: string;
}

const Card: React.FC<CardProps> = ({ header, subheader, percentage, iconSrc }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-4 rounded-lg border border-gray-200 w-40">
      <div>
        <div className="font-semibold text-xl text-slate-900">{header}</div>
        <div className="font-normal text-sm text-slate-600">{subheader}</div>
      </div>
      <div className="flex items-center p-2 bg-gray-100 rounded-lg border border-gray-200 gap-1">
        <img src={iconSrc} alt="Up Arrow" className="w-6 h-6" />
        <span className="font-semibold text-xs text-green-600">{percentage}</span>
      </div>
    </div>
  );
};

const TotalCoupons: React.FC = () => {
  const cards = [
    {
      header: '$200.00',
      subheader: 'Total Redeemed',
      percentage: '8%',
      iconSrc: './assets/icon-arrow-narrow-up.svg', // Adjust the path as needed
    },
    {
      header: '551',
      subheader: 'Total Coupons',
      percentage: '8%',
      iconSrc: './assets/icon-arrow-narrow-up-2.svg', // Adjust the path as needed
    },
    {
      header: '$8,723',
      subheader: 'Redeemed Amount',
      percentage: '8%',
      iconSrc: './assets/icon-arrow-narrow-up-3.svg', // Adjust the path as needed
    },
  ];

  return (
    <div className="flex gap-6 justify-center p-5">
      {cards.map((card, index) => (
        <Card
          key={index}
          header={card.header}
          subheader={card.subheader}
          percentage={card.percentage}
          iconSrc={card.iconSrc}
        />
      ))}
    </div>
  );
};

export default TotalCoupons;
