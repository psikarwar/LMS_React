import React from 'react';

// Define props interface
interface SeoNotesProps {
  title: string; // Title for the PPT
  notes: string; // Notes or description for the PPT
}

const SeoNotes: React.FC<SeoNotesProps> = ({ title, notes }) => {
  return (
    <div className="flex flex-col gap-5 w-[361px]">
      
      <div className="flex flex-col p-2 bg-white rounded-lg border border-gray-300 gap-1">
        <label className="font-inter font-normal text-sm leading-6 text-gray-700">
          PPT Title
        </label>
        <div className="font-inter font-normal text-lg leading-7 text-gray-900">
          {title}
        </div>
      </div>

      <div className=" -[1080px] flex flex-col p-2 bg-white rounded-lg border  border-gray-300 gap-1">
        <label className="font-inter font-normal text-sm leading-6 text-gray-700">
          Description
        </label>
        <div className="font-inter font-normal text-lg leading-7 text-gray-900 max-w-[1000px]"> {/* Set max-width */}
          {notes}
        </div>
      </div>
      
    </div>
  );
};

export default SeoNotes;
