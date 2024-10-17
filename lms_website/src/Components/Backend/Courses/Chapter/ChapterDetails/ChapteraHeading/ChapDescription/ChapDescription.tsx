import React from 'react';

// Define the props interface for the ChapterCard component
interface ChapterCardProps {
  title: string;       // Title of the chapter
  subtitle: string;    // Subtitle of the chapter
  description: string; // Description of the chapter
}

// Component
const ChapDescription: React.FC<ChapterCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[696px]">
      {/* Title Card */}
      <div className="flex flex-row gap-6 p-2 bg-white rounded-lg border border-gray-300 items-start">
        <div className="flex-1">
          <div className="font-inter font-normal text-sm leading-6 text-[#334155]">
            Title
          </div>
          <div className="font-inter font-normal text-base leading-6 text-[#0f172a]">
            {title}
          </div>
        </div>
      </div>

      {/* Subtitle Card */}
      <div className="flex flex-row gap-6 p-2 bg-white rounded-lg border border-gray-300 items-start">
        <div className="flex-1">
          <div className="font-inter font-normal text-sm leading-6 text-[#334155]">
            Subtitle
          </div>
          <div className="font-inter font-normal text-base leading-6 text-[#0f172a]">
            {subtitle}
          </div>
        </div>
      </div>

      {/* Description Card */}
      <div className="flex flex-row gap-6 p-2 bg-white rounded-lg border border-gray-300 items-start">
        <div className="flex-1">
          <div className="font-inter font-normal text-sm leading-6 text-[#334155]">
            Description
          </div>
          <div className="font-inter font-normal text-base leading-6 text-[#0f172a]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapDescription;
