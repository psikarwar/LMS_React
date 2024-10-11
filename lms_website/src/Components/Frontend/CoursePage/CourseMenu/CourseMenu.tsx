import React, { useState } from 'react';

interface Tab {
  id: number;
  label: string;
}

const tabs: Tab[] = [
  { id: 1, label: 'Description' },
  { id: 2, label: 'Instructor' },
  { id: 3, label: 'Syllabus' },
  { id: 4, label: 'Reviews' }
];

const CourseMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`py-4 px-5 rounded-lg font-inter font-normal text-sm leading-6 text-gray-900 cursor-pointer text-center border 
            ${activeTab === tab.id ? 'bg-blue-100 border-none' : 'bg-white border-gray-300'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default CourseMenu;
