import React, { useRef } from 'react';

// Props interface to make the component dynamic
interface ResourcesContentProps {
  contentType: string;
  title: string;
  description: string;
  fileUploadText: string;
  fileUploadDescription: string;
  thumbnailUploadText: string;
  thumbnailUploadDescription: string;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({
  contentType,
  title,
  description,
  fileUploadText,
  fileUploadDescription,
  thumbnailUploadText,
  thumbnailUploadDescription,
}) => {
  // Create refs for the file input elements
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  // Handle file input when the user clicks "Browse"
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handleThumbnailUploadClick = () => {
    if (thumbnailInputRef.current) {
      thumbnailInputRef.current.click(); // Trigger the thumbnail input click
    }
  };

  // Handle the file selection event (optional)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log('Selected file:', files[0].name); // Handle file upload logic here
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full pr-[659px]">
      {/* Content Type */}
      <div className="flex flex-row gap-6 p-2 bg-white border border-gray-300 rounded-lg items-start w-[696px]">
        <div className="flex-1">
          <div className="text-sm font-normal text-[#334155]">Content Type</div>
          <div className="text-base font-normal text-[#0f172a]">{contentType}</div>
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-row gap-6 p-2 bg-white border border-gray-300 rounded-lg items-start w-[696px]">
        <div className="flex-1">
          <div className="text-sm font-normal text-[#334155]">Title</div>
          <div className="text-base font-normal text-[#0f172a]">{title}</div>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-row gap-6 p-2 bg-white border border-gray-300 rounded-lg items-start w-[696px]">
        <div className="flex-1">
          <div className="text-sm font-normal text-[#334155]">Description</div>
          <div className="text-base font-normal text-[#0f172a]">
            {description}
          </div>
        </div>
      </div>

      {/* Upload File */}
      <div className="flex flex-col gap-2">
        <div className="text-sm font-normal text-[#334155]">Upload File</div>
        <div className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-300 rounded-lg w-[600px] h-[160px] justify-center">
          <img src="./assets/file-attachment-04.svg" alt="Upload icon" />
          <div className="text-lg font-semibold text-[#0f172a] text-center">
            {fileUploadText}{' '}
            <span className="text-[#1d4ed8] cursor-pointer" onClick={handleFileUploadClick}>
              Browse
            </span>
          </div>
          <div className="text-sm font-normal text-[#0f172a] text-center opacity-50">
            {fileUploadDescription}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange} // Handle file selection
          />
        </div>
      </div>

      {/* Upload Thumbnail */}
      <div className="flex flex-col gap-2">
        <div className="text-sm font-normal text-[#334155]">Upload Thumbnail</div>
        <div className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-300 rounded-lg w-[600px] h-[160px] justify-center">
          <img src="./assets/icon-add-image.svg" alt="Upload icon" />
          <div className="text-lg font-semibold text-[#0f172a] text-center">
            {thumbnailUploadText}{' '}
            <span className="text-[#1d4ed8] cursor-pointer" onClick={handleThumbnailUploadClick}>
              Browse
            </span>
          </div>
          <div className="text-sm font-normal text-[#0f172a] text-center opacity-50">
            {thumbnailUploadDescription}
          </div>
          <input
            ref={thumbnailInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange} // Handle file selection
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesContent;
