// src/Components/Frontend/ShoppingCart/ShoppingCartImg.tsx
import React from 'react';
import img1 from '../../../../assets/image 3.svg'

interface CourseCardProps {
  imageSrc: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  duration: string;
  price: string;
  onClickSave: () => void;
  onClickRemove: () => void;
}

const ShoppingCartImg: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  ratingCount,
  duration,
  price,
  onClickSave,
  onClickRemove,
}) => {
  return (
    <div className="flex items-center w-[880px] h-[140px] bg-white rounded-lg border border-gray-300 p-4 box-border">
      <div className="flex">
        <img src={img1} alt={title} className="w-[192px] h-[108px] object-cover rounded-lg" />

        <div className="flex flex-col gap-2 ml-4">
          <div className="font-semibold text-lg text-black">{title}</div>
          <div className="font-normal text-sm text-gray-600">By {instructor}</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="font-medium text-base text-yellow-500">{rating.toFixed(1)}</span>
              {[...Array(5)].map((_, index) => (
                <img
                  src={`./assets/phosphor-icons-star-${index + 3}.svg`}
                  alt="star"
                  key={index}
                  className="w-[19.2px] h-[19.2px]"
                />
              ))}
              <span className="font-normal text-sm text-gray-500">({ratingCount} rating)</span>
            </div>
            <span className="font-normal text-sm text-black">{duration}</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onClickSave} className="font-normal text-sm text-blue-600 bg-transparent border-0 cursor-pointer">
              Save for later
            </button>
            <button onClick={onClickRemove} className="font-normal text-sm text-red-600 bg-transparent border-0 cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="ml-auto font-semibold text-2xl text-black">{price}</div> {/* Adjusted for right alignment */}
    </div>
  );
};

export default ShoppingCartImg;
