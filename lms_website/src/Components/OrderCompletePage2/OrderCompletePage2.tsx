// OrderCompletePage2.tsx
import React from 'react';

interface Lesson {
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface Course {
  title: string;
  lessons: Lesson[];
}

interface OrderCompletePage2Props {
  course: Course;
  imageUrl: string;
}

const OrderCompletePage2: React.FC<OrderCompletePage2Props> = ({ course, imageUrl }) => {
  return (
    <div className="flex justify-between p-8 bg-white shadow-lg rounded-lg">
      {/* Course Image Section */}
      <div className="w-1/2">
        <img className="rounded-lg w-full h-full object-cover" src={imageUrl} alt={course.title} />
      </div>

      {/* Course Details Section */}
      <div className="w-1/3 pl-8">
        <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
        <h2 className="text-lg font-semibold mb-6">Course Completion</h2>
        <ul className="space-y-4">
          {course.lessons.map((lesson, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={lesson.isCompleted}
                  className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                  readOnly
                />
                <span className={lesson.isCompleted ? "text-gray-500 line-through" : ""}>
                  {index + 1}. {lesson.title}
                </span>
              </div>
              <span className="text-gray-500">{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCompletePage2;
