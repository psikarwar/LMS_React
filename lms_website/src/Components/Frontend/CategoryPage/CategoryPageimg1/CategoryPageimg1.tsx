import React from 'react';
// import CategoryPage from '../CategoryPage';

const CategoryPageimg1: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl w-72 p-4 flex flex-col gap-4 shadow-sm">
      <img
        src="./assets/rectangle-1080.svg"
        alt="Course"
        className="w-full h-auto rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-inter font-semibold text-lg leading-loose text-slate-900">
          Beginner’s Guide to Design
        </h3>
        <p className="font-inter font-normal text-sm leading-6 text-slate-600">
          By Ronald Richards
        </p>
        <div className="flex items-center gap-2">
          <img src="./assets/icon.svg" alt="Star" />
          <img src="./assets/icon-2.svg" alt="Star" />
          <img src="./assets/icon-3.svg" alt="Star" />
          <img src="./assets/icon-4.svg" alt="Star" />
          <img src="./assets/icon-5.svg" alt="Star" />
          <span className="font-inter font-semibold text-xs leading-4 text-slate-600">
            (1200 Ratings)
          </span>
        </div>
        <p className="font-inter font-normal text-sm leading-6 text-slate-600">
          22 Total Hours. 155 Lectures. Beginner
        </p>
        <p className="font-inter font-semibold text-xl leading-normal text-slate-900 mt-2">
          $149.9
        </p>
      </div>
    </div>
  );
};

export default CategoryPageimg1;
