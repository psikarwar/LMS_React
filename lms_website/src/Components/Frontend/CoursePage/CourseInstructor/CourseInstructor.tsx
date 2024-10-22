import React from 'react';
import img1 from '../../../../assets/Ellipse 4.svg';

interface InstructorProps {
  name: string;
  role: string;
  imageSrc: string; // This prop is defined but not used in the current implementation.
  reviews: number;
  students: number;
  courses: number;
  description: string;
}

const CourseInstructor: React.FC<InstructorProps> = ({
  name,
  role,
  reviews,
  students,
  courses,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 font-inter text-gray-800 p-4 md:p-6 lg:p-8 lg:max-w-4xl mx-auto lg:ml-0">
      <h2 className="font-semibold text-xl text-gray-900 mt-4">Instructor</h2>

      <div className="mt-6 md:mt-8">
        <h3 className="font-semibold text-xl text-blue-600 mt-2">{name}</h3>
        <p className="font-normal text-base text-gray-800 mt-1">{role}</p>

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-start md:items-center">
          <img
            src={img1}
            alt="Instructor"
            className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover"
          />

          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/award-03.svg" alt="Reviews" className="w-5 h-5" />
              <span>{reviews.toLocaleString()} Reviews</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/graduation-hat-02.svg" alt="Students" className="w-5 h-5" />
              <span>{students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/play.svg" alt="Courses" className="w-5 h-5" />
              <span>{courses.toLocaleString()} Courses</span>
            </div>
          </div>
        </div>
      </div>

      <p className="font-normal text-base leading-relaxed mt-6">
        {description}
      </p>
    </div>
  );
};

export default CourseInstructor;
