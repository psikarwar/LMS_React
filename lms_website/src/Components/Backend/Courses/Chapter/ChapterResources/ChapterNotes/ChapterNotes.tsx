import React from 'react';

// Props interface to make the component dynamic
interface ChapterNotesProps {
  title: string;
  content: string;
}

const ChapterNotes: React.FC<ChapterNotesProps> = ({ title, content }) => {
  return (
    <div className="ml-80 flex flex-col gap-1 w-full max-w-[1266px]">
      <h2 className="font-inter font-semibold text-[18px] leading-[160%] text-[#0f172a]">
        {title}
      </h2>
      <p className="font-inter font-normal text-[16px] leading-[160%] text-[#334155]">
        {content}
      </p>
    </div>
  );
};

export default ChapterNotes;
