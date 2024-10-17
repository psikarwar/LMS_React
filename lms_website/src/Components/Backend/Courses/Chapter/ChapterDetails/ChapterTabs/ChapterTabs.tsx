import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for route management

// Define the props interface for the ChapterTabs component
interface ChapterTabsProps {
  tabs: string[];           // Array of tab titles
  activeTab: string;        // Currently active tab
  onTabChange: (tab: string) => void; // Function to change the active tab
}

// Functional component definition with the defined props
const ChapterTabs: React.FC<ChapterTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const location = useLocation(); // Hook to get current route

  // Update the activeTab based on the current route
  useEffect(() => {
    if (location.pathname.includes('chapterresource')) {
      onTabChange('Resources');
    } else if (location.pathname.includes('chapterdetail')) {
      onTabChange('Details');
    } else if (location.pathname.includes('chapterseo')) {
      onTabChange('SEO'); // Updated to 'SEO'
    }
  }, [location.pathname, onTabChange]);

  return (
    <div className="flex items-center border-b border-gray-300">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`cursor-pointer py-4 px-2 text-sm font-medium transition-colors duration-300 
            ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
        >
          {tab === 'Resources' ? (
            <Link to="/chapterresource">
              {tab}
            </Link>
          ) : tab === 'Details' ? (
            <Link to="/chapterdetail">
              {tab}
            </Link>
          ) : tab === 'SEO' ? ( // Updated to 'SEO'
            <Link to="/chapterseo">
              {tab}
            </Link>
          ) : (
            tab
          )}
        </div>
      ))}
    </div>
  );
};

export default ChapterTabs;
