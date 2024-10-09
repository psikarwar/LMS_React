import React from 'react';

const DesignCourse: React.FC = () => {
  return (
    <div className="p-6 font-inter">
      <h1 className="font-bold text-4xl text-gray-900">Design Courses</h1>
      <h2 className="font-semibold text-2xl text-gray-900 mt-6 mb-6">All Development Courses</h2>

      <div className="flex justify-between mb-10">
        <button className="flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm cursor-pointer">
          <img src="./assets/icon-filter.svg" alt="Filter Icon" className="mr-2" />
          Filter
        </button>
        <div className="flex items-center">
          <span className="text-base mr-4">Sort By</span>
          <button className="flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm cursor-pointer">
            Relevance
            <img src="./assets/icon-down-chevron.svg" alt="Down Chevron" className="ml-2" />
          </button>
        </div>
      </div>

      <div className="flex gap-10">
        <aside className="w-[273px]">
          <div className="bg-white border border-gray-200 rounded-lg mb-4">
            <div className="flex justify-between items-center p-4 font-medium text-gray-900">
              Rating
              <img src="./assets/icon-chevron-up.svg" alt="Chevron Up" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg mb-4">
            <div className="flex justify-between items-center p-4 font-medium text-gray-900">
              Number of Chapters
              <img src="./assets/icon-chevron-up.svg" alt="Chevron Up" />
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full"
              src="./assets/rectangle-1080.svg"
              alt="Course"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">Beginner’s Guide to Design</h3>
              <p className="text-sm text-gray-600">By Ronald Richards</p>
              <div className="flex items-center text-xs text-gray-600 mt-2">
                <img src="./assets/icon.svg" alt="Star" />
                <span className="ml-1">(1200 Ratings)</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">22 Total Hours. 155 Lectures. Beginner</p>
              <p className="font-semibold text-xl text-gray-900 mt-2">$149.9</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
          <img src="./assets/icon-left-chevron.svg" alt="Left Chevron" />
        </button>
        <button className="bg-white border border-gray-200 rounded-lg p-3 font-semibold text-gray-900">1</button>
        <button className="bg-white border border-gray-200 rounded-lg p-3">2</button>
        <button className="bg-white border border-gray-200 rounded-lg p-3">3</button>
        <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
          <img src="./assets/chevron-right.svg" alt="Right Chevron" />
        </button>
      </div>
    </div>
  );
};

export default DesignCourse;
