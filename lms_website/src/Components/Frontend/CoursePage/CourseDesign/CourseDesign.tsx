import React from 'react';

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
    <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-50 text-gray-800">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8 text-sm text-gray-500">
        <span className="hover:text-blue-500">Home</span>
        <img src="./assets/icon-chevron-right-small.svg" alt="chevron right" />
        <span className="hover:text-blue-500">Categories</span>
        <img src="./assets/icon-chevron-right-small.svg" alt="chevron right" />
        <span className="text-blue-600">Introduction to User Experience Design</span>
      </nav>

      {/* Course Content */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-base leading-7 mb-6">{description}</p>

        {/* Course Details */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg font-semibold">{ratingScore}</span>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="./assets/phosphor-icons-star.svg"
                alt="star"
                className="w-5 h-5"
              />
            ))}
            <span className="text-sm text-gray-500">({ratingCount} rating)</span>
          </div>
          <span className="mx-4 h-4 border-l border-gray-300"></span>
          <span className="text-sm text-gray-600">{totalHours} Total Hours. {lectures} Lectures. {levels}</span>
        </div>

        {/* Creator */}
        <div className="flex items-center gap-2 mb-4">
          <img src="./assets/ellipse-5.svg" alt="creator" className="w-8 h-8 rounded-full" />
          <span className="text-gray-600">Created by {creatorName}</span>
        </div>

        {/* Languages */}
        <div className="flex items-center gap-2">
          <img src="./assets/globe-02.svg" alt="languages" className="w-5 h-5" />
          <span className="text-gray-600">{languages.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDesign;
