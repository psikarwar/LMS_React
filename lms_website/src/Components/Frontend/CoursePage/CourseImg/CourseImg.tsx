import React from 'react';
import img1 from '../../../../assets/image-4.svg';
import { Link } from 'react-router-dom';

const CourseImg: React.FC = () => {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-[16px] border border-gray-200 overflow-hidden font-inter mx-auto">
      <img
        src={img1}
        alt="Product"
        className="w-full max-w-[356px] h-[200px] object-cover m-[24px] mx-auto"
      />

      <div className="px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-semibold text-xl sm:text-2xl text-gray-900">$49.5</span>
          <div className="relative font-semibold text-lg sm:text-xl text-gray-900 opacity-20">
            <span>$99.5</span>
            <img
              src="./assets/rectangle-1086.svg"
              alt="strike-through"
              className="absolute top-[10px] left-0 w-full"
            />
          </div>
          <span className="font-semibold text-lg sm:text-xl text-green-600">50% Off</span>
        </div>

        <div className="flex flex-col gap-4 mb-14">
          <Link to="/shopping">
          <button className="w-full py-2.5 px-6 bg-gray-900 text-white rounded-md font-medium text-sm sm:text-base leading-6">
            Add To Cart
          </button>
          </Link>
          <button className="w-full py-2.5 px-6 border border-gray-900 text-gray-900 rounded-md font-medium text-sm sm:text-base leading-6">
            Buy Now
          </button>
        </div>
      </div>

      <img src="./assets/line-13.svg" alt="separator" className="w-full" />

      <div className="px-6 pb-6">
        <span className="font-medium text-base sm:text-lg text-gray-900 mb-2 block">Share</span>
        <img
          src="./assets/image-13.svg"
          alt="Share icons"
          className="w-full max-w-[304px] h-[48px] mx-auto"
        />
      </div>
    </div>
  );
};

export default CourseImg;
