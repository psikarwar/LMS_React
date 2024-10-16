import React from 'react';
import backimg from '../../../../../../../assets/icon-back.svg';

interface ChapterTitleProps {
  chapterTitle: string;
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({ }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-white">
      <div className="flex items-center gap-2">
        <img src={backimg} alt="Back" className="w-6 h-6" />
        <span className="font-semibold text-lg text-gray-800">Chapter-1 The Solid State</span>
      </div>
      <div className="flex gap-2">
        <button className="px-6 py-2 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition">
          Delete
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium text-sm border border-gray-300 hover:bg-gray-200 transition">
          Move to Draft
        </button>
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition">
          Add Course
        </button>
      </div>
    </div>
  );
};

export default ChapterTitle;
