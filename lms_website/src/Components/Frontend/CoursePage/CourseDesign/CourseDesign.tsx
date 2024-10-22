import React from 'react';
import { Link } from 'react-router-dom';

interface CourseDesignProps {
  title: string;
  description: string;
  ratingScore: number;
  ratingCount: string;
  totalHours: string;
  lectures: string;
  levels: string;
  creatorName: string;
  languages: string[];
}

const CourseDesign: React.FC<CourseDesignProps> = ({
  title,
  description,
  ratingScore,
  ratingCount,
  totalHours,
  lectures,
  levels,
  creatorName,
  languages,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-4 sm:p-6 bg-gray-50 text-gray-800">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-4 sm:mb-8 text-xs sm:text-sm text-gray-500">
        <span className="hover:text-blue-500 cursor-pointer">Home</span>
        <img src="./assets/icon-chevron-right-small.svg" alt="chevron right" />
        <Link to="/category">
        <span className="hover:text-blue-500 cursor-pointer">Categories</span>
        </Link>
        <img src="./assets/icon-chevron-right-small.svg" alt="chevron right" />
        <span className="text-blue-600 cursor-pointer">Introduction to User Experience Design</span>
      </nav>

      {/* Course Content */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">{title}</h1>
        <p className="text-sm sm:text-base leading-6 sm:leading-7 mb-4 sm:mb-6">{description}</p>

        {/* Course Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg sm:text-xl font-semibold">{ratingScore}</span>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="./assets/phosphor-icons-star.svg"
                alt="star"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
            ))}
            <span className="text-xs sm:text-sm text-gray-500">({ratingCount} rating)</span>
          </div>
          <span className="hidden sm:block mx-4 h-4 border-l border-gray-300"></span>
          <span className="text-xs sm:text-sm text-gray-600">
            {totalHours} Total Hours. {lectures} Lectures. {levels}
          </span>
        </div>

        {/* Creator */}
        <div className="flex items-center gap-2 mb-4">
          <img src="./assets/ellipse-5.svg" alt="creator" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full" />
          <span className="text-gray-600 text-xs sm:text-sm">Created by {creatorName}</span>
        </div>

        {/* Languages */}
        <div className="flex items-center gap-2">
          <img src="./assets/globe-02.svg" alt="languages" className="w-4 sm:w-5 h-4 sm:h-5" />
          <span className="text-gray-600 text-xs sm:text-sm">{languages.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDesign;
