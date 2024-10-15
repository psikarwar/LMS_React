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
    <div className="flex flex-col gap-4 text-slate-700 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">About {mentorName}</h2>
        <p className="text-base font-normal leading-7">{aboutDescription}</p>
      </div>
      
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">Areas of Expertise</h2>
        <ul className="list-disc ml-5 text-base font-normal leading-7">
          {expertiseAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-slate-900 leading-6">Professional Experience</h2>
        <p className="text-base font-normal leading-7">{experienceDescription}</p>
      </div>
    </div>
  );
};

export default MentorArea;
