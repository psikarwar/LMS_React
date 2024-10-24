import React from 'react';

interface PromotionCouponProps {
  label: string;
  buttonText: string;
  iconSrc: string;
  buttonLink: string;
}

const PromotionCoupon: React.FC<PromotionCouponProps> = ({
  label,
  buttonText,
  iconSrc,
  buttonLink,
}) => {
  return (
    <div className="flex items-center flex-wrap p-4"> {/* Added flex-wrap and padding */}
      <div className="font-semibold text-[20px] leading-[1.5] text-slate-900 flex-grow min-w-[150px]"> {/* Ensured label is responsive */}
        {label}
      </div>
      <a
        href={buttonLink}
        className="flex items-center bg-blue-500 px-6 py-2 rounded-lg ml-auto cursor-pointer text-white no-underline"
      >
        <img src={iconSrc} alt="Plus Icon" className="w-6 h-6 mr-1.5" />
        <span className="font-medium text-[14px] leading-[1.6]">{buttonText}</span>
      </a>
    </div>
  );
};

export default PromotionCoupon;
