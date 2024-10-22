import React, { useState } from 'react';
import ChapterTitle from './ChapterTitle/ChapterTitle';
import ChapterTabs from './ChapterTabs/ChapterTabs';
import ChapterHeading from './ChapteraHeading/ChapterHeading';
import ChapDescription from './ChapteraHeading/ChapDescription/ChapDescription';
import { useParams } from 'react-router-dom';

const chapters = [
  { id: 1, title: 'The Solid State' },
  { id: 2, title: 'Solutions' },
  { id: 3, title: 'Electrochemistry' },
  { id: 4, title: 'Chemical Kinetics' },
  { id: 5, title: 'Surface Chemistry' },
  { id: 6, title: 'General Principles and Processes of Isolation of Elements' },
  { id: 7, title: 'The p-Block Elements' },
  { id: 8, title: 'The d & f Block Elements' },
  { id: 9, title: 'Coordination Compounds' },
  { id: 10, title: 'Haloalkanes and Haloarenes' },
];

const ChapterDetails: React.FC = () => {
  // Get the first chapter or any specific logic you prefer
  const id = Number(useParams());
  
  // const Id=Number(id)
  // console.log(id);
  // console.log(Id);
  const found = chapters.find((element) => element.id== id);
  const chapter = found
    // chapters[id];
  // For example, the first chapter
  
  const [activeTab, setActiveTab] = useState('Details');
  
  const tabs = ['Details', 'Resources', 'SEO'];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {chapter ? (
        <>
          <ChapterTitle chapterTitle={chapter.title} />
          <ChapterTabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
          />
          <div className="mt-4">
            {activeTab === 'Details' && (
              <>
                <ChapterHeading 
                  paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." 
                />
                <ChapDescription 
                  title={`Chapter ${chapter.id} - ${chapter.title}`} 
                  subtitle="Learn about this chapter with examples and detailed explanations!" 
                  description="This chapter covers the fundamentals and advanced concepts necessary to understand the subject matter." 
                />
              </>
            )}
            {activeTab === 'Resources' && <div>Resources Content for {chapter.title}</div>}
            {activeTab === 'SEO' && <div>SEO Content for {chapter.title}</div>} 
          </div>
        </>
      ) : (
        <p>Chapter not found.</p>
      )}
    </div>
  );
};

export default ChapterDetails;
