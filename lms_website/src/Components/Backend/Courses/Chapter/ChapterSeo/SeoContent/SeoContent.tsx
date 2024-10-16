import React from 'react';

interface SeoContentProps {
  title: string; // Title for the SEO section
  content: string; // Content for the SEO section
}

const SeoContent: React.FC<SeoContentProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-inter font-semibold text-lg leading-tight text-gray-900">
        {title}
      </h1>
      <p className="font-inter font-normal text-base leading-tight text-gray-700 max-w-full w-[1266px]">
        {content}
      </p>
    </div>
  );
};

export default SeoContent;
