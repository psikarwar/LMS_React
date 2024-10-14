import React from 'react';

interface InstructorProps {
  name: string;
  role: string;
  imageSrc: string;
  reviews: number;
  students: number;
  courses: number;
  description: string;
}

const CourseInstructor: React.FC<InstructorProps> = ({
  name,
  role,
  imageSrc,
  reviews,
  students,
  courses,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 font-inter max-w-2xl text-gray-800">
      <h2 className="font-semibold text-xl text-gray-900">Instructor</h2>

      <div className="mt-8">
        <h3 className="font-semibold text-xl text-blue-600">{name}</h3>
        <p className="font-normal text-base text-gray-800">{role}</p>

        <div className="flex gap-4 mt-12">
          <img
            src={imageSrc}
            alt="Instructor"
            className="w-30 h-30 rounded-full object-cover"
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/award-03.svg" alt="Reviews" />
              <span>{reviews.toLocaleString()} Reviews</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/graduation-hat-02.svg" alt="Students" />
              <span>{students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-sm text-gray-900">
              <img src="./assets/play.svg" alt="Courses" />
              <span>{courses.toLocaleString()} Courses</span>
            </div>
          </div>
        </div>
      </div>

      <p className="font-normal text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CourseInstructor;
