import React from 'react';
import { checkboximg, checkimg2, checkimg3, checkimg4, checkimg5, icondown, videorecimg } from '../../images';

const courseChapters = [
  {
    number: 1,
    title: "What is User Experience (UX) Design?",
    checkbox: checkboximg,
    video: videorecimg,
    dark: false,
  },
  {
    number: 2,
    title: "Historical Overview of UX Design",
    checkbox: checkimg2,
    video: videorecimg,
    dark: false,
  },
  {
    number: 3,
    title: "Understanding User-Centered Design",
    checkbox: checkimg3,
    video: videorecimg,
    dark: true,
  },
  {
    number: 4,
    title: "The Role of UX Design in Digital Products",
    checkbox: checkimg4,
    video: videorecimg,
    dark: false,
  },
  {
    number: 5,
    title: "Introduction to UX Design Tools and Techniques",
    checkbox: checkimg5,
    video: videorecimg,
    dark: false,
  },
];

const OrderCompletion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Course Completion</h1>
        </div>

        {/* Course Section */}
        <div className="cursor-pointer px-6 py-4 flex justify-between items-center border-b border-gray-200 hover:bg-gray-50">
          <div className="flex items-center space-x-4">
            <img src={icondown} alt="Expand" className="w-4 h-4" />
            <span className="text-lg font-semibold text-gray-900">Introduction to UX Design</span>
          </div>
        </div>

        {/* Course Chapters */}
        {courseChapters.map((chapter) => (
          <div
            key={chapter.number}
            className={`px-6 py-4 flex justify-between items-center border-b border-gray-200 ${chapter.dark ? "bg-gray-900 text-white" : ""}`}
          >
            <div className="flex items-center space-x-4">
              <img className="w-5 h-5" src={chapter.checkbox} alt={`Checkbox for chapter ${chapter.number}`} />
              <span className="text-sm font-medium">{chapter.number}.</span>
              <span className={`text-sm ${chapter.dark ? "text-white" : "text-gray-900"}`}>{chapter.title}</span>
            </div>
            <img className="w-5 h-5" src={chapter.video} alt={`Video icon for chapter ${chapter.number}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCompletion;
