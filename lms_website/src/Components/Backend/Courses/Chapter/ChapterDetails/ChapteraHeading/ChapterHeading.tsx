import React from 'react';

// Define the props interface for the ChapterHeading component
interface ChapterHeadingProps {
  paragraph: string; // Paragraph text
}

// Functional component definition with the defined props
const ChapterHeading: React.FC<ChapterHeadingProps> = ({ paragraph }) => {
  return (
    <div className="flex flex-col gap-1 w-full max-w-[1253px]">
      <h2 className="font-inter font-semibold text-lg leading-[160%] text-[#0f172a]">
        Chapter Details
      </h2>
      <p className="font-inter font-normal text-base leading-[160%] text-[#334155]">
        {paragraph}
      </p>
    </div>
  );
};

export default ChapterHeading;
