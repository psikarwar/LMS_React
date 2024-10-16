import React from 'react';
import './Banner.css';

interface BannerProps {
  iconPath: string;
  amount: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ iconPath, amount, description }) => (
  <div className="banner">
    <img src={iconPath} alt="icon" />
    <div>
      <p className="amount">{amount}</p>
      <p className="description">{description}</p>
    </div>
  </div>
);

export default Banner;
