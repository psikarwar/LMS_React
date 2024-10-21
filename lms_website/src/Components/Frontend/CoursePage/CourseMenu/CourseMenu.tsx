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
    <div className="flex justify-between">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex-1 py-4 text-center rounded-lg font-inter font-normal text-sm leading-6 text-gray-900 cursor-pointer 
            ${activeTab === tab.id ? 'bg-blue-100 border-none' : 'bg-white border border-gray-300'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default CourseMenu;
