import React, { useState } from 'react';
import ChapterTitle from '../ChapterDetails/ChapterTitle/ChapterTitle'; // Adjust the import path accordingly
import ChapterTabs from '../ChapterDetails/ChapterTabs/ChapterTabs'; // Import the ChapterTabs component
import SeoNotes from './SeoNotes/SeoNotes'; // Import the SeoNotes component

const ChapterSeo: React.FC = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Seo'); // Default to 'Seo'

  // List of tabs to be displayed
  const tabs = ['Details', 'Resources', 'SEO'];

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="chapter-seo-container ml-80">
      {/* Call the ChapterTitle component */}
      <ChapterTitle chapterTitle="Chapter-1 The Solid State" />

      {/* Call the ChapterTabs component below ChapterTitle */}
      <ChapterTabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Other contents of ChapterSeo */}
      <div className="seo-content">
        {activeTab === 'SEO' && (
          <SeoNotes 
            title="SEO" 
            notes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          />
        )}
        {activeTab === 'Resources' && <p>Resources Content goes here.</p>}
        {activeTab === 'Details' && <p>Details Content goes here.</p>}
      </div>
    </div>
  );
};

export default ChapterSeo;
