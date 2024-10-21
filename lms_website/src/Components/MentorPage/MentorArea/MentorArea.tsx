import React from 'react';

interface MentorAreaProps {
  mentorName: string;
  aboutDescription: string;
  expertiseAreas: string[];
  experienceDescription: string;
}

const MentorArea: React.FC<MentorAreaProps> = ({
  mentorName,
  aboutDescription,
  expertiseAreas,
  experienceDescription,
}) => {
  return (
    <div className="flex flex-col gap-6 text-slate-700 max-w-4xl mx-auto p-4"> {/* Increased max width and added padding */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">About {mentorName}</h2>
        <p className="text-base font-normal leading-7 max-w-full"> {/* Set max width to full */}
          {aboutDescription}
        </p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">Areas of Expertise</h2>
        <ul className="list-disc ml-5 text-base font-normal leading-7">
          {expertiseAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">Professional Experience</h2>
        <p className="text-base font-normal leading-7 max-w-full"> {/* Set max width to full */}
          {experienceDescription}
        </p>
      </div>
    </div>
  );
};

export default MentorArea;
