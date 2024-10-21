import React from 'react';
import starimg from '../../../../assets/Frame 427318789.svg';

interface CourseProps {
  title: string;
  author: string;
  rating: number;
  totalRatings: number;
  totalHours: string;
  lectures: number;
  level: string;
  price: string;
  imageSrc: string;
}

const DesignCourse: React.FC<CourseProps> = ({ 
  title, 
  author, 
  totalRatings, 
  totalHours, 
  lectures, 
  level, 
  price, 
  imageSrc 
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-xs sm:max-w-md mx-auto">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 truncate">{title}</h3>
        <p className="text-sm text-gray-600">By {author}</p>
        <div className="flex items-center text-xs text-gray-600 mt-2">
          <img src={starimg} alt="Star" className="w-13 h-5" />
          <span className="ml-1">({totalRatings} Ratings)</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {totalHours} Total Hours. {lectures} Lectures. {level}
        </p>
        <p className="font-semibold text-xl text-gray-900 mt-2">${price}</p>
      </div>
    </div>
  );
};

export default DesignCourse;
