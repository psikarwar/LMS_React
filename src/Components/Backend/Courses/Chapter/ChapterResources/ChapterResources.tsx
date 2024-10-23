import React, { useState } from 'react';
import ChapterTitle from '../ChapterDetails/ChapterTitle/ChapterTitle'; // Adjust the import path as necessary
import ChapterTabs from '../ChapterDetails/ChapterTabs/ChapterTabs'; // Import the ChapterTabs component
import ChapterNotes from './ChapterNotes/ChapterNotes'; // Import the ChapterNotes component
import ResourcesContent from './ResourcesContent/ResourcesContent'; // Import the ResourcesContent component

const ChapterResources: React.FC = () => {
  const chapterTitle = "Chapter-1 The Solid State"; // This can be dynamic if needed

  // State for the active tab
  const [activeTab, setActiveTab] = useState('Resources'); // Default active tab

  // Tab titles
  const tabs = ['Details', 'Resources', 'SEO'];

  // Function to handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <div>
      {/* Call the ChapterTitle component */}
      <ChapterTitle chapterTitle={chapterTitle} />

      {/* Call the ChapterTabs component */}
      <ChapterTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      {/* Conditionally render content based on active tab */}
      <div className="p-4">
        {activeTab === 'Details' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Details for {chapterTitle}</h2>
            {/* Add your details content here */}
          </div>
        )}

        {activeTab === 'Resources' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Resources for {chapterTitle}</h2>
            {/* Render the ChapterNotes component */}
            <ChapterNotes 
              title="Upload Notes"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            {/* Render the ResourcesContent component */}
            <ResourcesContent 
              contentType="Notes" 
              title="Upload Notes"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              fileUploadText="Drag and drop files, or"
              fileUploadDescription="Upload files in Text, Word, PDF."
              thumbnailUploadText="Drag and drop files, or"
              thumbnailUploadDescription="Upload Thumbnail in JPEG, PNG."
            />
          </div>
        )}

        {activeTab === 'SEO' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">SEO for {chapterTitle}</h2>
            {/* Add your SEO content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterResources;
