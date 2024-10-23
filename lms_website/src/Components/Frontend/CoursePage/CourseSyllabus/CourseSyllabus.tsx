import React from 'react';
import { chevdownimg } from '../../../images';

interface CourseItem {
  title: string;
  lessons: number;
  duration: string;
}

interface CourseSyllabusProps {
  syllabus: CourseItem[];
}

const CourseSyllabus: React.FC<CourseSyllabusProps> = ({ syllabus }) => {
  return (
    <div className="max-w-2xl p-4 md:p-6 lg:p-8 lg:max-w-4xl lg:ml-0 font-inter text-gray-800">
      <h2 className="font-semibold text-lg text-gray-900 mb-4">Syllabus</h2>

      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow">
        {syllabus.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-300">
              <div className="flex items-center gap-2 md:gap-4 font-semibold text-lg text-gray-900">
                <img
                  src={chevdownimg}
                  alt="expand"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <span>{item.title}</span>
              </div>
              <div className="flex gap-2 md:gap-4 font-normal text-sm text-gray-600">
                <span>{item.lessons} Lessons</span>
                <span>{item.duration}</span>
              </div>
            </div>

            {index < syllabus.length - 1 && (
              <div className="h-px bg-gray-300 mx-4 md:mx-6" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CourseSyllabus;
