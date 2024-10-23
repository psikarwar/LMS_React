import React from 'react';
import img1 from '../../../../assets/rectangle-1080.svg';

// Define Course type
type Course = {
  id: number;
  image: string;
  title: string;
  author: string;
  ratings: number;
  hours: number;
  lectures: number;
  level: string;
  price: number;
};

const FeaturedCourses: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="font-inter font-semibold text-2xl text-gray-900 mb-6">
        Featured Courses
      </h2>
      <div className="flex flex-wrap justify-between gap-10">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-xl p-4 w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-20px)]">
            <img
              src={img1}
              alt={course.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="font-inter font-semibold text-lg text-gray-900">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600">{course.author}</p>
              <div className="flex items-center gap-2 mt-2">
                {/* Example using static icons - can be dynamic if needed */}
                <img src="./assets/icon.svg" alt="Star" className="w-5 h-5" />
                <img src="./assets/icon-2.svg" alt="Star" className="w-5 h-5" />
                <img src="./assets/icon-3.svg" alt="Star" className="w-5 h-5" />
                <img src="./assets/icon-4.svg" alt="Star" className="w-5 h-5" />
                <img src="./assets/icon-5.svg" alt="Star" className="w-5 h-5" />
                <span className="text-xs text-gray-600">({course.ratings} Ratings)</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {course.hours} Total Hours. {course.lectures} Lectures. {course.level}
              </p>
              <p className="font-inter font-semibold text-xl text-gray-900 mt-2">
                ${course.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
