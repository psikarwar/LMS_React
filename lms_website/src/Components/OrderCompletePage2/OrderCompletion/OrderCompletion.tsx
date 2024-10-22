import React from 'react';

const courseChapters = [
  {
    number: 1,
    title: "What is User Experience (UX) Design?",
    checkbox: "./assets/checkbox.svg",
    video: "./assets/video-recorder.svg",
    dark: false,
  },
  {
    number: 2,
    title: "Historical Overview of UX Design",
    checkbox: "./assets/checkbox-2.svg",
    video: "./assets/video-recorder-2.svg",
    dark: false,
  },
  {
    number: 3,
    title: "Understanding User-Centered Design",
    checkbox: "./assets/checkbox-3.svg",
    video: "./assets/video-recorder-3.svg",
    dark: true,
  },
  {
    number: 4,
    title: "The Role of UX Design in Digital Products",
    checkbox: "./assets/checkbox-4.svg",
    video: "./assets/video-recorder-4.svg",
    dark: false,
  },
  {
    number: 5,
    title: "Introduction to UX Design Tools and Techniques",
    checkbox: "./assets/checkbox-5.svg",
    video: "./assets/video-recorder-5.svg",
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
            <img src="./assets/chevron-down.svg" alt="Expand" className="w-4 h-4" />
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
