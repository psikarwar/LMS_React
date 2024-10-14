import React from 'react';

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
    <div className="max-w-2xl font-inter">
      <h2 className="font-semibold text-lg text-gray-900 mb-4">Syllabus</h2>

      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
        {syllabus.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center p-6 border-b border-gray-300">
              <div className="flex items-center gap-4 font-semibold text-lg text-gray-900">
                <img src="./assets/chevron-down.svg" alt="expand" />
                <span>{item.title}</span>
              </div>
              <div className="flex gap-4 font-normal text-sm text-gray-600">
                <span>{item.lessons} Lessons</span>
                <span>{item.duration}</span>
              </div>
            </div>

            {index < syllabus.length - 1 && (
              <div className="h-px bg-gray-300 mx-6" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CourseSyllabus;
