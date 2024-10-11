import React from 'react';

interface Category {
  name: string;
  courses: number;
  icon: string;
}

const categories: Category[] = [
  { name: 'Astrology', courses: 11, icon: './assets/group-136.svg' },
  { name: 'Development', courses: 12, icon: './assets/code-browser.svg' },
  { name: 'Marketing', courses: 12, icon: './assets/briefcase-02.svg' },
  { name: 'Physics', courses: 14, icon: './assets/atom-01.svg' },
];

const TopCategories: React.FC = () => {
  return (
    <div className="px-6 py-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-left mb-6">
        <h2 className="font-inter font-semibold text-2xl leading-[140%] text-gray-900" >
          Top Categories
        </h2>
        <button className="px-6 py-2 rounded-lg bg-transparent border-none cursor-pointer text-blue-500 font-inter font-medium text-sm leading-[160%]">
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-1 min-w-[22%] p-6 bg-white rounded-xl border border-gray-200 text-center shadow-sm"
          >
            <div className="w-[100px] h-[100px] mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <img src={category.icon} alt={category.name} className="w-10 h-10" />
            </div>
            <h3 className="font-inter font-semibold text-lg leading-[150%] text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="font-inter font-normal text-base leading-[160%] text-gray-700">
              {category.courses} Courses
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
