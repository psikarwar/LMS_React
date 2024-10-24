import React from 'react';
import { Link } from 'react-router-dom';
import { imag13img, image4img, line13img, rect1086img } from '../../../images';

interface CourseImgProps {
  className?: string;
}

const CourseImg: React.FC<CourseImgProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-[400px] bg-white rounded-[16px] border border-gray-200 overflow-hidden font-inter mx-auto ${className}`}>
      {/* Product Image */}
      <img
        src={image4img}
        alt="Product"
        className="w-full max-w-[356px] h-[200px] object-cover m-[24px] mx-auto sm:h-[250px] md:h-[300px]"
      />

      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6">
          {/* Price and Discount Section */}
          <span className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-900">$49.5</span>
          <div className="relative font-semibold text-lg sm:text-xl text-gray-900 opacity-20">
            <span>$99.5</span>
            <img
              src={rect1086img}
              alt="strike-through"
              className="absolute top-[10px] left-0 w-full"
            />
          </div>
          <span className="font-semibold text-lg sm:text-xl text-green-600">50% Off</span>
        </div>

        {/* Add to Cart and Buy Now Buttons */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-14">
          <Link to="/shopping">
            <button className="w-full py-2.5 px-4 sm:px-6 bg-gray-900 text-white rounded-md font-medium text-sm sm:text-base leading-6">
              Add To Cart
            </button>
          </Link>
          <button className="w-full py-2.5 px-4 sm:px-6 border border-gray-900 text-gray-900 rounded-md font-medium text-sm sm:text-base leading-6">
            Buy Now
          </button>
        </div>
      </div>

      {/* Separator Line */}
      <img src={line13img} alt="separator" className="w-full" />

      {/* Share Section */}
      <div className="px-4 sm:px-6 pb-6">
        <span className="font-medium text-base sm:text-lg text-gray-900 mb-2 block">Share</span>
        <img
          src={imag13img}
          alt="Share icons"
          className="w-full max-w-[250px] sm:max-w-[304px] h-[48px] mx-auto"
        />
      </div>
    </div>
  );
};

export default CourseImg;
