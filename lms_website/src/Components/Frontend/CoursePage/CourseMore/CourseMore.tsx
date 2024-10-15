import React from 'react';
import courseimg from '../../../../assets/Rectangle 1080.svg'

interface CourseMoreProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  ratingsCount: number;
  details: string;
  price: string;
}

const CourseMore: React.FC<CourseMoreProps> = ({ image, title, author, ratingsCount, details, price }) => {
  return (
    <div className="w-66 p-4 border border-gray-200 rounded-lg bg-white flex flex-col gap-2">
      <img src={courseimg} alt={title} className="w-full h-36 object-cover rounded-md" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="font-normal text-sm text-gray-500">{author}</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={`./assets/icon-${i + 1}.svg`} alt="star" className="w-5 h-5" />
          ))}
          <span className="font-semibold text-xs text-gray-500">({ratingsCount} Ratings)</span>
        </div>
        <p className="font-normal text-sm text-gray-500">{details}</p>
        <p className="font-semibold text-xl text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default CourseMore;
