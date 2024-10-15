import React from 'react';
import img1 from '../../../../assets/image-4.svg';

const CourseImg: React.FC = () => {
  return (
    <div className="w-[400px] bg-white rounded-[16px] border border-gray-200 overflow-hidden font-inter">
      <img
        src={img1}
        alt="Product"
        className="w-[356px] h-[200px] object-cover m-[24px]"
      />

      <div className="px-[24px]">
        <div className="flex items-center gap-[13px] mb-[24px]">
          <span className="font-semibold text-[24px] text-gray-900">$49.5</span>
          <div className="relative font-semibold text-[18px] text-gray-900 opacity-20">
            <span>$99.5</span>
            <img
              src="./assets/rectangle-1086.svg"
              alt="strike-through"
              className="absolute top-[10px] left-0 w-full"
            />
          </div>
          <span className="font-semibold text-[20px] text-green-600">50% Off</span>
        </div>

        <div className="flex flex-col gap-[16px] mb-[58px]">
          <button className="w-[304px] py-[10px] px-[24px] bg-gray-900 text-white rounded-[8px] font-medium text-[14px] leading-[160%]">
            Add To Cart
          </button>
          <button className="w-[304px] py-[10px] px-[24px] border border-gray-900 text-gray-900 rounded-[8px] font-medium text-[14px] leading-[160%]">
            Buy Now
          </button>
        </div>
      </div>

      <img src="./assets/line-13.svg" alt="separator" className="w-full" />

      <div className="px-[24px] pb-[24px]">
        <span className="font-medium text-[16px] text-gray-900 mb-[8px] block">Share</span>
        <img
          src="./assets/image-13.svg"
          alt="Share icons"
          className="w-[304px] h-[48px]"
        />
      </div>
    </div>
  );
};

export default CourseImg;
